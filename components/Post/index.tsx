import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';

import styles from './Post.module.scss';


export const Post: React.FC = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        Рынок денег рухнул: мем про «покупающих деньги» 
        котов-бизнесменов сильно изменился из-за экономической ситуации в России
      </Typography>
      <Typography className = "mt-10 mb-15">
          Финансовый совет на 2022 год: продавайте деньги.
      </Typography>
      <Image src="https://leonardo.osnova.io/6d9f3008-03b1-5dd6-a4eb-e19763e4c77e/-/preview/700/-/format/webp/" 
          height = {500}
          width = {600}
          />
    </Paper>
  );
};
//React.FC - функциональный компонент