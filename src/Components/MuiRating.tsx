import { Stack, Rating } from '@mui/material'
import React, { useState } from 'react'

export const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null)
    // readonly 
    // const [value, setValue] = useState<number | null>(4.5)
    console.log(value);

    const handleChange = (_event: React.ChangeEvent<{}>,
        newValue: number | null) => {
        setValue(newValue)

    }
    return (
        <Stack spacing={2}>
            <Rating 
             value={value}
              onChange={handleChange}
            //   readOnly
            // highlightSelectedOnly
            precision={0.5}
              />

        </Stack>
    )
}
