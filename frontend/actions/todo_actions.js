export const RECIEVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';


export const receiveTodos = message => ({
  type: RECEIVE_TODOS,
  message: message
});
