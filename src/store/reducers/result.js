import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const res = [...state.results];
    const resIndex = res.findIndex(obj => obj.id === action.id);
    if (resIndex >= 0) res.splice(resIndex, 1);
    return [...res];
}

const storeResult = (state, action) => {
    return state.results.concat({id: new Date().toISOString(), value: action.counter});
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: storeResult(state, action)});
        case actionTypes.DELETE_RESULT:
            return updateObject(state, {results: deleteResult(state, action)});
        default:
            return updateObject(state)
    }
}

export default resultReducer;