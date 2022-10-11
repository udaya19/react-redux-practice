import React from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const addBtn = () => {
    dispatch({
      type: "increment",
    });
  };
  const subBtn = () => {
    dispatch({
      type: "decrement",
    });
  };
  const incrementByValue = () => {
    //dispatching the action
    dispatch({
      type: "incrementByValue",
      payload: 20,
    });
  };
  return (
    <div>
      <button onClick={addBtn}>Increment</button>
      <button onClick={subBtn}>Decrement</button>
      <button onClick={incrementByValue}>Increment by value</button>
    </div>
  );
};

export default Home;
