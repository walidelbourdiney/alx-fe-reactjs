import React, { useState } from "react";

const RegistrationForm = () => {
  const [login, setLogin] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({ ...prevLogin, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!login.username) {
      console.log("Error");
    }
    if (!login.email) {
      console.log("Error");
    }
    if (!login.password) {
      console.log("Error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        name="username"
        onChange={handleChange}
        value={login.username}
      />
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        value={login.email}
      />
      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        value={login.password}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
