import { Box, MenuItem, TextField } from "@mui/material"
import { useState } from "react"

export const MuiSelect = () => {

    // const [country, setCountry] = useState('')
    const [counties, setCountries] = useState<String[]>([]);
    console.log(counties);

    // single select 
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setCountry(event.target.value as string)
    // }

    // multiSelect 

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }

    return (
        // single select
        <Box width={'250px'}>

            <TextField fullWidth label='select Country'
                value={counties}
                // value={country}
                onChange={handleChange}
                SelectProps={{
                    multiple: true
                }}
                select>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='BN'>Bangladesh</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
            </TextField>
        </Box>
    )
}
