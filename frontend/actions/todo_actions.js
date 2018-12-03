export const RECIEVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';


export const receiveTodos = (todos) => ({ // This "todos" variable is an array AND the receiveTodos is the action!
  type: RECEIVE_TODOS,
  todos: todos // [Do the dishes, take out the trash]
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo: todo
});
