import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Addtask } from '../redux/Slice/TodoSlice';

export const NewNew = () => {
    const [newTodo, setnewTodo] = useState({
            id: Math.random(),
            title:"",
            description:"",
            isDone:false,
    });
     const dispatch = useDispatch();
     const handleAdd = (e) =>{
         dispatch(Addtask(newTodo));
     };
    return (
        <div>
            <Form
            onSubmit ={(e)=>{
                e.preventDefault();
                handleAdd();
            }}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Enter title"  onChange={(e)=>setnewTodo({...newTodo, title: e.target.value})}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="enter description" onChange={(e)=>setnewTodo({...newTodo, description: e.target.value})} />
  </Form.Group>
  <Button style={{width:"100%"}} variant="primary" type='submit'>
    Add todo
  </Button>
</Form>
        </div>
    )
}
