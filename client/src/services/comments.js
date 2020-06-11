import api from './api-helper';

export const createComment = async (commentData, postId) => {
 const resp = await api.post(`/posts/${postId}/comments/`, { comment: { content: commentData } });
 return resp.data;
}