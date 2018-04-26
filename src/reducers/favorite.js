import {FAVORITE_REQUEST, FAVORITE_SUCCES} from "../constants/Favorite";

const initialState = {
    posts: [
        {
            type: 1,
            title:'Материал 1',
            created_at: Date.now(),
            updated_at: Date.now(),
            status: 2,
        },
        {
            type: 2,
            title:'Материал 2',
            created_at: Date.now(),
            updated_at: Date.now(),
            status: 2,
        }
    ],
    fetching: false,
}
export default function favorite(state = initialState, action) {
    switch(action.type) {
        case FAVORITE_REQUEST:
            return {...state, fetching: true}
        case FAVORITE_SUCCES:
            let posts = state.posts;
            posts.push(action.payload);
            return {...state, posts:posts, fetching: false}
        default:
            return state
    }
}