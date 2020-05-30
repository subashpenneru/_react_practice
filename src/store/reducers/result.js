import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat(
                    { 
                        id: new Date().toISOString(), 
                        value: action.counter 
                    })
            }
        case actionTypes.DELETE_RESULT:
            const res = [...state.results];
            const resIndex = res.findIndex(obj => obj.id === action.id);
            if (resIndex >= 0) res.splice(resIndex, 1);
            return {
                ...state,
                results: [...res]
            }
        default:
            return {
                ...state
            }
    }
}

export default resultReducer;