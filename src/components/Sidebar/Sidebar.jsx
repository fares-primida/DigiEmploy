import React from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Token } from "../../Theme";
import { useState } from "preact/hooks";
import MenulinedIcon from "@mui/icons-material/MenuOutlined";

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
    const theme = useTheme();
    const colors = Token(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("MainPage");

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
            <Menu iconShape="square">
            <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenulinedIcon /> : undefined}
                styled={{ margin: "10px 0 20px 0" }}
            >
                {!isCollapsed && (
                <Box
                    diplay="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography>User</Typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenulinedIcon />
                    </IconButton>
                </Box>
                )}
            </MenuItem>
            </Menu>
        </ProSidebar>
        </Box>
    );
    };

export default Sidebar;
