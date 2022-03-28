import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from '../Main';

export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Main />} />
    </Routes>
  </BrowserRouter>
);
