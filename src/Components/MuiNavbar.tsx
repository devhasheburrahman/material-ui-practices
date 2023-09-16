import { AppBar, IconButton, Stack, Toolbar, Typography, Button } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'

export const MuiNavbar = () => {
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
          <Button color='inherit'> Logout</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
