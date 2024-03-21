import { useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import ContactUserList from "./assets/UserList.json";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState(ContactUserList);

  const onAddContact = (values) => {
    const finalContact = { ...values, id: nanoid() };
    setContacts((prevState) => [...prevState, finalContact]);
  };

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox />
      <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
    </div>
  );
}

export default App;
