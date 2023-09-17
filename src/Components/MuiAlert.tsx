import { Stack, Alert, AlertTitle } from "@mui/material"

export const MuiAlert = () => {
    return (
        <Stack spacing={2}>
            <Alert severity="error"> this is error Alert</Alert>
            <Alert severity="info"> this is error info</Alert>
            <Alert severity="warning"> this is  warning Alert</Alert>
            <Alert severity="success"> this is  success Alert</Alert>


            <Alert variant="outlined" severity="error"> this is error Alert</Alert>
            <Alert variant="outlined" severity="info"> this is error info</Alert>
            <Alert variant="outlined" severity="warning"> this is  warning Alert</Alert>
            <Alert variant="outlined" severity="success"> this is  success Alert</Alert>


            <Alert variant="filled" severity="error" onClose={() => alert('close alert')}>
                <AlertTitle>Error</AlertTitle>   this is error Alert</Alert>
            <Alert variant="filled" severity="info">
                <AlertTitle>Info</AlertTitle>   this is error info</Alert>
            <Alert variant="filled" severity="warning">
                <AlertTitle>Warning</AlertTitle>   this is  warning Alert</Alert>
            <Alert variant="filled" severity="success">
                <AlertTitle>Success</AlertTitle>  this is  success Alert</Alert>


            <Alert variant="filled" severity="error" onClose={() => alert('close alert')}>
                this is error Alert</Alert>
            <Alert variant="filled" severity="info">
                this is error info</Alert>
            <Alert variant="filled" severity="warning">
                this is  warning Alert</Alert>
            <Alert variant="filled" severity="success">
                this is  success Alert</Alert>

        </Stack>
    )
}
