import * as types from '../types'

export const fetchposts = () => async dispatch => {
    // const res = await axios.get('api/posts');
    dispatch({
        type: types.GET_POSTS,
        payload: ['1st post','second post','third posts']
    })
}