import css from "./Contact.module.css";

const Contacts = ({ id, name, number, onDeleteContact }) => {
  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <p className={css.contactText}>{name}</p>
        <p className={css.contactText}>{number}</p>
      </div>
      <button className={css.deleteBtn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contacts;
