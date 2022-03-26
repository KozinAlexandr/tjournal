import React from 'react';
import { Typography, IconButton, MenuItem, Menu } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './Comment.module.scss';

interface CommentPostProps {
  user: {
    fullname: string;
  };
  text: string;
}

export const Comment: React.FC<CommentPostProps> = ({ user, text }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <img
          src="https://i.pinimg.com/564x/7e/16/cb/7e16cb7f729dad2fe9de384e25485636.jpg"
          alt="Avatar"
        />
        <b>Master Oogway</b>
        <span>3 часа назад</span>
      </div>
      <Typography className={styles.text}>
        Твои мысли подобны кругам на воде, друг мой. В волнении исчезает ясность, но если ты дашь волнам успокоиться, ответ станет очевидным.
      </Typography>
      <span className={styles.replyBtn}>Ответить</span>
      <IconButton onClick={handleClick}>
        <MoreIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        elevation={2}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted>
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};
