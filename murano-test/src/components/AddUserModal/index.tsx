import React, {ChangeEvent, useState} from "react";
import {
    Dialog,
    FormControl,
    Input,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    TextField,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    DialogContent,
    DialogTitle,
    DialogActions, FormGroup,
} from "@material-ui/core";
import {IAddUserModal, IUser} from "./interface";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {useHandler} from "use-handler";

const AddUserModal = (props: IAddUserModal) => {
    const [firstName, setFirstName] = useState<string>("")
    const [secondName, setSecondName] = useState<string>("")
    const [selectedDate, setSelectedDate] = useState<Date | null>();
    const [formatDate, setFormatDate] = useState()
    const [position, setPosition] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [experience, setExperience] = useState<string>()

    const user: IUser = {
        fullName: firstName + ' ' + secondName,
        date: selectedDate,
        profession: position,
        experience: experience,
        gender: gender
    }

    const handleFirstName = useHandler((event: ChangeEvent<{ value: string }>) => {
        setFirstName(event.target.value);
        console.log(firstName, 'firsName');
    })

    const handleSecondName = useHandler((event: ChangeEvent<{ value: string }>) => {
        setSecondName(event.target.value)
        console.log(secondName, 'secondName');
    })

    const handleChangeGender = useHandler((event: ChangeEvent<HTMLInputElement>) => {
        setGender((event.target as HTMLInputElement).value);
        console.log(gender, gender);
    });

    const handleChangePosition = useHandler((event: ChangeEvent<{ value: unknown }>) => {
        setPosition(event.target.value as string);
        console.log(position, 'position');
    });

    const handleChangeExperience = useHandler((event: ChangeEvent<{value: string}>) => {
        setExperience(event.target.value);
        console.log(experience, 'experiance')
    });

    const handleDateChange = useHandler((date: Date | null) => {
        setSelectedDate(date);
        console.log(date, 'date');
    });

    const handleOnAdd = () => {
        console.log(user)
        if (props?.onAdd) props.onAdd(user)
    }

    return (
        <Dialog
            fullWidth
            open={props.isOpen}
            onClose={props.onClose}
            style={{
                left: "27%",
                maxWidth: "700px",
                overflowY: "auto"
            }}
        >
            <DialogTitle>Add User</DialogTitle>
            <Typography variant="h6" style={{ color: "#757575" }}>
                Check all fields before click on Save button
            </Typography>
            <FormGroup>
            <DialogContent style={{ padding: "24px" }}>
                <FormControl fullWidth style={{ marginTop: "5px", marginBottom: '5px' }}>
                    <InputLabel htmlFor="input-first-name">First Name</InputLabel>
                    <Input
                        name="input-first-name"
                        aria-describedby="name-helper-text"
                        onChange={handleFirstName}
                    />
                </FormControl>
                <FormControl fullWidth style={{ marginTop: "5px", marginBottom: '5px' }}>
                    <InputLabel htmlFor="input-last-name">Last Name</InputLabel>
                    <Input
                        name="input-last-name"
                        aria-describedby="name-helper-text"
                        onChange={handleSecondName}
                    />
                </FormControl>
                <FormControl fullWidth style={{ marginTop: "5px", marginBottom: '5px' }}>
                    <InputLabel htmlFor="input-job">Job position</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={position}
                        onChange={handleChangePosition}
                    >
                        <MenuItem value={10}>Director</MenuItem>
                        <MenuItem value={20}>Accountant</MenuItem>
                        <MenuItem value={30}>Engineer</MenuItem>
                    </Select>
                </FormControl>
                <FormControl  fullWidth>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Birthday"
                        defaultValue=''
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    </MuiPickersUtilsProvider>
                </FormControl>
                <FormControl fullWidth style={{ marginTop: "5px", marginBottom: '15px' }}>
                    <TextField
                        id="work-exp"
                        label="Work Experience (years)"
                        type="number"
                        value={experience}
                        onChange={handleChangeExperience}
                    />
                </FormControl>
                <FormControl fullWidth component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={gender}
                        onChange={handleChangeGender}
                        style={{ flexDirection: "row" }}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </DialogContent>
            <DialogActions style={{
                marginTop: "16px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "flex-end"
            }}
            >
                <Button
                    variant="contained"
                    style={{ backgroundColor: "#f50057", color: "#fff", margin: "5px" }}
                    onClick={props.onCancel}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    style={{ backgroundColor: "#3f51b5", color: "#fff", margin: "5px" }}
                    onClick={handleOnAdd}
                >
                    Add
                </Button>
            </DialogActions>
        </FormGroup>
        </Dialog>
    )
}

export default AddUserModal;