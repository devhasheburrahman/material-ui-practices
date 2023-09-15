import { InputAdornment, Stack, TextField } from "@mui/material"

export const MuiTextField = () => {
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='name' variant="outlined" />
                <TextField label='name' variant="standard" />
                <TextField label='name' variant="filled" />
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='Small Secondary' size="small" color="secondary" />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='File Input ' required />
                <TextField label='password' type="password" helperText='do not share your password anyone' />
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='Amount' InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Weight' InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment> }} />
            </Stack>
        </Stack>

    )
}
