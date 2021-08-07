import React from "react";
import {
    Box,
    Dialog,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Typography
} from "@material-ui/core";
import {IAddUserModal} from "./interface";

const AddUserModal = (props: IAddUserModal) => {
    return (
        <Dialog
            fullWidth
            open={props.isOpen}
            onClose={props.onClose}
            style={{
                left: "27%",
                maxWidth: "600px"
            }}
        >
            <Box style={{ padding: "24px" }}>
                <Typography variant="h5">
                    Add User
                </Typography>
                <Typography variant="h6" style={{ color: "#757575" }}>
                    Check all fields before click on Save button
                </Typography>
                <FormControl fullWidth style={{ marginTop: "5px", marginBottom: '5px' }}>
                    <InputLabel htmlFor="input-first-name">First Name</InputLabel>
                    <Input name="input-first-name" aria-describedby="name-helper-text" />
                </FormControl>
                <FormControl fullWidth style={{ marginTop: "5px", marginBottom: '5px' }}>
                    <InputLabel htmlFor="input-last-name">Last Name</InputLabel>
                    <Input name="input-last-name" aria-describedby="name-helper-text" />
                </FormControl>
            </Box>
        </Dialog>
    )
}

export default AddUserModal;