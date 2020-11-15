import React from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

import './FormatedText.css';

const FormatedText = () => {
  const text = useSelector((state: { text: string }) => {
    return state.text;
  });

  return (
    <Card bg="light">
      <Card.Header as="h5">Pretty Text</Card.Header>
      <Card.Body>
        <Card.Text className="new-font">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FormatedText;
