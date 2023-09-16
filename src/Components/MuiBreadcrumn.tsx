import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import NavigationNextIcon from "@mui/icons-material/NavigateNext"

export const MuiBreadcrumn = () => {
    return (
        <Box m={2}>
            <Breadcrumbs
                separator={<NavigationNextIcon fontSize='small' />}
                aria-label="breadcrumbs"
                maxItems={2}
            >
                <Link underline="hover" href='#'>home </Link>
                <Link underline="hover" href='#'>Category </Link>
                <Link underline="hover" href='#'>link  </Link>
                <Typography color='text.primary'>Shoes</Typography>

            </Breadcrumbs>
        </Box>
    )
}
