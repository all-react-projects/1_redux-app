import { combineReducers } from "redux";
import { ADD_MOVIES, REMOVE_FROM_FAVOURITE, ADD_TO_FAVOURITE, SET_SHOW_FAVOURITES } from "../actions";

const initialMoviesState={
    list:[],
    favourites:[],
    showFavourites:false
};

export function movies(state=initialMoviesState, action){
    // if(action.type===ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies
    //     };
    // }
    // return state;

    switch (action.type) {
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }

            case ADD_TO_FAVOURITE:
                return{
                    ...state,
                    favourites:[action.movie, ...state.favourites]
                }
            case REMOVE_FROM_FAVOURITE:
                const filteredArray=state.favourites.filter(
                    movie=>movie.Title!==action.movie.Title
                );

                return{
                ...state,
                favourites:filteredArray
            }
            case SET_SHOW_FAVOURITES:
                return{
                    ...state,
                    showFavourites:action.isFav
                }
            default:
                return state;
        }
}


const initialSearchState={
    searchResult:{}
}

export function search(state=initialSearchState, action){
    return state;
}


//root reducer
// const initialRootState={
//     movies:initialMoviesState,
//     search:initialSearchState
// }
// export default function rootReducer(state=initialRootState,action){
//     return{
//         movies:movies(state.movies,action),
//         search:search(state.search.action)
//     }
// }


const rootReducer=combineReducers({
    movies:movies,  //we can use only 'movies' that is shorthand
    search:search
});

export default rootReducer;