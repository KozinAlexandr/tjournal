import Link from 'next/link';
import React from 'react';
import styles from './SideComments.module.scss';

interface CommentItemProps {
  user: {
    id:number;
    fullname: string;
  };
  text: string;
  post: {
    id:number
    title: string;
  };
}

export const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img src="https://nyaa.shikimori.one/system/users/x64/515005.png?1598213191" alt = "avatar"/>
        <Link href ={'/profile/${user.id}'}>
          <a >
            <b>{user.fullname}</b>
          </a>
        </Link>
      </div>
      <p className={styles.text}>{text}</p>
        <Link href ={'/news/${user.id}'}>
            <a >
              <span className={styles.postTitle}>{post.title}</span>
            </a>
          </Link>
    </div>
  );
};