import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import Button from 'material-ui/Button';
import { GoogleMap,withGoogleMap, Marker, withScriptjs } from "react-google-maps"
import { compose, withProps } from "recompose"
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
let residencesState = null

export default class MapContainer extends Component {
    state = {
        selectedPlace : {
            name: null
        },
        markersLoaded : false
    }

    MyMapComponent = null;

    renderMapComponent = (markers) => {
      this.MyMapComponent = compose(
      withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%`, width: '100%' }} />,
      containerElement: <div style={{ height: `70vh`, width: '70vw', float: 'right' }} />,
      mapElement: <div style={{ height: `100%`, width: '100%' }} />,
    }),
    
      withScriptjs,
      withGoogleMap
    )((props) =>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 35.964668, lng:  -83.926453 }
        }
      >
        {markers}
      </GoogleMap>
    )
    }

    markersLoaded = false;

    constructor(props) {
    super(props)
    this.state = { address: null }
    this.onChange = (address) => this.setState({ address })
  }

  componentDidMount() {
    this.props.getAllResidences()
  }

  onMarkerClick = (residence) => {
    this.props.selectResidence(residence)
  }

  setMarkerState = (state) => {
    let stateArray = Object.values(state)
    return new Promise((resolve, reject) => {
      stateArray.map((el, index) => {
      state[index].open = true;
      this.setState({
          [index]: state[index]
        })
      })
      resolve()
    })
    .then(() => {
      return this.renderMarkersWithInfoBox(stateArray)
    })
  }

  renderMarkersWithInfoBox = (stateArray) => {
  let markers = []
    stateArray.map((el, index) => {
      markers.push(
      <Marker key = {el.id} clickable={true} onClick={this.onMarkerClick.bind(this, el)} position={{ lat: el.lat, lng: el.lng }}>
        {el.open && <InfoBox
        draggable={true}
        key={el.id}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div style={{ backgroundColor: `orange`, opacity: 0.75 }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            {el.name.split(',')[0]}
          </div>
        </div>
      </InfoBox >}
      </Marker>
        )
    })
    return markers
  }


  renderMarkers = (residencesState) => {
    return this.setMarkerState(residencesState)
    .then((val) => val)
  }

  componentDidUpdate() {
    if(this.props.residences.length > 0 && this.markersLoaded === false){
      residencesState = Object.assign({}, this.props.residences)
      this.renderMarkers(residencesState)
      .then((markers) => {
        this.renderMapComponent(markers)
      })
        this.markersLoaded = true;
      }
  }

  submit= (event) => {
    event.preventDefault()

    const name = this.state.address

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        const coords = {
          lat: latLng.lat,
          lng: latLng.lng
        }
        const userId = this.props.user.id
        this.props.createResidence(name, coords, userId)
      })
      .catch(error => console.error('Error', error))
  }

render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
    const mapStyle = {
      width: '70vw',
      height: '70vh',
      position: 'relative',
      float: 'right',
      marginRight: '5vw'
    }

    const myStyles = {
    root: { position: 'absolute' },
    input: { width: '13vw' },
    autocompleteItem: { color: '#8cb1ff' },
    autocompleteItemActive: { color: '#85e1d5' }
  }

   if(this.MyMapComponent != null && this.markersLoaded === true) {
        return (
        <div className="google-maps-container">
        <div>
          <this.MyMapComponent isMarkerShown={true} onClick={this.onMarkerClick} />
        </div>
        <div className="google-places-search">
        <form onSubmit={this.handleFormSubmit}>
          {/*<PlacesAutocomplete inputProps={inputProps} styles={myStyles} />
          <Button classes={{root: 'submit-residence-button'}} onClick={this.submit}>
              Submit
          </Button>*/}
        </form>
        </div>
      </div>
    )
   };
   return null
  }
}
