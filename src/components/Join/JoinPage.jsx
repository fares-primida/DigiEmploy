    import React from "react";
    import { Box, Typography, useTheme  , Button} from "@mui/material";
    import InputBase from "@mui/material/InputBase";
    import { Token } from "../../Theme.js";
    import {Container} from './JoinPageElements'

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
        <Button variant='contained' sx={{height: '40px' , borderRadius: '0 7px 7px 0'}} size='small'>Start</Button>
        </Box>
        </Box>
        {/* IMAGE */}
        <Box></Box>
        </Container>
    );
    };

    export default JoinPage;
