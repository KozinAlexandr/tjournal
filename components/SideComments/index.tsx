import React from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

import styles from './SideComments.module.scss';

const items = [
  {
    user: {
      fullname: 'Александр Козин',
    },
    text: 'Надеюсь в этот раз сайт заработает и все будет как надо. Ээээ...',
    post: {
      title: 'SummerJournal',
    },
  },
  {
    user: {
      fullname: 'Иван Кудреневич',
    },
    text: 'Нет никаких проблем, пока проблема не стала проблемой.',
    post: {
      title: 'Пары политеха',
    },
  },
  {
    user: {
      fullname: 'Никита Вяткин',
    },
    text: 'Мне кажется, незнание — это не так уж и плохо. Ведь с новыми знаниями появляются и новые проблемы.',
    post: {
      title: 'Философские цитаты',
    },
  },
  {
    user: {
      fullname: 'Калайдин Евгений Николаевич',
    },
    text: '2+2 может быть 2, потому что, если мы соединим двух волков и двух баранов, то волки сожрут баранов.',
    post: {
      title: 'Теория игр и исследование операций',
    },
  },
  {
    user: {
      fullname: 'Подколзин Вадим Владиславович',
    },
    text: 'П: - Как думаете, можно ли поймать тигра в клетку? С: - Конечно.П: - А вот и нет! Все тигры в полоску!',
    post: {
      title: 'Фундаментальные дискретные модели',
    },
  },
  {
    user: {
      fullname: 'Костенко Константин Иванович ',
    },
    text: '* пара подходит к концу * - У нас ещё есть 15 минут и вы вообще молодцы! Это я себе.',
    post: {
      title: 'Математическая логика и дискретная математика',
    },
  },
  
];

interface CommentItemProps {
  user: {
    fullname: string;
  };
  text: string;
  post: {
    title: string;
  };
}

const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img src="https://nyaa.shikimori.one/system/users/x64/515005.png?1598213191" />
        <a href="#">
          <b>{user.fullname}</b>
        </a>
      </div>
      <p className={styles.text}>{text}</p>
      <a href="#">
        <span className={styles.postTitle}>{post.title}</span>
      </a>
    </div>
  );
};

export const SideComments = () => {
  return (
    <div className={styles.root}>
      <h3>
        Комментарии <ArrowRightIcon />
      </h3>
      {items.map((obj) => (
        <CommentItem {...obj} />
      ))}
    </div>
  );
};
