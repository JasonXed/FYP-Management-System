import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper, Container, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

// import { createLecturerRepo, updateLecturerRepo } from "../../../../actions/Admin/LecturerRepo";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    fileInput: {
        width: "97%",
        margin: "10px 0",
    },
}));
const LecturerRepoForm = ({ currentId, setCurrentId, setNotify, setOpenPopup }) => {
    const [adminLRData, setadminLRData] = useState({ department: "", lectName: "", email: "", role: ""});
    const adminLR = useSelector((state) => (currentId ? state.lecturerRepo.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem("profile"));

    useEffect(() => {
        if (adminLR) setadminLRData(adminLR);
    }, [adminLR]);

    const clearForm = () => {
        setCurrentId(0);
        setadminLRData({ department: "", lectName: "", email: "", role: "" });
    };

    useEffect(() => {
        if (currentId == null) {
            clearForm();
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentId]);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log(e);
    //     if (currentId === 0) {
    //         dispatch(createLecturerRepo({ ...adminLRData }));
    //     } else {
    //         dispatch(updateLecturerRepo(currentId, { ...adminLRData }));
    //     }
    //     setOpenPopup(false);
    //     setNotify({ isOpen: true, message: "Successfully Submitted!", type: "success" });
    //     clearForm();
    // };

    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to add a lecturer.
                </Typography>
            </Paper>
        );
    }

    return (
        <Container>
            {/* <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? `Editing "${adminLR.lectName}"` : ""}</Typography>
                <TextField name="lectName" variant="outlined" required autoFocus label="Lecturer Name" fullWidth value={adminLRData.lectName} onChange={(e) => setadminLRData({ ...adminLRData, lectName: e.target.value })} />
                <TextField name="department" variant="outlined" required label="Department" fullWidth value={adminLRData.department} onChange={(e) => setadminLRData({ ...adminLRData, department: e.target.value })} />
                <TextField name="email" variant="outlined" required label="Email" fullWidth value={adminLRData.email} onChange={(e) => setadminLRData({ ...adminLRData, email: e.target.value })} />
                <TextField name="role" variant="outlined" required label="Role" fullWidth value={adminLRData.role} onChange={(e) => setadminLRData({ ...adminLRData, role: e.target.value })} />
                
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Assign responsibility</FormLabel>
                    <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                        label="Gilad Gray"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                        label="Jason Killian"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                        label="Antoine Llorca"
                    />
                    </FormGroup>
                    <FormHelperText>Be careful</FormHelperText>
                </FormControl>
                
                <div style={{ display: "flex" }}>
                    <Button type="submit" className={classes.buttonSubmit} variant="contained" color="primary" size="large" fullWidth>
                        Submit
                    </Button>
                    <Button variant="contained" color="secondary" size="large" onClick={clearForm} fullWidth>
                        Clear
                    </Button>
                </div>
            </form> */}
        </Container>
        );
};

export default LecturerRepoForm;