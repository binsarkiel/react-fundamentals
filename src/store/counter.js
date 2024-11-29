const DEFAULT_VALUE = {
    count: 0,
};

export const countReducer = (state = DEFAULT_VALUE, action) => {
    if (action.type === "INCREMENT") {
        return { ...state, count: state.count + 1 }
    } else if (action.type === "DECREMENT") {
        const duplicateState = {
            ...state,
        }
        duplicateState.count = state.count - 1;
        return duplicateState;
    } else if (action.type === "SET") {
        const duplicateState = {
            ...state,
        }
        duplicateState.count = action.payload
        return duplicateState;
    } else {
        return state;
    }
}
