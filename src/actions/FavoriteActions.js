import {
    FAVORITE_REQUEST,
    FAVORITE_SUCCES
} from '../constants/Favorite'


export function addFavorite(favorite) {
    return function(dispatch) {
        dispatch({
            type: FAVORITE_REQUEST
        })

        dispatch({
            type: FAVORITE_SUCCES,
            payload: favorite
        })
    }
}