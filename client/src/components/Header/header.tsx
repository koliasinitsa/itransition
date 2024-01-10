import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LanguageIcon from '@mui/icons-material/Language';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

import SearchPanel from './Search-panel/search-panel';

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate();



    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLoginClick = () => {
        navigate('/AuthForm');  // Перенаправление на компонент AuthForm
    };


    return (
        <AppBar position="fixed">
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                    <Link to="/" style={{ marginRight: '100px' }}>
                        <HomeIcon />
                    </Link>
                    {/* Поисковая строка (слева) с ограниченной шириной */}
                    <div style={{ maxWidth: '300px' }}>
                        <SearchPanel />
                    </div>
                </div>


                {/* Иконка смены цвета и языковой выбор */}
                <div>
                    <IconButton
                        color="inherit"
                        aria-label="dark mode"
                    >
                        <DarkModeIcon />
                    </IconButton>

                    <IconButton
                        color="inherit"
                        aria-label="language"
                        aria-controls="language-menu"
                        aria-haspopup="true"
                        onClick={handleMenu}
                    >
                        <LanguageIcon />
                    </IconButton>

                    <Menu
                        id="language-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Eng</MenuItem>
                        <MenuItem onClick={handleClose}>Rus</MenuItem>
                    </Menu>



                    <Button color="inherit" style={{ marginLeft: '10px' }} onClick={handleLoginClick}>
                        Login
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
