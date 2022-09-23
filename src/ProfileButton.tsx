import { FC, MouseEvent, useState } from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import {
  Avatar,
  IconButton,
  Tooltip,
  Menu,
  ListItemIcon,
  MenuItem,
  Divider,
  Typography, Box
} from '@mui/material';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';

export const ProfileButton: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Личный кабинет">
        <IconButton
          onClick={handleClick}
          sx={{ height: '46px', width: '46px' }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          {/*<Avatar sx={{ width: 32, height: 32 }}>M</Avatar>*/}
          <AccountCircleRoundedIcon sx={{ width: 46, height: 46, color: '#1976D2' }}/>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
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
            '&:before': {
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
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ m: '16px' }}>
          <Typography sx={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '0.15px' }}>
            Иван Иванов
          </Typography>
          <Typography sx={{ fontSize: '14px', lineHeight: '20px', letterSpacing: '0.17px' }}>
            ivan@company.com
          </Typography>
        </Box>
        <Divider sx={{ m: '8px 0' }} />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Настройки
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AccountCircleRoundedIcon fontSize="small" />
          </ListItemIcon>
          Профиль
        </MenuItem>
        <Divider />
        <MenuItem>
          <Typography sx={{ fontSize: '13px', lineHeight: '22px', letterSpacing: '0.46px', textTransform: 'uppercase' }}>
            Выйти
          </Typography>
        </MenuItem>
      </Menu>
    </>
  )
};
