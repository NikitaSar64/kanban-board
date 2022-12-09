export const taskAddedInBacklog = (task) => {
    return {
        type: 'TASK_ADDED_IN_BACKLOG',
        payload: task,
    }
}

export const taskAddedInReady = (id) => {
    return {
        type: 'TASK_ADDED_IN_READY',
        payload: id,
    }
}

export const taskAddedInInProgress = (id) => {
    return {
        type: 'TASK_ADDED_IN_INPROGRESS',
        payload: id,
    }
}

export const taskAddedInFinished = (id) => {
    return {
        type: 'TASK_ADDED_IN_FINISHED',
        payload: id,
    }
}

export const updateTaskDescription = (typeTask, description, id) => {
    return {
        type: 'TASK_DISCRIPTION_UPDATED',
        payload: {
            typeTask,
            description,
            id,
        }
    }
}
