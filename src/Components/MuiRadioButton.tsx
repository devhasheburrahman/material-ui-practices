import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material'
import { useState } from "react"
export const MuiRadioButton = () => {
    const [value, setValue] = useState('');
    console.log(value);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
       
    };

    return (
        <Box>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="custom" control={<Radio />} label="custom" />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}
