import React, { useState, useEffect } from "react";
import axios from "axios";

import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((res) => setPersons(res.data));
  },[]);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.map((person) => person.name).includes(newName))
      return alert(`${newName} is already added to phonebook`);
    const personObject = {
      name: newName,
      number: newNumber,
    };
    axios.post("http://localhost:3001/persons", personObject).then((res) => {
      setPersons(persons.concat(res.data));
      setNewName("");
      setNewNumber("");
    });
  };

  const personToShow = searchTerm
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} searchTerm={searchTerm}></Filter>
      <h3>Add a new</h3>
      <PersonForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
      ></PersonForm>
      <h2>Numbers</h2>
      <Persons personToShow={personToShow}></Persons>
    </div>
  );
}

export default App;
