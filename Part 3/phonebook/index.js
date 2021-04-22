const { request, response } = require("express");
const express = require("express");
const app = express();

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

app.use(express.json());

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  const entries = persons.length;
  const date = new Date();
  response.send(
    `<div><p>Phonebook has infor for ${entries} people<p> <p>${date}</p></div>`
  );
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const person = persons.find((person) => person.id == id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => persons.id !== id);

  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const maxId =
    persons.length > 0 ? Math.max(...persons.map((person) => person.id)) : 0;
  const newPerson = request.body;
  if (!newPerson.name || !newPerson.number) {
    return response.status(400).json({ error: "content missing" });
  }

  const isExist = persons
    .map((person) => person.name)
    .includes(`${newPerson.name}`);
  if (isExist) {
    return response.status(400).json({ error: "name must be unique" });
  }
  newPerson.id = maxId + 1;

  persons = persons.concat(newPerson);
  response.json(newPerson);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));