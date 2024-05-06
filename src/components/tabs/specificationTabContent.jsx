import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";

export const SpecificationTabContent = () => {

    return (
        <Box>
            <Typography gutterBottom variant="h4" sx={{ textTransform: 'uppercase' }}>Product info</Typography>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">Dimensions</TableCell>
                            <TableCell align="center">10cm x 15cm x 5cm</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Weight</TableCell>
                            <TableCell align="center">500g</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Material</TableCell>
                            <TableCell align="center">Plastic</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Color</TableCell>
                            <TableCell align="center">Dark Blue</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};  