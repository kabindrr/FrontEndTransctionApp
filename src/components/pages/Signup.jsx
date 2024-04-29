import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Footer } from "../Footer";
import { TopNav } from "../TopNav";
import { CustomInput } from "../CustomInput";
import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: null,
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const inputes = [
    {
      label: "First Name",
      name: "Name",
      type: "Text",
      Placeholder: "First Name",
      required: true,
    },
    {
      label: "Last Name",
      name: "Name",
      type: "Text",
      Placeholder: "Last Name",
      required: true,
    },
    {
      label: "Email",
      name: "Email",
      type: "Email",
      Placeholder: "Enter Your Email",
      required: true,
    },
    {
      label: "Password",
      name: "Password",
      type: "Password",
      Placeholder: "Enter Password",
      required: true,
    },

    {
      label: "Confirm Password",
      name: "Password",
      type: "Password",
      Placeholder: "Confirm Password",
      required: true,
    },
  ];
  return (
    <div>
      {/* {header} */}
      <TopNav />

      {/* {main body} */}

      <Container className="main" fluid>
        <Row>
          <Col
            md={6}
            className="bg-info main vh-md-100 d-flex justify-content-center align-items-center"
          >
            <div className="shadow-lg rounded p-3 text-white">
              <h1>Join Our Community</h1>
              <p>Use our simple system to track your transaction</p>
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center mt-5 mb-5"
          >
            <div className="shadow-lg p-5 rounded border w-75 mt-5 mb-5">
              <h2>Sign Up Now</h2>
              <hr />
              <Form onSubmit={handleOnSubmit}>
                {inputes.map((item, i) => (
                  <CustomInput key={i} {...item} onChange={handleOnChange} />
                ))}

                <div className="d-grid mt-5 mb-5">
                  <Button type="sumbit" variant="primary">
                    SignUp
                  </Button>
                </div>
              </Form>
              <p className="text-center">
                Already Have an Account <a href="/"> Login </a> Now
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* {footer} */}
      <Footer />
    </div>
  );
};

export default Signup;
