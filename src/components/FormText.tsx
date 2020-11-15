import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';

import { SET_TEXT } from '../constants/actionTypes';

const FormText = () => {
  const text = useSelector((state: { text: string }) => state.text);
  const dispatch = useDispatch();

  return (
    <Card bg="light">
      <Card.Header as="h5">Write your text here</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicText">
            <Form.Control
              as="textarea"
              rows={5}
              value={text}
              onChange={(event) =>
                dispatch({
                  type: SET_TEXT,
                  payload: { text: event.target.value },
                })
              }
            />
          </Form.Group>
        </Form>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Button
          variant="primary"
          onClick={() =>
            dispatch({
              type: SET_TEXT,
              payload: { text: '' },
            })
          }
        >
          Reset text
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default FormText;
