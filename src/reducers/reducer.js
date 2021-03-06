import { Map } from 'immutable';
import { getTodayWithFormat, getToday } from '../utils/date.js';
import axios from 'axios'; // hacer requests http
import { browserHistory } from 'react-router'
//utility functions


var setState = function (state, newState) {
    return state.merge(newState);
};


const updateSearchSuccess = function(state, stock, result, isFetching){
    return state.merge(state, {stock: stock, result: result, isFetching: isFetching})
}
const updateSearchIsFetching = function(state, isFetching){
    return state.merge(state, {isFetching: isFetching})
}
const updateSearchFailed= function(state, isFetching, fetchFail, result){

    return state.merge(state, {isFetching: isFetching, fetchFail: fetchFail, result: result});
}

const logout = function(state){
    return state.merge(state, {userId: '', currentCashBalance: 0, items: []});
}
const login = function(state, userId){
    browserHistory.push('/portfolio');
    return state.merge(state, {userId: userId});
}
const register = function(state){
    browserHistory.push('/');
    return state;
}
const getPortfolio = function(state, currentCashBalance, items){
    //browserHistory.push('/portfolio');
    return state.merge(state, {currentCashBalance: currentCashBalance, items: items, isLoading: false});
}
const sell = function(state){
    return state.merge(state, {currentCashBalance: '', isLoading: true});
}
const buy = function(state){
    return state.merge(state, {currentCashBalance: ''});
}
const headerChange = function (state, title, desc, iconNm) {
    return state.set('title', title).set('description', desc).set('iconName', iconNm);
};
const isLoading = function(state){
    return state.merge(state, {isLoading: true});
}

var reducer = function (state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case "SEARCH_SUCCESS":
            console.log(action);

            /*{state,
                stock: action.stock,
                result: action.result !== undefined ? action.result:null,
                isFetching: false,
                fetchError: false}*/
            return updateSearchSuccess(state, action.stock, action.result, false);
                
        case "LOG_OUT":
            return logout(state);
        case "LOG_IN":
            return login(state, action.userId);
        case "REGISTER":
                return register(state)
        case "GET_PORTFOLIO":
            return getPortfolio(state, action.currentCashBalance, action.items);
        case "SELL":
            return sell(state);
        case "BUY":
            return buy(state);           
        case "SEARCH_FAILED":
            console.log('FAIL')
            return updateSearchFailed(state, false, action.fetchFail, undefined)
        case "SEARCH_IS_FETCHING":
            //console.log('FETCH')
            return updateSearchIsFetching(state, true)
        case "LOADING":
            return isLoading(state)
        default: return state;

    };
};



export default reducer;