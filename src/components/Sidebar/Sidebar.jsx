import React , {useState} from 'react'
import { ProSidebar , Menu , MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { Box , IconButton , Typography , useTheme} from '@mui/material'
import { Link } from 'react-router-dom'
import { Token } from '../../Theme'
import MenulinedIcon from "@mui/icons-material/MenuOutlined";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import  CalendarTodayOutlinedIcon  from '@mui/icons-material/CalendarTodayOutlined'

    const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = Token(theme.palette.mode);
    return (
        <MenuItem
        active={selected === title}
        icon={icon}
        style={{ color: colors.grey[400] }}
        onClick={() => setSelected(title)}
        >
        <Typography>{title}</Typography>
        <Link to={to} />
        </MenuItem>
    );
    };

    const Sidebar = () => {
        const theme = useTheme()
        const colors = Token(theme.palette.mode)
        const [isCollapsed , setIsCollapsed] = useState(true)
        const [selected , setSelected] = useState("DashBoard")

    return (
        <Box
        sx={{
            "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
            },
            "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
            color: "#868dfd !important",
            },
            "& .pro-menu-item.active": {
            color: "#6870fa !important",
            },
        }}
        >
        <ProSidebar collapsed={isCollapsed}>
            <Menu iconShape='square'>
            {/* LOGO AND MENU ITEMS */}
            <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenulinedIcon /> : undefined}
                    style={{
                        margin: '10px 0 20px 0',
                        color: colors.grey[100]
                    }}
                    >
                        {!isCollapsed && (
                            <Box
                            display = 'flex'
                            justifyContent = 'space-between'
                            alignItems = 'center'
                            ml = '15px'
                            >
                                <Typography variant='h3' color={colors.grey[100]}>
                                    INFO
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenulinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        <Item 
                        icon={<Person2OutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        title='Profile'
                        to='/Profile'
                        />
                        <Item 
                        icon={<CalendarTodayOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        title='Calendar'
                        to='/Calendar'
                        />
                        <Item 
                        icon={<DonutSmallOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        title='Pie Chart'
                        to='/Pie'
                        />
                        <Item 
                        icon={<SettingsOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        title='Settings'
                        to='/Settings'
                        />
                    </Box>
            </Menu>
        </ProSidebar>
        </Box>
    );
    };

export default Sidebar;
