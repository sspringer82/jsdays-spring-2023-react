import Person, { InputPerson } from "./Person";

const url = `${process.env.REACT_APP_BACKEND_URL}/users`;

export async function getPersons(): Promise<Person[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Response not OK');
  }
  const data = await response.json();
  return data;
}

export async function removePerson(id: number) {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Response not OK');
  }
}

export async function createPerson(person: InputPerson) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(person)
  });
  if (!response.ok) {
    throw new Error('Response not OK');
  }
}