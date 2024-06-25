import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Todo {
  id: number;
  title: string;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string) => void;
}

const TodoContext = React.createContext<TodoContextType | undefined>(undefined);

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'タスク1' },
    { id: 2, title: 'タスク2' },
  ]);

  const addTodo = (title: string) => {
    const newTodo = { id: todos.length + 1, title };
    setTodos([...todos, newTodo]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};

// export { TodoProvider, useTodo };

export default TodoContext;
