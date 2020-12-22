import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import AppStyled from "./styles";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { userSuccess } from "../store/actions";

export default function Registration({ history }) {
  useEffect(() => {
    console.log(isLogin);
  }, []);
  const { register, handleSubmit, errors } = useForm();

  const dispath = useDispatch();

  const userIsTrue = () => dispath(userSuccess());

  const { email, password, isLogin } = useSelector((state) => ({
    email: state.email,
    password: state.password,
    isLogin: state.isLogin,
  }));

  const onSubmit = (data) => {
    if (data.email === email && data.password === password) {
      userIsTrue();
      history.push("/");
    } else {
      alert("Вы ввели неверный логин");
    }
  };

  return (
    <AppStyled.Wrapper>
      <AppStyled.RegistrationWpapper>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="text"
            placeholder="Введите email"
            ref={register({ required: true, minLength: 5, maxLength: 100 })}
          />
          <Form.Text className="text-muted">
            {errors.email && <p>Email неверный</p>}
          </Form.Text>

          <Form.Label>Пароль</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Введите пароль"
            ref={register({ required: true, minLength: 5, maxLength: 20 })}
          />
          <Form.Text className="text-muted">
            {errors.password && <p>Пароль неверный</p>}
          </Form.Text>

          <Button variant="primary" type="submit">
            Войти
          </Button>
        </Form>
      </AppStyled.RegistrationWpapper>
    </AppStyled.Wrapper>
  );
}
