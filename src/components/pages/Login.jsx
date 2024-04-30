import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Footer } from "../Footer";
import { TopNav } from "../TopNav";
import { CustomInput } from "../CustomInput";
import { useState } from "react";

const Login = () => {
  const inputes = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter Your Email",
      required: true,
    },

    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      required: true,
    },
  ];

  return (
    <div>
      <TopNav />
      <Container className="main" fluid>
        <Row>
          <Col
            md={6}
            className="bg-info main vh-md-100 p-5 d-flex justify-content-center align-items-center"
          >
            <div className="shadow-lg rounded p-3 text-white">
              <h1>Welcome Back</h1>
              <p>Login to your account and take controll of your finance.</p>
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center mt-5 mb-5"
          >
            <div className="shadow-lg p-5 rounded border w-75 mt-5 mb-5">
              <h2>Login now</h2>
              <hr />
              <Form>
                {inputes.map((item, i) => (
                  <CustomInput key={i} {...item} />
                ))}

                <div className="d-grid">
                  <Button variant="primary mt-5 mb-5">Login Now</Button>
                </div>
              </Form>
              <p className="text-center">
                Are you New Here??
                <a href="/signup"> SignUp </a> Now
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* {header} */}
      {/* {main body} */}
      {/* {footer} */}
      <Footer />
    </div>
  );
};

export default Login;
