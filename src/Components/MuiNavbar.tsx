import { AppBar, IconButton, Stack, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import { useState } from 'react';
 

export const MuiNavbar = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <CatchingPokemonIcon />
        </IconButton>

        <Typography variant='h6' sx={{ flexGrow: 1 }} component='div'> Hashebur </Typography>

        <Stack direction='row' spacing={2}>
          <Button color='inherit'> Feature</Button>
          <Button color='inherit'> Anout</Button>
          <Button color='inherit'> Pricing</Button>
          <Button id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick} color='inherit'> Logout</Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
