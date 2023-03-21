import React from 'react';
import List from './List';
import { PersonProvider } from './PersonProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Form';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PersonProvider>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/create" element={<Form /> } />
          <Route path="/edit/:id" element={<Form />} />
        </Routes>
      </PersonProvider>
    </BrowserRouter>
  );
};

export default App;
