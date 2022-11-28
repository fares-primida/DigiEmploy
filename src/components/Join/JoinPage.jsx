    import React from "react";
    import { Box, Typography, useTheme, Button } from "@mui/material";
    import InputBase from "@mui/material/InputBase";
    import { Token } from "../../Theme.js";
    import { Container } from "./JoinPageElements";
    import Person from "../../assets/images/pngwing.com.png";

    const JoinPage = () => {
    const theme = useTheme();
    const colors = Token(theme.palette.mode);
    return (
    <Container>
        {/* SIGN IN FORM */}
        <Box
        display="flex"
        flexDirection="column"
        position="absolute"
        left="2%"
        top="55%"
        transform="translate(-50% , -50%)"
        >
        <Typography variant="span" color={colors.greenAccent[400]}>
            Welcome In DigiEmploy....
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center">
            <InputBase
            sx={{
                mt: 1,
                p: "3px",
                borderRadius: "7px 0 0 7px",
                border: `.5px solid ${colors.greenAccent[500]}`,
                fontSize: "15px",
                width: "450px",
                flex: "2",
            }}
            placeholder="...@gmail.com"
            />
            <Button
            sx={{
                flex: ".5",
                borderRadius: "0 7px 7px 0",
                mb: "-8px",
                height: "38px",
                boxShadow: "none",
                backgroundColor: `${colors.greenAccent[500]}`,
            }}
            variant="contained"
            >
            Start Now
            </Button>
        </Box>
        </Box>
        {/* IMAGE */}
        <Box
        position="absolute"
        right="2%"
        top="5%"
        transform="translate(-50% , -50%)"
        >
        <img height="90%" src={Person} alt="joinlogo" />
        </Box>
    </Container>
    );
    };

    export default JoinPage;
