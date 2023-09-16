import { Box, Card, CardContent, Typography, Button, CardActions, CardMedia, CardHeader, Avatar, IconButton } from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const MuiCard = () => {
    return (
        <Box width='300px'>
            <Card>
                <CardMedia component='img'
                    height='140px'
                    image='https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg'
                    alt='unsplash image'
                >
                </CardMedia>               
             
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        React
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        fljhzf  h aldkfh;su fos fsjfjks fsdkfjnoisa;fyu sadjfiasdjfo;ias fosa fojas i ama a adfsdc psdf 'asrfas f'
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='large'> Share</Button>
                    <Button variant='contained' size="small"> learn More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}
