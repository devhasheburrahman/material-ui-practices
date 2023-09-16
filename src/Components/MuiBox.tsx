import { Box } from "@mui/material"

export const MuiBox = () => {
    return (
        <>
            <Box sx={{
                width: 100,
                height: 100,
                backgroundColor: 'primary.dark',
                color: 'white',
                padding: '16px',
                borderRadius: '20px',
                "&:hover": {
                    backgroundColor: 'primary.dark',

                }
            }} >
                CodeElevation

            </Box>

            <Box
                display='flex'
                height='100px'
                width='100px'
                bgcolor='success.light'
                p={2}


            >

            </Box>
        </>
    )
}
