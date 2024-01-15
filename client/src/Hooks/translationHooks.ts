// src/Hooks/translationHooks.ts

import { useEffect, useState } from 'react';
import translationService from '../services/translationService';

export const useTranslations = () => {
  const [translations, setTranslations] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchTranslations = async () => {
      const loadedTranslations = await translationService.loadTranslations('/src/assets/translations.json');
      setTranslations(loadedTranslations);
    };

    fetchTranslations();
  }, []);

  return translations;
};
