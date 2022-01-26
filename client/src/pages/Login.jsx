import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import '../style/login.css';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <h2>Admin Girişi</h2>
        <Form className="form">
          <FormGroup>
            <Label for="user">Kullanıcı</Label>
            <Input
              type="text"
              name="user"
              id="user"
              placeholder="yönetici için: admin"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Şifre</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
export default Login;