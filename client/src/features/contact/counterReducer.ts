export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export interface CounterState {
    title: string,
    data: number
}

const initialState: CounterState = {
    title: "test",
    data: 42
}

export function increment(amount = 1) {
    return {
        type:INCREMENT_COUNTER,
        payload:amount
    }
}

export function decrement(amount = 1) {
    return {
        type:DECREMENT_COUNTER,
        payload:amount
    }
}

//rather than mutating the data, create a copy of the data then modified it
export default function counterReducer(state = initialState, action: any) {
    
    switch(action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                data: state.data + 1
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                data: state.data - 1
            }
        default:
            return state;
    }
}