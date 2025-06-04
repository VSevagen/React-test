import React from "react";
import { Formik } from "formik";
import { Flex } from "../styled";
import FormField from "./FormField";
import FormButtons from "./FormButtons";
import formValidationSchema from "./formValidationSchema";

/**
 * Make the form reusable,
 * Instead of having the form component into Create / Edit, we detach the form component
 * and create a new one
 *
 * @param {Function} submit
 * @param {Object} initialValues
 * @returns
 */
const UserForm = ({ submit, initialValues = {} }) => {
  return (
    <Formik
      validationSchema={formValidationSchema}
      onSubmit={submit}
      initialValues={{
        firstName: initialValues.firstName ?? "",
        surname: initialValues.surname ?? "",
        email: initialValues.email ?? "",
        birthDate: initialValues.birthDate ?? "",
      }}
    >
      <Flex alignItems="center" justifyContent="center" height="100%">
        <Flex alignItems="left" direction="column" width="300px">
          <FormField name="firstName" placeholder="First name" />
          <FormField name="surname" placeholder="Surname" />
          <FormField name="email" placeholder="Email" />
          <FormField name="birthDate" placeholder="Birth date (YYYY-MM-DD)" />
          <FormButtons />
        </Flex>
      </Flex>
    </Formik>
  );
};

export default UserForm;
