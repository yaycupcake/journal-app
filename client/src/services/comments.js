import api from './api-helper';

export const createComment = async (commentData) => {
 const resp = await api.post('/posts/:post_id/comments/', { comment: commentData });
 return resp.data;
}