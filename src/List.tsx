import React from 'react';
import ListItem from './ListItem';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getPersons, removePerson } from './person.api';

const List: React.FC = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const {
    data: persons,
    isLoading,
    isError,
  } = useQuery(['persons'], getPersons);

  const mutation = useMutation(removePerson, {
    onSuccess() {
      queryClient.invalidateQueries(['persons']);
    },
  });

  function handleDelete(id: number) {
    mutation.mutate(id);
  }

  if (isLoading) {
    return <div>...loading data</div>;
  }

  if (isError) {
    return <div>whoops! an error happened</div>
  }

  let content = <div>Keine Daten vorhanden</div>;

  if (persons && persons.length > 0) {
      content = <table>
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
    </table>;
  }
  
  return (
    <>
      {content}
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
