import React from "react";
import { Button, Form } from "react-bootstrap";
import AppStyled from "./styled";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../Store/loginReduser/actions";
import { ToastsContainer, ToastsStore } from "react-toasts";

export default function Login({ history }) {
  const { email, password } = useSelector((state) => ({
    email: state.loginReduser.email,
    password: state.loginReduser.password,
  }));

  const dispath = useDispatch();
  const userLoginDispatch = () => dispath(userLogin());

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    if (data.email === email && data.password === password) {
      userLoginDispatch();
      history.push("/");
    } else {
      ToastsStore.error("Hey, you entered wrong email or password");
    }
  };

  return (
    <AppStyled.Wrapper>
      <AppStyled.RegistrationWpapper>
        <h1>Login Form</h1>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <AppStyled.WrapperPadding>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="text"
              placeholder="Enter your email"
              ref={register({ required: true, minLength: 5, maxLength: 100 })}
            />
            <Form.Text className="text-muted">
              {errors.email && (
                <AppStyled.ErrorLogin>Email is incorrect</AppStyled.ErrorLogin>
              )}
            </Form.Text>
          </AppStyled.WrapperPadding>

          <AppStyled.WrapperPadding>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter your password"
              ref={register({ required: true, minLength: 5, maxLength: 20 })}
            />
            <Form.Text className="text-muted">
              {errors.password && (
                <AppStyled.ErrorLogin>
                  Password is incorrect
                </AppStyled.ErrorLogin>
              )}
            </Form.Text>
          </AppStyled.WrapperPadding>
          <AppStyled.WrapperPadding>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </AppStyled.WrapperPadding>
        </Form>
      </AppStyled.RegistrationWpapper>
      <ToastsContainer store={ToastsStore} />
    </AppStyled.Wrapper>
  );
}
