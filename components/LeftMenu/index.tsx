import React from 'react';
import { Button } from '@material-ui/core';
import {WhatshotOutlined as FireIcon} from '@mui/icons-material/';

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
      </ul>
    </div>
  );
};
//React.FC - функциональный компонент