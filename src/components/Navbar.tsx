import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Face6Icon from '@mui/icons-material/Face6';
import PersonIcon from '@mui/icons-material/Person';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Navbar() {
    const { user, userLogout } = useAuth()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate()


    // Right Menu
    const handleMenu2 = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose = (value: string) => {
        setAnchorEl(null);
        if (value) {
            if (value === "dashboard") {
                navigate("/")
            }
            if (value === "students") {
                navigate('/students')
            }
            if (value === "teachers") {
                navigate('/teachers')
            }
        }
    };

    const handleClose2 = (value: string) => {
        setAnchorEl2(null);
        console.log(value);
        if (value === "logout") {
            if (userLogout) {
                userLogout().then(() => {
                    navigate("/signin");
                });
            }
        }
    };


    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem key={'dashboard'} disablePadding onClick={() => handleClose("dashboard")}>
                    <ListItemButton>
                        <ListItemIcon className='text-black'>
                            <WidgetsIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Dashboard'} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'dashboard'} disablePadding onClick={() => handleClose("students")}>
                    <ListItemButton>
                        <ListItemIcon className='text-black'>
                            <Face6Icon />
                        </ListItemIcon>
                        <ListItemText primary={'Students'} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'dashboard'} disablePadding onClick={() => handleClose("teachers")}>
                    <ListItemButton>
                        <ListItemIcon className='text-black'>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Teachers'} />
                    </ListItemButton>
                </ListItem>

            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Button className='text-left' onClick={toggleDrawer(true)}>
                        <MenuIcon className='text-white' />
                    </Button>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        School
                    </Typography>
                    {user && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar2"
                                aria-haspopup="true"
                                onClick={handleMenu2}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar2"
                                anchorEl={anchorEl2}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl2)}
                                onClose={handleClose2}
                            >
                                <MenuItem onClick={() => handleClose2("logout")}>Logout</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}




