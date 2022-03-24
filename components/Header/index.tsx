import { Paper, Button, IconButton, Avatar } from '@material-ui/core';
import React from 'react';
import {
  SearchOutlined as SearchIcon, 
  CreateOutlined as PenIcon, 
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  NotificationsOutlined as NotificationIcon,
} from '@mui/icons-material/';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <Paper classes={{root: styles.root}} elevation={0}>
      <div className="d-flex align-center">
      <IconButton>
          <MenuIcon/>
        </IconButton>
        <svg className={styles.logo} viewBox="0 0 24 25">
          <path fill = "#e8a427" d="M0 19h8.5v6H0v-6z"></path>
          <path d="M0 7h8.5v18l6.5-6V7h9V0H0V7z"></path>
          <path fill = "rgba(0,0,0,0.15)" d="M7.5 19h1v6l-1-6z"></path>
        </svg>
        
        <div className={styles.searchBlock}>
          <SearchIcon/>
          <input placeholder="Поиск"/>
        </div>
        
        <Button variant="contained" className={styles.penButton}>
          <PenIcon/>
        </Button>
      </div>

      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon/>
        </IconButton>
        <IconButton>
          <NotificationIcon/>
        </IconButton>
        <Avatar
          className="ml-15"
          alt="Alexandr Kozin" 
          src="https://avatars.githubusercontent.com/u/66381294?v=4" />
      </div>

    </Paper>
  )
}
//React.FC - функциональный компонент