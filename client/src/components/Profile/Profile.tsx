import React from 'react';
import { useTranslations } from '../../Hooks/translationHooks';


const Profile: React.FC = () => {
  const translations = useTranslations();

  console.log('Translations:', translations);
  return (
    <div>
      <p>{translations.hello}</p>
      Profile
    </div>
  );
}

export default Profile;
