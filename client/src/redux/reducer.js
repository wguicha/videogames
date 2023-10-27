import { FETCH_GAMES, UPDATE_PAGES, UPLOAD_GENRES, ADD_GAME, SEARCH_GAMES, FILTER_BY_GENRE, SHOW_ALL, UPDATE_ORDER_PARAMS, JUMP_PAGE, UPDATE_SEARCH_KEY, UPDATE_GENRE_SELECTED } from './action_types'
import { orderGames } from '../utils/orderGames';
import { filterGames } from '../utils/filterGames';

const initialState = {
    games: [],
    allGames: [],
    byNameGames: [],
    genres: [],
    orderParams: { prop: "id", mode:"asc" },
    pageAdm : { numberPages: 0, itemsPerPage: 12, currentPage: 0},
    searchKey: "",
    selectedGenre: ""
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_GAMES:
            return {
                ...state,
                games: orderGames(action.payload, state.orderParams),
                allGames : action.payload,
                pageAdm: { ...state.pageAdm,
                    numberPages: Math.ceil(action.payload.length/state.pageAdm.itemsPerPage),
                    currentPage: Math.ceil(action.payload.length/state.pageAdm.itemsPerPage) > 0? 1 : 0,
                }
            };

        case UPLOAD_GENRES:
                return {
                    ...state,
                    genres: [
                        ...action.payload
                    ]
                };
        case ADD_GAME:
                return {
                    ...state,
                    games: [
                        ...state.allGames, {...action.payload,
                            genres: action.payload.genres.split(', ').map((x) => ({name : x})),
                            id: state.allGames.length + 1
                        }
                    ],
                    allGames: [
                        ...state.allGames, {...action.payload,
                            genres: action.payload.genres.split(', ').map((x) => ({name: x})),
                            id: state.allGames.length + 1
                        }
                    ]
                };
        case UPDATE_PAGES:
            return {
                ...state,
                pageAdm: { ...state.pageAdm,
                    numberPages: Math.ceil(action.payload.length/state.pageAdm.itemsPerPage),
                    currentPage: Math.ceil(action.payload.length/state.pageAdm.itemsPerPage) > 0? 1 : 0,
                }
            };

        case SEARCH_GAMES:
            return {
                ...state,
                games: orderGames(action.payload, state.orderParams),
                allGames : action.payload,
                pageAdm: { ...state.pageAdm,
                    numberPages: Math.ceil(action.payload.length/state.pageAdm.itemsPerPage),
                    currentPage: Math.ceil(action.payload.length/state.pageAdm.itemsPerPage) > 0? 1 : 0,
                }
            };
        case FILTER_BY_GENRE:
            return {
                ...state,
                games: orderGames(filterGames(state.allGames, action.payload), state.orderParams),
                pageAdm: {
                    ...state.pageAdm,
                    numberPages: Math.ceil(orderGames(filterGames(state.allGames, action.payload), state.orderParams).length/state.pageAdm.itemsPerPage),
                    currentPage: Math.ceil(orderGames(filterGames(state.allGames, action.payload), state.orderParams).length/state.pageAdm.itemsPerPage) > 0? 1 : 0,
                }
            };
        case SHOW_ALL:
            return {
                ...state,
                dogs: orderGames(state.allGames, state.orderParams),
                pageAdm: { ...state.pageAdm,
                    numberPages: Math.ceil(state.allGames.length/state.pageAdm.itemsPerPage),
                    currentPage: Math.ceil(state.allGames.length/state.pageAdm.itemsPerPage) > 0? 1 : 0,
                }
            };
        case UPDATE_ORDER_PARAMS:
            return {
                ...state,
                orderParams: {
                    ...state.orderParams, ...action.payload,
                }
            };
        case JUMP_PAGE:
            return {
                ...state,
                pageAdm: {
                    ...state.pageAdm, currentPage: action.payload,
                }
            }
        case UPDATE_SEARCH_KEY:
            return {
                ...state,
                searchKey: action.payload
            }
        case UPDATE_GENRE_SELECTED:
            return {
                ...state,
                selectedGenre: action.payload
            }
        default:
        return {...state};
    }
};

export default rootReducer;