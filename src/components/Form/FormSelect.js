import React, { useState } from "react";
import { Field, useFormikContext } from "formik";
import ErrorMessage from "./styled/ErrorMessage";
import { Box } from "../styled";
import SelectField from "./styled/SelectField";

const FormSelect = ({ name, options = [], placeholder = "" }) => {
  const { errors, touched } = useFormikContext();

  const [selected, setSelected] = useState(false);

  const handleSelected = () => {
    setSelected(true);
  };

  return (
    <Box marginBottom="md">
      <Field name={name}>
        {({ field, meta }) => (
          <SelectField
            data-cy={`${name}!Select`}
            fontSize="lg"
            fluid
            selected={selected}
            error={meta.error && meta.touched}
            {...field}
            onChange={e => {
              handleSelected();
              field.onChange(e);
            }}
          >
            <option value="">{placeholder}</option>
            {options.map(o => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </SelectField>
        )}
      </Field>
      {errors[name] && touched[name] && (
        <ErrorMessage data-cy={`${name}ErrorMessage`}>
          {errors[name]}
        </ErrorMessage>
      )}
    </Box>
  );
};

export default FormSelect;
