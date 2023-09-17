import {
    Table,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    TableRow,
    Paper

} from "@mui/material"



export const MuiTable = () => {
    return (
        <>
            <TableContainer component={Paper} >
                <Table aria-label="simple table"></Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Id</TableCell>
                        <TableCell>Fast Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell align="center">Email</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map((row) => (
                            <TableRow key={row.id}
                                sx={{ '&:last-child td, &: last child th': { border: "0" } }}
                            >
                                <TableCell align="center"> {row.id}</TableCell>
                                <TableCell> {row.first_name}</TableCell>
                                <TableCell> {row.last_name}</TableCell>
                                <TableCell align="center"> {row.email}</TableCell>
                            </TableRow>
                        ))

                    }

                </TableBody>
            </TableContainer>
            <br />
            <TableContainer component={Paper} sx={{ maxHeight: "300px" }} >
                <Table aria-label="simple table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell>Fast Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell align="center">Email</TableCell>

                        </TableRow>
                    </TableHead>
                </Table>
                <TableBody>
                    {
                        tableData.map((row) => (
                            <TableRow key={row.id}
                                sx={{ '&:last-child td, &: last child th': { border: "0" } }}
                            >
                                <TableCell align="center"> {row.id}</TableCell>
                                <TableCell> {row.first_name}</TableCell>
                                <TableCell> {row.last_name}</TableCell>
                                <TableCell align="center"> {row.email}</TableCell>
                            </TableRow>
                        ))

                    }

                </TableBody>
            </TableContainer>

        </>
    )
}


const tableData =
    [{
        "id": 1,
        "first_name": "Timi",
        "last_name": "MacGillavery",
        "email": "tmacgillavery0@bluehost.com",
        "gender": "Female",
        "ip_address": "206.54.10.193"
    }, {
        "id": 2,
        "first_name": "Chico",
        "last_name": "Outlaw",
        "email": "coutlaw1@ucla.edu",
        "gender": "Male",
        "ip_address": "31.234.131.226"
    }, {
        "id": 3,
        "first_name": "Judon",
        "last_name": "Dighton",
        "email": "jdighton2@histats.com",
        "gender": "Male",
        "ip_address": "48.42.197.240"
    }, {
        "id": 4,
        "first_name": "Eileen",
        "last_name": "Grand",
        "email": "egrand3@kickstarter.com",
        "gender": "Female",
        "ip_address": "197.196.222.49"
    }, {
        "id": 5,
        "first_name": "Meg",
        "last_name": "Shinefield",
        "email": "mshinefield4@discuz.net",
        "gender": "Bigender",
        "ip_address": "248.155.172.78"
    }, {
        "id": 6,
        "first_name": "Garwood",
        "last_name": "Yurukhin",
        "email": "gyurukhin5@mail.ru",
        "gender": "Polygender",
        "ip_address": "133.108.166.208"
    }, {
        "id": 7,
        "first_name": "Thaine",
        "last_name": "Locke",
        "email": "tlocke6@jalbum.net",
        "gender": "Male",
        "ip_address": "149.180.25.86"
    }, {
        "id": 8,
        "first_name": "Erick",
        "last_name": "Purdom",
        "email": "epurdom7@google.co.jp",
        "gender": "Male",
        "ip_address": "82.116.130.55"
    }, {
        "id": 9,
        "first_name": "Bob",
        "last_name": "Nys",
        "email": "bnys8@cmu.edu",
        "gender": "Male",
        "ip_address": "24.200.131.208"
    }, {
        "id": 10,
        "first_name": "Codee",
        "last_name": "Tetsall",
        "email": "ctetsall9@berkeley.edu",
        "gender": "Female",
        "ip_address": "59.201.246.191"
    }]
