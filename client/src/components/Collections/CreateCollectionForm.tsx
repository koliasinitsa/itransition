// src/components/collections/CreateCollectionForm.tsx
import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Checkbox, FormGroup, Grid, Paper } from '@mui/material';
import { CollectionFormData } from '../../interfaces/CollectionFormData';

const initialFormData: CollectionFormData = {
  name: '',
  image_url: '',
  user_id: 0,
  category_id: 0,
  custom_string1_state: false,
  custom_string2_state: false,
  custom_string3_state: false,
  custom_int1_state: false,
  custom_int2_state: false,
  custom_int3_state: false,
  custom_text1_state: false,
  custom_text2_state: false,
  custom_text3_state: false,
  custom_boolean1_state: false,
  custom_boolean2_state: false,
  custom_boolean3_state: false,
  custom_date1_state: false,
  custom_date2_state: false,
  custom_date3_state: false,
};

const CreateCollectionForm: React.FC = () => {
  const [formData, setFormData] = useState<CollectionFormData>(initialFormData);

  const handleInputChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [name]: event.target.value });
  };

  const handleCheckboxChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [name]: event.target.checked });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              fullWidth
              required
              value={formData.name}
              onChange={handleInputChange('name')}
            />
            <TextField
              label="Description"
              fullWidth
              value={formData.description || ''}
              onChange={handleInputChange('description')}
            />
            <TextField
              label="Image URL"
              fullWidth
              required
              value={formData.image_url}
              onChange={handleInputChange('image_url')}
            />
            
            <TextField
              label="Category ID"
              fullWidth
              required
              type="number"
              value={formData.category_id}
              onChange={handleInputChange('category_id')}
            />
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.custom_string1_state}
                    onChange={handleCheckboxChange('custom_string1_state')}
                  />
                }
                label="Custom String 1"
              />
              {formData.custom_string1_state && (
                <TextField
                  label="Custom String 1 Name"
                  fullWidth
                  value={formData.custom_string1_name || ''}
                  onChange={handleInputChange('custom_string1_name')}
                />
              )}

              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.custom_string2_state}
                    onChange={handleCheckboxChange('custom_string2_state')}
                  />
                }
                label="Custom String 2"
              />
              {formData.custom_string2_state && (
                <TextField
                  label="Custom String 2 Name"
                  fullWidth
                  value={formData.custom_string2_name || ''}
                  onChange={handleInputChange('custom_string2_name')}
                />
              )}

              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.custom_string3_state}
                    onChange={handleCheckboxChange('custom_string3_state')}
                  />
                }
                label="Custom String 3"
              />
              {formData.custom_string3_state && (
                <TextField
                  label="Custom String 3 Name"
                  fullWidth
                  value={formData.custom_string3_name || ''}
                  onChange={handleInputChange('custom_string3_name')}
                />
              )}

            </FormGroup>
            <Button type="submit" variant="contained" color="primary">
              Create Collection
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CreateCollectionForm;
