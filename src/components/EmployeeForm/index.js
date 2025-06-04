import { Formik } from "formik";
import React from "react";
import { employeeStatus } from "../../constants";
import FormButtons from "../Form/FormButtons";
import FormField from "../Form/FormField";
import FormSelect from "../Form/FormSelect";
import { Flex } from "../styled";
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
const EmployeeForm = ({ submit, initialValues = {} }) => {
  return (
    <Formik
      validationSchema={formValidationSchema}
      onSubmit={submit}
      enableReinitialize
      initialValues={{
        firstName: initialValues.firstName ?? "",
        surname: initialValues.surname ?? "",
        email: initialValues.email ?? "",
        birthDate: initialValues.birthDate ?? "",
        status: initialValues.status ?? "",
        jobTitle: initialValues.jobTitle ?? "",
      }}
    >
      <Flex alignItems="center" justifyContent="center" height="100%">
        <Flex alignItems="left" direction="column" width="300px">
          <FormField name="jobTitle" placeholder="Job title" />
          <FormField name="firstName" placeholder="First name" />
          <FormField name="surname" placeholder="Surname" />
          <FormField name="email" placeholder="Email" />
          <FormField name="birthDate" placeholder="Birth date (YYYY-MM-DD)" />
          <FormSelect
            name="status"
            placeholder="Status"
            options={employeeStatus.map(o => ({ value: o, label: o }))}
          />
          <FormButtons />
        </Flex>
      </Flex>
    </Formik>
  );
};

export default EmployeeForm;
