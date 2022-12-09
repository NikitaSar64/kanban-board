import { act } from "react-dom/test-utils";

const initialState = {
    backlog: [],
    ready: [],
    inprogress: [],
    finished: [],
}

const reducer = (state = initialState, action) => {

    let updateId = 1;
    switch (action.type) {
        case 'TASK_ADDED_IN_BACKLOG':
            return {
                ...state,
                backlog: [ ...state.backlog, action.payload],
            }
        case 'TASK_ADDED_IN_READY':
            return {
                ...state,
                backlog: state.backlog.filter((task, index) => {
                    if(index != action.payload - 1){
                        task.id = updateId;
                        updateId++;
                        return task;  
                    } 
                }),
                ready: [ ...state.ready, {
                    ...state.backlog[action.payload - 1], 
                    id: state.ready.length + 1}
                ],
        }
        case 'TASK_ADDED_IN_INPROGRESS':
            return {
                ...state,
                ready: state.ready.filter((task, index) => {
                    if(index != action.payload - 1){
                        task.id = updateId;
                        updateId++;
                        return task;  
                    } 
                }),
                inprogress: [ ...state.inprogress, {
                    ...state.ready[action.payload - 1], 
                    id: state.inprogress.length + 1}
                ],
        }
        case 'TASK_ADDED_IN_FINISHED':
            return {
                ...state,
                inprogress: state.inprogress.filter((task, index) => {
                    if(index != action.payload - 1){
                        task.id = updateId;
                        updateId++;
                        return task;  
                    } 
                }),
                finished: [ ...state.finished, {
                    ...state.inprogress[action.payload - 1], 
                    id: state.finished.length + 1}
                ],
        }
        case 'TASK_DISCRIPTION_UPDATED':
            return {
                ...state,
                [action.payload.typeTask]: state[action.payload.typeTask].map((task, index) => {
                    if (index == action.payload.id - 1){
                        task.description = action.payload.description;
                    }
                    return task;
                })
            }
        default: return state
    }
}

export default reducer;