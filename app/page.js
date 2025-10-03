import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">To-Do List</h1>
      <TodoList />
    </div>
  );
}
