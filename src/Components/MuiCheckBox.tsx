import { Box, FormControlLabel, Checkbox } from '@mui/material'
import { useState } from "react"

export const MuiCheckBox = () => {
    const [acceptTnc, setAcceptTnc] = useState(false)
    console.log(acceptTnc);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnc(event.target.checked)
    }
    return (
        <Box>
            <Box>
                <FormControlLabel
                    label='I accept terms and conditions' control={<Checkbox checked={acceptTnc} onChange={handleChange} />} />


            </Box>
        </Box>
    )
}
