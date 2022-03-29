
import React from 'react';
import styles from './WriteForm.module.scss';
import { Button, Input } from '@material-ui/core';
import dynamic from 'next/dynamic';

const Editor = dynamic(()=> import('../Editor').then(m=>m.Editor), {ssr:false})
//ne na servere render a na kliente, dynamic podgruzka

interface WriteFormProps{
  title?: string;
}

export const WriteForm: React.FC<WriteFormProps> = ({title})=>{
  return(
    <div>
      <Input classes={{ root: styles.titleField,}} placeholder="Заголовок" defaultValue={title}/>
      <div className={styles.editor}>
        <Editor/>
      </div>
      <Button variant="contained" color="primary">
          Опубликовать
      </Button>
    </div>
  );
};
