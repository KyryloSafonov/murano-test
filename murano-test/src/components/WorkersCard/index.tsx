import React, {useEffect} from "react";
import {
    Box,
    Button,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {IWorkersCard} from "./interface";
import {useHandler} from "use-handler";

const WorkersCard = (props: IWorkersCard) => {
    const { users, setUsers } = props

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
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{ backgroundColor: "pink" }}>
                            {users.map((user, index) => (
                                <TableRow key={user.fullName}>
                                    <TableCell component="th" scope="row">
                                        {user.fullName}
                                    </TableCell>
                                    <TableCell align="left">{user.date}</TableCell>
                                    <TableCell align="left">{user.profession}</TableCell>
                                    <TableCell align="left">{user.experience}</TableCell>
                                    <TableCell align="left">{user.gender}</TableCell>
                                    <TableCell align="right">
                                        <IconButton
                                            onClick={
                                                () => setUsers(users.filter((user, id) => id !== index))}
                                            aria-label="delete"
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
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