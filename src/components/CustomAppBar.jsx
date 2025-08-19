import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { t } from 'i18next';
import { Navigate, useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';




function CustomAppBar() {
  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/biography", label: t("nav.bio") },
    { to: "/films", label: t("nav.films") },
    { to: "/photos", label: t("nav.photos") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const onClickPageButton = (to) => {
    navigate(to)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* EKRAN BÜYÜKKEN BURA RENDER EDİLİYOR */}
          <Typography
            variant="h6"
            noWrap
            component="span"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ALİ ALKIM DUMAN
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {nav.map((page, index) => (
              <Button
                key={index}
                onClick={() => onClickPageButton(page.to)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          <Divider orientation='vertical' variant='middle' flexItem={true} sx={{ mx: 2, display: { xs: 'none', md: 'flex' } }} />
          <Box sx={{ display: "flex", alignItems: "center", ml: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* <TranslateIcon sx={{ mr: 1 }} /> */}
            <LanguageSwitcher />
          </Box>

          {/* EKRAN KÜÇÜKKEN RENDER EDİLİYOR */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {nav.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }} onClick={() => onClickPageButton(page.to)}>{page.label}</Typography>
                </MenuItem>
              ))}
              <Divider />
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <LanguageSwitcher />
              </Box>
            </Menu>
          </Box>


          <Typography
            variant="h5"
            noWrap
            component="span"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ALİ ALKIM DUMAN
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default CustomAppBar;