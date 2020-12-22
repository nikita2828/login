import React, { useEffect } from "react";

export default function NotFound({ history }) {
  useEffect(() => {
    setTimeout(() => {
      history.push("/login");
    }, 4000);
  }, []);
  return (
    <div>
      <h1>PAGE NOT FOUND 404</h1>
    </div>
  );
}
