import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Day,From,To) {
    return { Day, From, To};
}

const rows = [
    createData('Monday'),
    createData('Tuesday'),
    createData('Wednesday'),
    createData('Thursday'),
    createData('Friday'),
    createData('Saturday'),
    createData('Sunday')
];

export default function AcccessibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Day</TableCell>
                        <TableCell align="right">From</TableCell>
                        <TableCell align="right">To</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.Day}>
                            <TableCell component="th" scope="row">
                                {row.Day}
                            </TableCell>
                            <TableCell align="right">{row.From}</TableCell>
                            <TableCell align="right">{row.To}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}