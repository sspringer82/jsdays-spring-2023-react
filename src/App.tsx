import React from 'react';
import List from './List';
import { PersonProvider } from './PersonProvider';
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';

const App: React.FC = () => {
  const navigate = useNavigate();
  // navigate('/new');
  // navigate('/edit/42')
  const { id } = useParams<{ id: string }>();
  return (
    <BrowserRouter>
      <PersonProvider>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/edit/:id" element={<List />} />
        </Routes>
      </PersonProvider>
    </BrowserRouter>
  );
};

export default App;
