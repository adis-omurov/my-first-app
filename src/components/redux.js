const redux = require("redux");
const createStore = redux.createStore;
const initialStore = {
    number:0,
};

//reducer
const counterReducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'INCREMENT': 
            const newState = {...state};
            newState.number++;
            return
            case 'INCREMENT_BY_10':
                const newState2 = {...state};
                newState2.number += 10;
                return newState2;
    }
    return state;
}

//store
const store = createStore(counterReducer);

//subscriber
store.subscribe(() => {
    console.log(store.getState());
})

//action
const newAction = { type: "INCREMENT"};
store.dispatch(newAction);
store.dispatch({type: "DECREMENT"});
store.dispatch({type: "INCREMENT_BY_10"});