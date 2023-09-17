import { Avatar, Stack, AvatarGroup } from "@mui/material"

export const MuiAvatar = () => {
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={1}>
                <Avatar  >NH</Avatar>
                <Avatar >RH</Avatar>
            </Stack>

            <Stack direction='row' spacing={1}>
                <AvatarGroup max={3}>
                    <Avatar sx={{ bgcolor: "primary.light" }}>NH</Avatar>
                    <Avatar sx={{ bgcolor: "success.light" }}>RH</Avatar>

                    <Avatar src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a7dd61538a3f435cac08a76853790ebb-1693932090097/2f51f3aa-88a3-48fd-8381-a4cee2e03160.png" alt="Hashebur Rahman"> </Avatar>
                    <Avatar src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a7dd61538a3f435cac08a76853790ebb-1693932090097/2f51f3aa-88a3-48fd-8381-a4cee2e03160.png" alt="Hashebur Rahman"> </Avatar>

                </AvatarGroup>

            </Stack>

            <Stack>
                <Avatar src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a7dd61538a3f435cac08a76853790ebb-1693932090097/2f51f3aa-88a3-48fd-8381-a4cee2e03160.png" alt="Hashebur Rahman"> </Avatar>
                <Avatar src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a7dd61538a3f435cac08a76853790ebb-1693932090097/2f51f3aa-88a3-48fd-8381-a4cee2e03160.png" alt="Hashebur Rahman"> </Avatar>
            </Stack>
            <Stack direction='row' spacing={2}>
                <Avatar variant="square" sx={{ width: 48, heigh: 48, bgcolor: "primary.light" }}>NH</Avatar>
                <Avatar variant="rounded" sx={{ bgcolor: "success.light" }}>RH</Avatar>
            </Stack>
        </Stack>
    )
}
