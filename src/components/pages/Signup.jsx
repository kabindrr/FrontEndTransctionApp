import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Footer } from "../Footer";
import { TopNav } from "../TopNav";
import { CustomInput } from "../CustomInput";
import { useState } from "react";
import { postNewUser } from "../../helpers/axiosHelper";

const initialState = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [form, setForm] = useState(initialState);
  const [resp, setResp] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== rest.password) {
      return alert("passport do not match, password must Match");
    }

    //call axios to send data to api
    const data = await postNewUser(rest);
    setResp(data);

    console.log(data);

    data.status === "success" && setForm;
  };

  const inputes = [
    {
      label: "First Name",
      name: "name",
      type: "text",
      placeholder: "First Name",
      required: true,
      value: form.name,
    },

    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter Your Email",
      required: true,
      value: form.email,
    },

    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "Enter Your Number",
      required: true,
      value: form.phone,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      required: true,
      value: form.password,
    },

    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "Password",
      placeholder: "Confirm Password",
      required: true,
      value: form.confirmPassword,
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
              {resp?.message && (
                <Alert
                  variant={resp?.status === "success" ? "success" : "danger"}
                >
                  {resp.message}
                </Alert>
              )}

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
