import React from "react";
import {CircularProgress, Dialog, DialogTitle} from "@material-ui/core";
import {ILoader} from "./interface";

const Loader = (props: ILoader) => {
    return (
        <Dialog
            fullWidth
            open={props.isOpen}
            style={{
                left: "27%",
                maxWidth: "700px",
                overflowY: "auto"
            }}>
            <DialogTitle>Add User</DialogTitle>
            <CircularProgress style={{
                margin: "15px",
                alignSelf: "center",
            }} />
        </Dialog>
    )
}

export default Loader