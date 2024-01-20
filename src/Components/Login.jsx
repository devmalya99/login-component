import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      {/* //2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true. */}



{!props.isRegistered && <input type="password" placeholder="Confirm Password" />}
      <button type="submit">
        {props.isRegistered ? "Login" : "Register"}
        </button>
    </form>
  );
}

export default Form;
