import { Paper, Button, IconButton, Avatar } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import {
  SearchOutlined as SearchIcon, 
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  NotificationsOutlined as NotificationIcon,
  ExpandMoreOutlined as ArrowBottom,
} from '@mui/icons-material/';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <Paper classes={{root: styles.root}} elevation={0}>
      <div className="d-flex align-center">
      <IconButton>
          <MenuIcon/>
        </IconButton>
        <Link href="/">
          <a>
            <img height={35} className="mr-20" src="/static/img/logo.svg" alt="Logo" />
          </a>
        </Link>

        
        <div className={styles.searchBlock}>
          <SearchIcon/>
          <input placeholder="Поиск"/>
        </div>
        
        <Button variant="contained" className={styles.penButton}>
          Новая запись
        </Button>
      </div>

      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon/>
        </IconButton>
        <IconButton>
          <NotificationIcon/>
        </IconButton>
        <Link href="/profile/1">
          <a className = "d-flex align-center">
            <Avatar
            className={styles.avatar}
            alt="Alexandr Kozin" 
            src="https://avatars.githubusercontent.com/u/66381294?v=4" />
            <ArrowBottom />
          </a>
        </Link>
      </div>
    </Paper>
  );
};
//React.FC - функциональный компонент