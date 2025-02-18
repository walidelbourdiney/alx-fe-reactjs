import { useContext } from "react";
import { data } from "../App";

function WelcomeMessage() {
  const dataa = useContext(data);
  return (
    <div>
      <h1>Hello everyone, I am learning React at ALX!</h1>
      <p>This is a simple JSX component.</p>
      <p>I am learning about JSX!</p>
      <p>the count is {dataa} </p>
    </div>
  );
}

export default WelcomeMessage;
