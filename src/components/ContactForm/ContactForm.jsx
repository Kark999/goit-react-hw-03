import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  const initialValues = { id: "", name: "", number: "" };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{ initialValues }}
      onSubmit={() => {
        handleSubmit;
      }}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={css.field} type="text" name="name" />
        <label className={css.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field className={css.field} type="number" name="number" />
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
