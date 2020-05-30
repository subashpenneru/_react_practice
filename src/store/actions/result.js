import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        counter: res
    }
}

export const storeResult = (val) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // const oldCounter = getState().counter.counter;
            dispatch(saveResult(val))
        }, 2000);
    }
}

export const deleteResult = (val) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id: val
    }
}