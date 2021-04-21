import React, { useState, useEffect } from "react";

import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import personService from "./services/persons";
import { Notification } from "./components/Notification";
import { ErrorNotification } from "./components/ErrorNotification";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((res) => setPersons(res.data));
  }, []);

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
    const newPerson = persons.find((person) => person.name === newName);
    const changePerson = { ...newPerson, number: newNumber };
    if (persons.map((person) => person.name).includes(newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        return personService
          .update(changePerson.id, changePerson)
          .then((res) => {
            setPersons(
              persons.map((person) =>
                person.name !== newName ? person : res.data
              )
            );
            setMessage(`Updated ${newName} number `);
            setTimeout(() => {
              setMessage(null);
            }, 3000);
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            setErrorMessage(`${newName} has already been removed from server`);
            setTimeout(() => {
              setErrorMessage(null);
            }, 3000);
          });
      } else {
        return setNewNumber("");
      }
    }
    const personObject = {
      name: newName,
      number: newNumber,
    };
    personService.create(personObject).then((res) => {
      setPersons(persons.concat(res.data));
      setMessage(`Added ${newName} `);
      setTimeout(() => {
        setMessage(null);
      }, 3000);
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
      <Notification message={message}></Notification>
      <ErrorNotification errorMessage={errorMessage}></ErrorNotification>
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
