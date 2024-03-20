import { useState } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import ContactUserList from "./assets/UserList.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(ContactUserList);

  const onAddContact = (formData) => {
    const finalContact = { ...formData, id: nanoid() };
    setContacts((prevState) => [...prevState, finalContact]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
