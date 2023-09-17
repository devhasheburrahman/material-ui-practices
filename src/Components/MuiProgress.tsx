import { Stack, CircularProgress, LinearProgress } from "@mui/material"

export const MuiProgress = () => {
    return (
        <Stack spacing={2}>

            <CircularProgress />
            <CircularProgress color="success" />
            <CircularProgress value={60} variant="determinate" />

            <LinearProgress value={60} variant="determinate" />
            <LinearProgress />
            <LinearProgress color="success" />

        </Stack>
    )
}
