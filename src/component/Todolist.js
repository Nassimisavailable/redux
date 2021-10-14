import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { NewNew } from './NewNew';
import { TodoItem } from './TodoItem';

export const Todolist = () => {
    const todos = useSelector((state) => state.todo.todolist);
   console.log(todos);

   const [isDone, setisDone] = useState(false)
   const handledone = () => {
       setisDone(!isDone);
   }
    return (
        <div className="todo-list">

            <NewNew/>
            <button onClick={handledone}>
                {isDone ? "show undone" : "show done"}
                </button>
             {todos.filter((item)=> item.isDone === isDone)
             .map((item)=>(
                 <TodoItem item={item}/>
             ))}
        </div>
    );
};
