import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const cards = ({category}) => {
  return (
    <Card style={{ width: '18rem ',height:'100%',boxShadow:'5px 5px 10px black' }} className='hover:scale-105 cursor-pointer ease-in duration-100'>
    <Card.Img variant="top" src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600" />
    <Card.Body>
      <Card.Title>{category.name}</Card.Title>
    </Card.Body>
  </Card>
  )
}

export default cards