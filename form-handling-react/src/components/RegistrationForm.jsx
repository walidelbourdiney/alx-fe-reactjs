import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) console.log("setErrors");
    if (!email) console.log("Error");
    if (!password) console.log("Error");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        name="username"
        onChange={handleChange}
        value={username}
      />
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        value={email}
      />
      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        value={password}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
