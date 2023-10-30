import { FETCH_GAMES, UPDATE_PAGES, UPLOAD_GENRES, ADD_GAME, SEARCH_GAMES, FILTER_BY_GENRE, SHOW_ALL, UPDATE_ORDER_PARAMS, JUMP_PAGE, UPDATE_SEARCH_KEY, UPDATE_GENRE_SELECTED } from './action_types'
import axios from 'axios';

//const URL = 'http://localhost:3001/'
const URL = 'https://videogames-pi-hqh4.onrender.com'

export const fetchGames = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${URL}videogames`, payload)
            .then(({ data }) => {
                return dispatch({
                    type: FETCH_GAMES,
                    payload: data,
                });
             });
        } catch (error) {
            console.error(error.message);
        }
    }
}

export const uploadGenres = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${URL}genres`, payload)
            .then(({ data }) => {
                return dispatch({
                    type: UPLOAD_GENRES,
                    payload: data,
                });
            });
        } catch (error) {
            console.error(error.message);
        }
    }
}

export const addGame = (payload) => {
    console.log("payload:", payload);
    return (dispatch) => dispatch({
        type: ADD_GAME,
        payload: payload,
    })
}

export const updatePages = (payload) => {
    return (dispatch) => dispatch({
        type: UPDATE_PAGES,
        payload: payload,
    })
}

export const searchGamesByKey = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${URL}videogames/search/${payload}`)
            .then(({ data }) => {
                console.log("data:",data)
                return dispatch({
                    type: SEARCH_GAMES,
                    payload: data,
                });
            });
        } catch (error) {
            console.error(error.message);
        }
    }
}

export const filterByGenre = (payload) => {
    return (dispatch) => dispatch({
        type: FILTER_BY_GENRE,
        payload: payload,
    })
}

export const showAll = () => {
    return (dispatch) => dispatch({
        type: SHOW_ALL
    })
}

export const updateOrderParams = (payload) => {
    return (dispatch) => dispatch({
        type: UPDATE_ORDER_PARAMS,
        payload: payload,
    })
}

export const jumpPage = (payload) => {
    return (dispatch) => dispatch({
        type: JUMP_PAGE,
        payload: payload,
    })
}

export const updateSearchKey = (payload) => {
    console.log("payload:", payload);
    return (dispatch) => dispatch({
        type: UPDATE_SEARCH_KEY,
        payload: payload,
    })
}


export const updateGenreSelected = (payload) => {
    console.log("payload:", payload);
    return (dispatch) => dispatch({
        type: UPDATE_GENRE_SELECTED,
        payload: payload,
    })
}