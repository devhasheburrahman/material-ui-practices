import { Stack, Chip, Avatar } from "@mui/material"
import FaceIcon from "@mui/icons-material/Face"
import { useState } from 'react'

export const MuiChip = () => {
    const [chaps, setChaps] = useState(['chap1', 'chap2', 'chap3'])

    return (
        <Stack direction='row' spacing={5} >

            <Chip label="Chip" color="primary" variant="outlined" size="small" avatar={<Avatar> H</Avatar>} />

            <Chip label="Chip Outlined" icon={<FaceIcon />} color="primary" variant="outlined" size="small" />

            <Chip label="Chip" icon={<FaceIcon />} color="primary" size="small" />

            <Chip label="Click" color="success" onClick={() => alert('clicked')} />

           
        </Stack>
    )
}
