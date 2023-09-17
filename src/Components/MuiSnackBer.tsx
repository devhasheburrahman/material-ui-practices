import { Snackbar, Button } from "@mui/material"
import { useState } from "react"

export const MuiSnackBer = () => {
    const [open, setOpen] = useState(false)

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)

    }
    return (
        <>
            <Button variant="contained" onClick={() => setOpen(true)}>Submit</Button>
            <Snackbar
                color="primary"
                message=" From Submitted successfully"
                autoHideDuration={4000}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: "center"
                }}

            />
        </>
    )
}
