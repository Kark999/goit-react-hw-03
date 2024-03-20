import css from "./Contact.module.css";

const Contacts = ({ name, number }) => {
  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <p className={css.contactText}>{name}</p>
        <p className={css.contactText}>{number}</p>
      </div>
      <button className={css.deleteBtn}>Delete</button>
    </div>
  );
};

export default Contacts;
