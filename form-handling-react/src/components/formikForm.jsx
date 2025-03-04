import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

const formikForm = () => {
  const validationScheme = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const initialVaues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialVaues}
      validationSchema={validationScheme}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>
        </div>

        <div>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>
        </div>

        <div>
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default formikForm;
