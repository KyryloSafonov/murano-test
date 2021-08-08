import React, {useState} from "react";
import {
    Box, Button,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import {IWorkersCard} from "./interface";

const WorkersCard = (props: IWorkersCard) => {
    console.log(props.users)

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
                        <TableBody>
                            {props.users.map((user) => (
                                <TableRow key={user.fullName}>
                                    <TableCell component="th" scope="row">
                                        {user.fullName}
                                    </TableCell>
                                    <TableCell align="right">{user.date}</TableCell>
                                    <TableCell align="right">{user.profession}</TableCell>
                                    <TableCell align="right">{user.experience}</TableCell>
                                    <TableCell align="right">{user.gender}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
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