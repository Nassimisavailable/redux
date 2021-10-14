import React from 'react'
import { useDispatch } from 'react-redux'
import { Deletetask } from '../redux/Slice/TodoSlice';
import { isDonetask } from '../redux/Slice/TodoSlice';
import { EditModal } from './EditModal';
export const TodoItem = ({item}) => {
    const dispatch = useDispatch();
    const handledelete = () => {
        dispatch(Deletetask({id: item.id}));
    };
    const handledone = () => {
        dispatch(isDonetask({id: item.id}));
    };
    return (
        <div className='todo-item'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            
            <p>{item.isDone? "done" :  "not done"}</p>
            <button className='btn btn-danger' onClick={handledelete}>Delete</button>
            <EditModal iem={item}/>
            <button className='btn btn-danger' onClick={handledone}>Done</button>
        </div>
    )
}
