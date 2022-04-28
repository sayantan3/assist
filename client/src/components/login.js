import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function Login(onIdSubmit) {
    const idRef = useRef()
function handleSubmit(e){
    e.preventDefault() // prevent refreshting page during form is filled 

    onIdSubmit(idRef.current.value)
}
  return (
      <Container className="align-items-center d-flex" style = {{height: '100vh'}}>
          <Form onSubmit ={handleSubmit} className="w-100">
              <Form.Group>
                  <Form.Label> Enter Your Id</Form.Label>
                  <Form.Control type="text" ref={idRef} required />
              </Form.Group>
              <Button type = "submit" className="mr-4"> Login </Button>
              <Button variant = "secondary"> Create A New Id </Button>
          </Form>
      </Container>
  )
}
