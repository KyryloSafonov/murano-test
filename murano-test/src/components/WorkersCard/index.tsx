import React, {useState} from "react";
import {
    Box, Button,
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import {IWorkersCard} from "./interface";

const WorkersCard = (props: IWorkersCard) => {

    return(
        <Paper variant="elevation" elevation={1} style={{ marginTop: '15px' }}>
            <Box style={{ padding: '24px' }}>
                <Typography variant="h5">
                    Workers
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Full Name</TableCell>
                                <TableCell>Date of Birth</TableCell>
                                <TableCell>Profession</TableCell>
                                <TableCell>Experience</TableCell>
                                <TableCell>Gender</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                <Box style={{ marginTop: "16px", display: "flex", justifyContent: "flex-end" }}>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#3f51b5", color: "#fff" }}
                        onClick={props.onPressButton}
                    >
                        Add
                    </Button>
                </Box>
            </Box>
        </Paper>
    )
}

export default WorkersCard;