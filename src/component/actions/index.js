import {SEARCH_MOVIE} from './types';
import axios from 'axios';
import {APIKey} from '../../APIKey';

export const searchMovie = text =>{
    return{
        type: SEARCH_MOVIE,
        payload: text
    }
    
};

