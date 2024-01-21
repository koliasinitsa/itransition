// src/components/Collections/EditCollectionForm.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

interface EditCollectionFormParams {
  id: string;
}

const EditCollectionForm: React.FC = () => {
  const { id } = useParams<EditCollectionFormParams>();

  // В реальной реализации здесь будет логика загрузки данных о коллекции по id

  // Пример: const collectionData = loadCollectionDataById(id);

  // Далее вы можете использовать collectionData для предзаполнения формы редактирования

  return (
    <div>
      <h2>Edit Collection Form</h2>
      <p>Editing Collection ID: {id}</p>
      {/* Форма редактирования */}
    </div>
  );
};

export default EditCollectionForm;
