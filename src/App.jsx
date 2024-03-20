import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import ContactUserList from "./assets/UserList.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    // const [filter, setFilter] = useState("");
    // const onChangeFilter = (e) => {
    //   setFilter(e.target.value);
    // };
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={ContactUserList} />
    </div>
  );
}

export default App;
