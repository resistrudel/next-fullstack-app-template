import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import * as React from 'react';
import theme from '../../../src/theme';
import styles from './Header.module.css';
const pages = ['about', 'treatments', 'contact'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        // background: '#f5f3f0',
        background: theme.palette.reverse.main,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="a"
            href="/"
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
              mr: 1,
            }}
          >
            <Image
              src="/39a1a8a8-2e26-4625-bfda-6bd39a104daf.JPG"
              alt="ara med spa logo"
              width={60}
              height={37}
              priority
              className={styles.logo}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={`/${page}`} textAlign="center">
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <SpaIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
            LOGO
          </Typography> */}
          <Box
            component="a"
            href="/"
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
              },
              mr: 1,
            }}
          >
            <Image
              src="/39a1a8a8-2e26-4625-bfda-6bd39a104daf.JPG"
              alt="ara med spa logo"
              width={60}
              height={37}
              priority
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page) => (
              <Link href={`/${page}`}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Button variant="contained" sx={{ flexGrow: 0 }}>
            Book Consultation
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
