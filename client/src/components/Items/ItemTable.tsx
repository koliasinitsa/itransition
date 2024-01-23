// src/components/Items/ItemTable.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableHead, TableRow, TableCell, TableBody, IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface ItemTableProps {
  items: any[];
  onDelete: (itemId: string) => void;
}

const ItemTable: React.FC<ItemTableProps> = ({ items, onDelete }) => {
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
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>
              {/* Link to view the item */}
              <Tooltip title="View">
                <Link to={`/Items/${item.id}`} style={{ textDecoration: 'none' }}>
                  <IconButton>
                    <VisibilityIcon />
                  </IconButton>
                </Link>
              </Tooltip>

              {/* Link to edit the item */}
              <Tooltip title="Edit">
                <Link to={`/Items/edit-item/${item.id}`} style={{ textDecoration: 'none' }}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Link>
              </Tooltip>

              {/* Delete button */}
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
