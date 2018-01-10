import {
    ADD_REMINDER
} from "../constants";

export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text,
    }
    console.log('action in reminder', action)

    return action
}
