import { Stack, Skeleton, Box, Avatar, Typography } from "@mui/material"
import { useEffect, useState } from "react"


export const MuiSelection = () => {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 3000)
  }, [])
  return (
    <Box sx={{ width: '250px' }}>
      {
        loading ? (
          <Skeleton
            variant="rectangular"
            width={256}
            height={144}
            animation='wave'
          />
        ) : (
          <img src="https://i.ibb.co/C9C40vZ/person-front-computer-working-html.jpg" alt="Skeleton"
            width={256}
            height={144}

          />
        )}
      <Stack direction='row' spacing={1} sx={{ width: "100%", marginTop: '12px' }} >
        <Avatar> H</Avatar>
        <Stack sx={{ width: '80%' }}>
          {
            loading ? (
              <>
                <Typography variant="body1">
                  <Skeleton variant="text" width="100%" animation='wave'/>
                </Typography>
                <Typography variant="body2">
                  <Skeleton variant="text" width="100%" animation='wave'/>
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="body1">React mui </Typography>
              </>
            )
          }
        </Stack>

      </Stack>


    </Box>
  )
}
