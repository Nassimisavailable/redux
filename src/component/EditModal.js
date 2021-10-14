
import React, { useState } from 'react'
import { Modal,Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Edittask } from '../redux/Slice/TodoSlice';

export const EditModal = ({item}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [editedtask, seteditedtask] = useState({
        title:"",
        description:"",     
});
    const dispatch = useDispatch()
    const handleEdit=()=>{
    dispatch(Edittask({ ...editedtask,id: item.id}));
};
    return (
        <div>
             <Button variant="primary" onClick={handleShow}>
        Edit Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Enter title" 
        onChange={(e) => seteditedtask({ ...editedtask, title: e.target.value})} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="enter description" 
    onChange={(e) => seteditedtask({ ...editedtask, description: e.target.value})} />
  </Form.Group>
  </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" onClick={() => {
              handleEdit()
              handleClose()
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
