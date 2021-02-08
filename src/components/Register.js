import React, { useState} from 'react';
import { Form, Input, Button, Row, Col } from 'antd';



const Register = () =>{
    const [user, setName] = useState({
        username: "",
        email: "",
        password: ""
      });

      const register = values => {
          console.log('Received values from Register: ', values);
      
          setName(values)
          console.log('line 16', user);
          
          setName(user =>{
          localStorage.setItem('users', JSON.stringify(user));
      
            console.log('line 19',user);
            return user
          });
      
        };

      return (
      <>
      <Row ><Col span={8}></Col>
    <Col span={8} >
    
    <Form  name="normal_login" className="login-form"
      onFinish={register}
    >
      <Form.Item name="email">
        <Input type="text" placeholder="email" />
      </Form.Item>

      <Form.Item name="username">
        <Input placeholder="username" />
      </Form.Item>
      
      <Form.Item  name="password" >
        <Input type="password" placeholder="password" />
      </Form.Item>
      

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">Register</Button>
      </Form.Item>
    </Form>
    </Col>
    <Col style={{textAlign:"left"}} span={8}><h2> username: {user.username} <br /> password: {user.password}</h2>
    <p>email: {user.email}</p></Col>
    </Row>
      
      </>
      )




      
}



export default Register;