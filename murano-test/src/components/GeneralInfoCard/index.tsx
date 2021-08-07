import React from "react";
import {
    Box,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Paper,
    Typography
} from "@material-ui/core";

const GeneralInfoCard = () => {
    return(
        <Paper variant="elevation" elevation={1}>
            <Box style={{ padding: '24px' }}>
                <Typography variant="h5">
                    General info
                </Typography>
                <FormControl fullWidth style={{ margin: "5px" }}>
                    <InputLabel htmlFor="input-name">Name</InputLabel>
                    <Input name="input-name" aria-describedby="name-helper-text" />
                    <FormHelperText style={{ display: "none" }} id="name-helper-text">
                        Fillig not valid
                    </FormHelperText>
                </FormControl>
                <FormControl fullWidth style={{ margin: "5px" }}>
                    <InputLabel htmlFor="input-name">Email</InputLabel>
                    <Input name="input-email" aria-describedby="email-helper-text" />
                    <FormHelperText style={{ display: "none" }} id="email-helper-text">
                        Fillig not valid
                    </FormHelperText>
                </FormControl>
                <FormControl fullWidth style={{ margin: "5px" }}>
                    <InputLabel htmlFor="input-primary-phone">Primary phone</InputLabel>
                    <Input name="input-primary-phone" aria-describedby="primary-phone-helper-text" />
                    <FormHelperText style={{ display: "none" }} id="primary-phone-helper-text">
                        Fillig not valid
                    </FormHelperText>
                </FormControl>
                <FormControl fullWidth style={{ margin: "5px" }}>
                    <InputLabel htmlFor="input-secondary-phone">Secondary phone</InputLabel>
                    <Input name="input-secondary-phone" aria-describedby="secondary-phone-helper-text" />
                    <FormHelperText style={{ display: "none" }} id="secondary-phone-helper-text">
                        Fillig not valid
                    </FormHelperText>
                </FormControl>
                <FormControl fullWidth style={{ margin: "5px" }}>
                    <InputLabel htmlFor="input-business">Business Description</InputLabel>
                    <Input name="input-business" />
                </FormControl>
            </Box>
        </Paper>
    )
}

export default GeneralInfoCard;