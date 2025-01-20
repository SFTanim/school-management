import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
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
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { Avatar, Tooltip } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

export default function Navbar() {
    const { user, userLogout } = useAuth()
    const navigate = useNavigate()


    // Right Menu


    const handleClose = (value: string) => {
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
            if (value === "logout") {
                if (userLogout) {
                    userLogout().then(() => {
                        navigate("/signin");
                    });
                }
            }
        }
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleCloseAccSettings = () => {
        setAnchorEl(null);

    };
    const openAccSettings = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
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
                <Toolbar className='navbar-bg-color'>
                    {/* Dashboard Menu */}
                    <Button className='text-left' onClick={toggleDrawer(true)}>
                        <MenuIcon className='text-white' />
                    </Button>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>

                    {/* School Name */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        School
                    </Typography>

                    {/* Account Settings */}
                    {user && (
                        <div>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography> */}
                                {/* <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={openAccSettings ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={openAccSettings}
                                onClose={handleCloseAccSettings}
                                onClick={handleCloseAccSettings}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&::before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={() => handleClose("")}>
                                    <Avatar /> Profile
                                </MenuItem>
                                <MenuItem onClick={() => handleClose("")}>
                                    <Avatar /> My account
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={() => handleClose("")}>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    Add another account
                                </MenuItem>
                                <MenuItem onClick={() => handleClose("")}>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem onClick={() => handleClose("logout")}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}




