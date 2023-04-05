import "./App.css";
import Data from "./Components/Data.json";
import Head from "./Components/Head";
import Tablebody from "./Components/Tablebody";
import { useState } from "react";

function App() {
  const [Contact, setContact] = useState(Data);
  console.log(Contact);

  const [NewContact, setNewContact] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newInputs = { ...NewContact };
    newInputs[fieldName] = fieldValue;
    setNewContact(newInputs);
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    if (NewContact !== "" && NewContact.id !== "") {
  

      const ContactToAdd = {
        id: NewContact.id,
        name: NewContact.name,
        email: NewContact.email,
        phone: NewContact.phone,
      };
      const New = [...Contact, ContactToAdd];
      setContact(New);
      setNewContact({
        id: "",
        name: "",
        email: "",
        phone: "",
      });
    } else {
      return;
    }
  };

  return (
    <div className="container">
      <Head
        handleChange={handleChange}
        handleAddContact={handleAddContact}
        setNewContact={setNewContact}
        NewContact={NewContact}
      />

      <Tablebody Contact={Contact} />
    </div>
  );
}

export default App;
