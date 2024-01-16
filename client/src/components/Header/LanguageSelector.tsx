// src/components/LanguageSelector.tsx
import React, { useState } from 'react';
import { changeLanguage } from '../../services/i18n';
import { Menu, MenuItem } from '@mui/material';

const LanguageSelector: React.FC = () => {
    const [anchorElLang, setAnchorElLang] = useState<null | HTMLElement>(null);
    const languageMenuOpen = Boolean(anchorElLang);
  
    const handleClickLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElLang(event.currentTarget);
    };
  
    const handleCloseLanguageMenu = () => {
      setAnchorElLang(null);
    };
  
    const handleLanguageChange = (language: string) => {
      changeLanguage(language);
      handleCloseLanguageMenu();
    };
  
    return (
      <div>
        {/* Кнопка или другой элемент для открытия меню */}
        <button onClick={handleClickLanguageMenu}>Open Language Menu</button>
  
        {/* Меню */}
        <Menu
          id="language-menu"
          anchorEl={anchorElLang}
          open={languageMenuOpen}
          onClose={handleCloseLanguageMenu}
        >
          <MenuItem onClick={() => handleLanguageChange('en')}>Eng</MenuItem>
          <MenuItem onClick={() => handleLanguageChange('ru')}>Rus</MenuItem>
        </Menu>
      </div>
    );
  };
  
  export default LanguageSelector;
