import dayjs from "dayjs";


export const addEvent = (eventArr, event) => {
    return [...eventArr, event]
}

export const deleteEvent = (eventArr, event) => {
    return eventArr.filter(evt => evt.id !=  event.id)
}


export const updateEvent = (eventArr, event) => {
    return eventArr.map((evt) => 
       evt.id === event.id ? {...evt, description: event.description, title: event.title, day: evt.day} 
       : evt
    )
}