import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HomeStyles from "./styles";
import { Button } from "react-bootstrap";
import { userLogOut } from "../store/actions";
export default function Home({ history }) {
  const dispath = useDispatch();

  const userIsFalse = () => dispath(userLogOut());
  const logOut = () => {
    userIsFalse();
    history.push("/login");
  };
  const { isLogin } = useSelector((state) => ({
    isLogin: state.isLogin,
  }));

  if (isLogin === false) {
    return <div> {history.push("/login")}</div>;
  } else {
    return (
      <div>
        <HomeStyles.WrapperBtn>
          <Button onClick={() => logOut()} variant="danger">
            Log out
          </Button>
        </HomeStyles.WrapperBtn>
        <HomeStyles.Wrapper>
          <h1>HOME</h1>
        </HomeStyles.Wrapper>
      </div>
    );
  }
}
