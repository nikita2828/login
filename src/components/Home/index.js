import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HomeStyled from "./styled";
import { Button } from "react-bootstrap";
import { userLogout } from "../Store/loginReduser/actions";

export default function Home({ history }) {
  const { isLogin } = useSelector((state) => ({
    isLogin: state.loginReduser.isLogin,
  }));

  const dispath = useDispatch();
  const userLogoutDispatch = () => dispath(userLogout());

  useEffect(() => {
    if (!isLogin) {
      history.push("/login");
    }
  }, []);

  const logOut = () => {
    userLogoutDispatch();
    history.push("/login");
  };

  return (
    <div>
      <HomeStyled.WrapperBtn>
        <Button onClick={logOut} variant="danger">
          Log out
        </Button>
      </HomeStyled.WrapperBtn>
      <HomeStyled.Wrapper>
        <h1>HOME</h1>
      </HomeStyled.Wrapper>
    </div>
  );
}
