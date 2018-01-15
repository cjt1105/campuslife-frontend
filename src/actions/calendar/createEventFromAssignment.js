export default function createEventFromAssignment(arr) {
    let events = arr.map((assignment) => {
        let m_d_y = assignment.dueDate.split("-")
        let year = parseInt(m_d_y[0])
        let month = parseInt(m_d_y[1]) - 1
        let day = parseInt(m_d_y[2])
        let nextDay = day + 1
        let assignmentObject = {
            id: assignment.id,
            title: assignment.type,
            startDate: new Date(year, month, day),
            endDate: new Date(year, month, nextDay),
            description: assignment.description
        }
        return assignmentObject
    })
    return events
}

