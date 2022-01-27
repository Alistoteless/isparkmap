import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import '../style/login.css';

// Yönetici girişi için ekran HENÜZ ÇALIŞMIYOR!

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { this.setState({ value: event.target.value }); }
  handleSubmit(event) {
    if (this.state.value === 'admin123') {
      this.setState({ isAdmin: true })
      alert('Yönetici girişi başarılı, hoşgeldiniz');
    }
    else {
      alert('Yönetici girişi başarısız oldu! Lütfen tekrar deneyiniz...');
    }
    event.preventDefault();
  }


  render() {
    return (
      <div className="login">
        <h2>Admin Girişi</h2>
        <Form className="form" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="pass">Şifre</Label>
            <Input
              type="password"
              name="pass"
              id="password"
              placeholder="**********"
              value={this.state.value} onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit" value="Submit">Giriş</Button>
        </Form>
      </div>
    );
  }
}
export default Login;