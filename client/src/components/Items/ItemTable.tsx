// src/components/Items/ItemTable.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableHead, TableRow, TableCell, TableBody, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface ItemTableProps {
  items: any[]; 
  onEdit: (itemId: string) => void;
  onDelete: (itemId: string) => void;
}

const ItemTable: React.FC<ItemTableProps> = ({ items, onEdit, onDelete }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>
              <Tooltip title="Edit">
                <Link to={`/Items/edit-item/${item.id}`} style={{ textDecoration: 'none' }}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton onClick={() => onDelete(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ItemTable;
