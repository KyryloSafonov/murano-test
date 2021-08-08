import React, {useState} from "react";
import {
    Box, Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Paper,
    Typography
} from "@material-ui/core";
import {useHandler} from "use-handler";
import {userInfo} from "./mock";

const GeneralInfoCard = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [primaryPhone, setPrimaryPhone] = useState<string>("")
    const [secondaryPhone, setSecondaryPhone] = useState<string>("")
    const [businessDesc, setBusinessDesc] = useState<string>("")

    const fillHandler = useHandler(() => {
        setName(userInfo.name)
        setEmail(userInfo.email)
        setPrimaryPhone(userInfo.primaryPhone)
        setSecondaryPhone(userInfo.secondaryPhone)
        setBusinessDesc(userInfo.businessDescription)
    })

    return(
        <Paper variant="elevation" elevation={1}>
            <Button
                variant="contained"
                onClick={fillHandler}
                style={{
                width: "56px",
                height: "56px",
                zIndex: 1400,
                borderRadius: "50%",
                backgroundColor: "#f44336",
                color: "#fff",
                position: "absolute",
                top: "16px",
                right: "16px",
            }}>
                Fill
            </Button>
            <Box style={{ padding: '24px' }}>
                <Typography variant="h5">
                    General info
                </Typography>
                <FormControl fullWidth style={{ margin: "5px" }}>
                    <InputLabel htmlFor="input-name">Name</InputLabel>
                    <Input
                        name="input-name"
                        aria-describedby="name-helper-text"
                        value={name}
                    />
                    <FormHelperText style={{ display: "none" }} id="name-helper-text">
                        Fillig not valid
                    </FormHelperText>
                </FormControl>
                <FormControl fullWidth style={{ margin: "5px" }}>
                    <InputLabel htmlFor="input-name">Email</InputLabel>
                    <Input
                        type="email"
                        name="input-email"
                        aria-describedby="email-helper-text"
                        value={email}
                    />
                    <FormHelperText style={{ display: "none" }} id="email-helper-text">
                        Fillig not valid
                    </FormHelperText>
                </FormControl>
                <FormControl fullWidth style={{ margin: "5px" }}>
                    <InputLabel htmlFor="input-primary-phone">Primary phone</InputLabel>
                    <Input
                        name="input-primary-phone"
                        aria-describedby="primary-phone-helper-text"
                        value={primaryPhone}
                    />
                    <FormHelperText style={{ display: "none" }} id="primary-phone-helper-text">
                        Fillig not valid
                    </FormHelperText>
                </FormControl>
                <FormControl fullWidth style={{ margin: "5px" }}>
                    <InputLabel htmlFor="input-secondary-phone">Secondary phone</InputLabel>
                    <Input
                        name="input-secondary-phone"
                        aria-describedby="secondary-phone-helper-text"
                        value={secondaryPhone}
                    />
                    <FormHelperText style={{ display: "none" }} id="secondary-phone-helper-text">
                        Fillig not valid
                    </FormHelperText>
                </FormControl>
                <FormControl fullWidth style={{ margin: "5px" }}>
                    <InputLabel htmlFor="input-business">Business Description</InputLabel>
                    <Input
                        name="input-business"
                        value={businessDesc}
                    />
                </FormControl>
            </Box>
        </Paper>
    )
}

export default GeneralInfoCard;