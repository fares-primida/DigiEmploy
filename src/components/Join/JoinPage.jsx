    import React from "react";
    import { Box, Typography, useTheme } from "@mui/material";
    import InputBase from "@mui/material/InputBase";
    import { Token } from "../../Theme.js";
    import {Container} from './JoinPageElements'
    import Person from '../../assets/images/pngwing.com.png'

    const JoinPage = () => {
    const theme = useTheme();
    const colors = Token(theme.palette.mode);
    return (
        <Container>
        {/* SIGN IN FORM */}
        <Box
        display="flex"
        flexDirection="column"
        position='absolute'
        left='2%'
        top='55%'
        transform='translate(-50% , -50%)'
        >
        <Typography variant="span" color={colors.greenAccent[400]}>
            Welcome In DigiEmploy....
        </Typography>
        <Box display='flex' alignItems='center' justifyContent='center' >
            <InputBase
            sx={{
            mt: 1,
            p: "3px",
            borderRadius: "7px 0 0 7px",
            border: `.5px solid ${colors.grey[800]}`,
            fontSize: "15px",
            width: '450px'
            }}
            placeholder="email..."
        />
        </Box>
        </Box>
        {/* IMAGE */}
        <Box position='absolute' right='2%' top='5%' transform='translate(-50% , -50%)'>
            <img height='90%' src={Person} alt='joinlogo'/>
        </Box>
        </Container>
    );
    };

    export default JoinPage;
