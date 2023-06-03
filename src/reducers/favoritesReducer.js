import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions.js'

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item => item.id == action.payload.id).length === 0 ? [...state.favorites, action.payload] : state.favorites
            }

        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }


        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item => (action.payload !== item.id))
            }

        default:
            return state;
    }
}

export default reducer;