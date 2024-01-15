// App.tsx
import React, {useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/Routes/Routes';
import translationService from '../src/services/translationService';

const App: React.FC = () => {

  useEffect(() => {
    translationService.loadTranslations('/src/assets/translations.json');
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
