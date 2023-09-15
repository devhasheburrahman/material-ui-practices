import { Stack, Button, IconButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={4} direction='row'>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack >

            {/* colors  */}
            <Stack spacing={2} direction="row">
                <Button variant="contained" color="success">Success</Button>
                <Button variant="outlined" color="success">success</Button>

                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="outlined" color="primary">Primary</Button>

                <Button variant="contained" color="info">info</Button>
                <Button variant="outlined" color="info">info</Button>

                <Button variant="contained" color="warning">Warning </Button>
                <Button variant="outlined" color="warning">Warning </Button>

                <Button variant="contained" color="error"> error</Button>
                <Button variant="outlined" color="error">error</Button>

                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="outlined" color="secondary">Secondary</Button>

            </Stack>

            <Stack display='block' spacing={2} direction="row" >
                {/* size */}
                <Button variant="contained" size="small">small</Button>
                <Button variant="contained" size="medium">medium</Button>
                <Button variant="contained" size="large" >Large</Button>

            </Stack>

            <Stack spacing={2} direction="row">
                {/* Icon  */}
                <Button variant="contained" startIcon={<SendIcon />}>Send</Button>
                <Button variant="contained" endIcon={<SendIcon />}>Send</Button>

                {/* disabale reple */}
                <Button variant="contained" disableRipple endIcon={<SendIcon />}>Send</Button>

                <Button variant="contained" disableElevation endIcon={<SendIcon />}>Send</Button>
                <IconButton aria-label="send" color="success" size="small"> <SendIcon /> </IconButton>

            </Stack>
        </Stack>
    )
}
