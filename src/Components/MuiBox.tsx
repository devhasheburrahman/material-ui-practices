import { Box, Stack, Divider, Grid ,Paper } from "@mui/material"

export const MuiBox = () => {
    return (
        <Paper sx={{padding:'32px' }}  elevation={4}>
            <Stack sx={{
                border: '1px solid'
            }} direction='row'
                spacing={5}
                divider={<Divider orientation="vertical" flexItem />}

            >
                <Box sx={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'primary.dark',
                    color: 'white',
                    padding: '16px',
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
                    color='purple'


                >
                    Hashebur
                </Box>
            </Stack>
            <Grid container >
                <Grid xs={12} sm={6} item><Box bgcolor='primary.light' p={2} > item1</Box></Grid>
                <Grid xs={12} sm={6} item><Box bgcolor='primary.light' p={2}> item2</Box></Grid>
                <Grid xs={12} sm={6} item><Box bgcolor='primary.light' p={2}> item3</Box></Grid>
                <Grid xs={12} sm={6} item><Box bgcolor='primary.light' p={2}> item4</Box></Grid>
            </Grid>
            <Grid container marginTop={1} rowSpacing={2} columnSpacing={1} >
                <Grid xs={6} item><Box bgcolor='primary.light' p={2} > item1</Box></Grid>
                <Grid xs={6} item><Box bgcolor='primary.light' p={2}> item2</Box></Grid>
                <Grid xs={6} item><Box bgcolor='primary.light' p={2}> item3</Box></Grid>
                <Grid xs={6} item><Box bgcolor='primary.light' p={2}> item4</Box></Grid>
            </Grid>
        </Paper>

    )
}
