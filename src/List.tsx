import React from 'react';
import ListItem from './ListItem';
import { usePerson } from './usePerson';
import { useNavigate } from 'react-router-dom';



const List: React.FC = () => {
  const navigate = useNavigate();

  const {persons, handleDelete} = usePerson();

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>birth date</th>
            <th>street</th>
            <th>city</th>
            <th>zip code</th>
          </tr>
        </thead>
        <tbody>
          {persons?.map((person) => (
            <ListItem
              key={person.id}
              person={person}
              onDelete={handleDelete}
              onEdit={() => navigate('/edit/' + person.id)}
            />
          ))}
        </tbody>
      </table>
      <button
        onClick={() => navigate('/create')}
        style={{
          position: 'sticky',
          bottom: 20,
          left: '90%',
        }}
      >
        new
      </button>
    </>
  );
};

export default List;
