import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material"
import CopyIcon from "@mui/icons-material/FileCopyOutlined"
import PrintIcon from "@mui/icons-material/Print"
import ShareIcon from "@mui/icons-material/Share"
import EditIcon from "@mui/icons-material/Edit"



export const MuiSpreedDail = () => {
    return (
        <SpeedDial
            ariaLabel="Navigation speed dial"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        >
            <SpeedDialAction icon={<CopyIcon />} tooltipTitle='Copy' />
            <SpeedDialAction icon={<PrintIcon />} tooltipTitle='Print' />
            <SpeedDialAction icon={<ShareIcon />} tooltipTitle='Share' />
        </SpeedDial>
    )
}
