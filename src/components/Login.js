import React, { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';



const Login = () => {
  

  const [user, setName] = useState({
    username: "",
    email: "",
    password: ""
  });

  const login = values =>{

    console.log('Received values from Login: ', values.email);
    
    const credential = localStorage.getItem('users',user);
    
    const verifyEmail = JSON.parse(credential).email;

    const verifyPass = JSON.parse(credential).password;

    console.log('already email',verifyEmail);

    console.log('already Pass',verifyPass);


    

    if (values.email === verifyEmail) {
      console.log("Email Verified!");
      if (values.password === verifyPass) {
        console.log("Logged In");
      } else {
        console.log('Invalid Username or password');
      }
    }else{
      console.log("invalid email");
    }

  }

  return (
    <>
    


    <Row>
    <Col span={8}>
    </Col>
    <Col>

    <Form name="login" className="login-form"
      onFinish={login}
    >

      <Form.Item name="email">
        <Input type="text" placeholder="email" />
      </Form.Item>

      <Form.Item  name="password" >
        <Input type="password" placeholder="password" />
      </Form.Item>
      

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">Login</Button>
      </Form.Item>


    </Form>
    
    
    
    </Col>
    </Row>


    </>
  );
  
}

export default Login;