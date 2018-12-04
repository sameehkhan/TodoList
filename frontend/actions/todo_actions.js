export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => ({ // This "todos" variable is an array AND the receiveTodos is the action!
  type: RECEIVE_TODOS,
  todos: todos // This is an array
});

export const receiveTodo = todo => (
  {
    type: RECEIVE_TODO,
    todo: todo,
  });

window.receiveTodo = receiveTodo;
