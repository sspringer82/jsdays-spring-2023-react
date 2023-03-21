import { useEffect } from "react";
import { InputPerson } from "./Person";
import { usePersonContext } from "./PersonProvider";

const url = `${process.env.REACT_APP_BACKEND_URL}/users`;

export function usePerson() {
  const [persons, setPersons] = usePersonContext();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPersons(data));
  }, [setPersons]);

  function handleDelete(id: number): void {
    fetch(`${url}/${id}`, { method: 'DELETE' }).then((response) => {
      setPersons((prevPersons) =>
        prevPersons?.filter((person) => person.id !== id)
      );
    });
  }

  function handleSave(person: InputPerson) {
    const method = person.id ? 'PUT' : 'POST';
    let saveUrl = person.id ? `${url}/${person.id}` : url;
    fetch(saveUrl, {
      method,
      body: JSON.stringify(person),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        setPersons((prevPersons) => {
          if (person.id) {
            return prevPersons.map((prevPerson) => {
              if (prevPerson.id === person.id) {
                return person;
              }
              return prevPerson;
            });
          }
          return [...prevPersons, data];
        });
        //clearAndHideForm();
      });
  }

  return {
    persons,
    handleSave,
    handleDelete,
  }
}