import React from 'react';
import { Button } from '@material-ui/core';
import {
  WhatshotOutlined as FireIcon,
  SmsOutlined as MessageIcon,
  TrendingUpOutlined as TrendingIcon,
  FormatListBulletedOutlined as ListIcon,
} from '@mui/icons-material/';

import styles from './LeftMenu.module.scss';


export const LeftMenu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button>
            <FireIcon />
              Лента
            </Button>
        </li>
        <li>
          <Button>
            <MessageIcon />
              Сообщение
            </Button>
        </li>
        <li>
          <Button>
            <TrendingIcon />
              Рейтинг SJ
            </Button>
        </li>
        <li>
          <Button>
            <ListIcon />
              Подписки
            </Button>
        </li>
      </ul>
    </div>
  );
};
//React.FC - функциональный компонент