// src/components/Items/CreateItemForm.tsx
import React from 'react';

interface CreateItemFormProps {
  onSubmit: (formData: any) => void;
}

const CreateItemForm: React.FC<CreateItemFormProps> = ({ onSubmit }) => {
  // Реализуйте форму создания айтема
  return <div>Create Item Form</div>;
};

export default CreateItemForm;
