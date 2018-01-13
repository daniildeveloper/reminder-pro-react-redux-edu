import {
    ADD_REMINDER,
    DELETE_REMINDER
} from "./constants";

const reminder = (action) => {
    let {
        text,
        dueDate
    } = action;
    return {
        // text: action.text,
        id: Math.random(),
        text,
        dueDate,
    }
}

const removeByID = (state = [], id) => {
    const reminders = state.filter(reminder => {
        reminder.id !== id
    });
    return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;

    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            return reminders;
        case DELETE_REMINDER:
            reminders = removeByID(state, action.id);
            return reminders;
        default:
            return state;
    }
}

export default reminders;
