import React from 'react'
import {Box , Typography , useTheme} from '@mui/material'
import InputBase from '@mui/material/InputBase'
import {Token} from '../../Theme.js'

const JoinPage = () => {
    const theme = useTheme()
    const colors = Token(theme.palette.mode)
    return (
        <Box display='flex' alignItmes='center' justifyContent='space-around' flexWrap='wrap'>
            {/* SIGN IN FORM */}
            <Box display='flex' flexDirection='column'>
                <Typography variant='h4' color={colors.greenAccent[400]}>Welcome In DigiEmploy....</Typography>
                <InputBase sx={{mt: 1 , p: 1}} placeholder='email...'/>
            </Box>
            {/* IMAGE */}
            <Box></Box>
        </Box>
    )
}

export default JoinPage
