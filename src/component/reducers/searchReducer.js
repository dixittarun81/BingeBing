import {SEARCH_MOVIE} from '../actions/types';

const INITIAL_STATE = {
    text: '',
    loading: false,
    movies: [],
    movie: []
}



export default function(state=INITIAL_STATE, action){
    switch(action.type){
        case SEARCH_MOVIE: 
            return{
                ...state,
                text: action.payload
            }
        default:
            return state;
    }
}