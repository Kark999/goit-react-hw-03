import css from "./Contact.module.css";

const Contacts = ({ name, number }) => {
  return (
    <div className={css.contactCard}>
      <p className={css.contactName}>{name}</p>
      <p className={css.contactNumber}>{number}</p>
      <button className={css.deleteBtn}>Delete</button>
    </div>
  );
};

export default Contacts;
