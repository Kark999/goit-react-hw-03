import css from "./ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = { name: "", number: "" };

const feedbackSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  number: Yup.string()
    .required("Number is required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    console.log("values: ", values);

    actions.resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={feedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={css.field} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" as="span" />
        <label className={css.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={css.field}
          type="text"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage className={css.error} name="number" as="span" />
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
