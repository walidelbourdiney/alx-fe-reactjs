import { create } from "zustand";
export const useTodoStore = create((set) => ({
  todos: [],
  addTask: (task) => set((state) => ({ todos: [...state.todos, task] })),
  removeTask: (id) =>
    set((state) => ({ todos: state.todos.filter((task) => task.id !== id) })),
}));
