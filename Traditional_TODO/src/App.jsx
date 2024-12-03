
import { useState } from 'react'
import './App.css'
import AddTodoModal from './components/AddTodoModal'
import Todo from './components/Todo'
import { useTodo } from './context/TodoContext'
function App() {

  const { todos,
    addTodo,
    removeTodo,
    updateTodo } = useTodo()

  console.log(todos)

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);


  return (
    <div className='flex flex-col items-center min-h-screen bg-slate-50'>
      <h1 className="mt-6 text-3xl font-bold underline">
        To-do List
      </h1>

      <div className='grid grid-cols-3 p-2 mt-5 rounded-lg bg-slate-200'>
        {

          todos.map((todo) => (
            <Todo key={todo.id}
              updateTodo={updateTodo}
              removeTodo={removeTodo}
              todo={todo} />)
          )
        }
      </div>
      <AddTodoModal
        isOpen={isAddModalOpen}
        closeModal={closeAddModal}
        addTodo={addTodo}
      />
      <button
        className="px-4 py-2 mt-2 text-white bg-green-500 rounded-md"
        onClick={openAddModal}
      >
        Add Todo
      </button>

    </div>
  )
}

export default App
