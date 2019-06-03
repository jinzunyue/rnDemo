import {createStore, Reducer, StoreCreator} from "redux";

const toApp: Reducer = (state, action) => {
    if (!state) {
        state = {count: 0};
    }
    const count: number = state.count;
    switch (action.type) {
        case "ADD":
            return {count: count + 1};
        default:
            return state;
    }
};
const store: StoreCreator = createStore(toApp);
export default store;
