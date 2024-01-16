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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import SearchPanel from './Search-panel/SearchPanel';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
    const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(null);
    const [languageMenuOpen, setLanguageMenuOpen] = React.useState(false);

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [userMenuOpen, setUserMenuOpen] = React.useState(false);


    const navigate = useNavigate();



    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElLang(event.currentTarget);
        setLanguageMenuOpen(true);
    };

    const handleCloseLanguageMenu = () => {
        setAnchorElLang(null);
        setLanguageMenuOpen(false);
    };

    const handleUserMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
        setUserMenuOpen(true);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        setUserMenuOpen(false);
    };

    const isAuthenticated = true // есть пользователь или нет, заглушка
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

                    <LanguageSelector />
                    {/* <Menu
                        id="language-menu"
                        anchorEl={anchorElLang}
                        open={languageMenuOpen}
                        onClose={handleCloseLanguageMenu}
                    >
                        <MenuItem onClick={handleCloseLanguageMenu}>Eng</MenuItem>
                        <MenuItem onClick={handleCloseLanguageMenu}>Rus</MenuItem>
                    </Menu> */}



                    {/* Проверка авторизации */}
                    {isAuthenticated ? (
                        <IconButton
                            color="inherit"
                            aria-label="account of current user"
                            aria-controls="user-menu"
                            aria-haspopup="true"
                            onClick={handleUserMenuClick}
                        >
                            <AccountCircleIcon />
                        </IconButton>
                    ) : (
                        <Button color="inherit" style={{ marginLeft: '10px' }} onClick={handleLoginClick}>
                            Login
                        </Button>
                    )}

                    <Menu
                        id="user-menu"
                        anchorEl={anchorElUser}
                        open={userMenuOpen}
                        onClose={handleCloseUserMenu}
                    >
                        <Link to="/Profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                        </Link>
                        <Link to="/Users" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <MenuItem >Users</MenuItem>
                        </Link>
                        <MenuItem onClick={handleLoginClick}>Logout</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
