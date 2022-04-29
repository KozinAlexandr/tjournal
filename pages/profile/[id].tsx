import Link from 'next/link';
import { Paper, Avatar, Typography, Button, Tabs, Tab } from '@material-ui/core';
import {
  SettingsOutlined as SettingsIcon,
  TextsmsOutlined as MessageIcon,
} from '@material-ui/icons';

import { Post } from '../../components/Post';
import { MainLayout } from '../../layouts/MainLayout';

export default function Profile() {
  return (
      <MainLayout contentFullWidth hideComments>
        <Paper className="pl-20 pr-20 pt-20 mb-30" elevation={0}>
          <div className="d-flex justify-between">
            <div>
              <Avatar
                  style={{ width: 120, height: 120, borderRadius: 6 }}
                  src="https://avatars.githubusercontent.com/u/66381294?v=4"
              />
              <Typography style={{ fontWeight: 'bold' }} className="mt-10" variant="h4">
                Alexandr Kozin
              </Typography>
            </div>
            <div>
              <Link href="/profile/settings" passHref>
                <Button
                    style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                    variant="contained">
                  <SettingsIcon />
                </Button>
              </Link>
              <Button style={{ height: 42 }} variant="contained" color="primary">
                <MessageIcon className="mr-10" />
                Написать
              </Button>
            </div>
          </div>
          <div className="d-flex mb-10 mt-10">
            <Typography style={{ fontWeight: 'bold', color: '#35AB66' }} className="mr-15">
              +322
            </Typography>
            <Typography>550 подписчиков</Typography>
          </div>
          <Typography>Создатель самого популярного интернет-издание и агрегатор новостей SummerJournal</Typography>

          <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
            <Tab label="Статьи" />
            <Tab label="Комментарии" />
            <Tab label="Закладки" />
          </Tabs>
        </Paper>
        <div className="d-flex align-start">
          <div className="mr-20 flex">
            <Post />
          </div>
          <Paper style={{ width: 300 }} className="p-20 mb-20" elevation={0}>
            <b>Подписчики</b>
            <div className="d-flex mt-15">
              <Avatar
                  className="mr-10"
                  src="https://sun9-1.userapi.com/impf/28-d4LwF75nsZMkKEPbft2jE5bvSS2nsLRS_oA/rbi6JlY-Meg.jpg?size=800x800&quality=96&sign=54c6b982167b423c85fd1001dbc30334&type=album"
              />
              <Avatar
                  className="mr-10"
                  src="https://sun9-56.userapi.com/impf/0yqzTwz9G6aztRQ81_-lwmNAMcQBNHHl_XMjuA/uD0AK2_kFQM.jpg?size=639x538&quality=95&sign=1cc338b3ec8bc55afcf8efa7285abfce&type=album"
              />
              <Avatar
                  className="mr-10"
                  src="https://sun9-62.userapi.com/impg/PyonSRCQH9SFUB1MkzX60SfcTlnFjOTe_6Jwlg/R8BMiK6RQEw.jpg?size=1368x1368&quality=96&sign=d4d99db7085032ade0c2d45b983522ab&type=album"
              />
              <Avatar
                  className="mr-10"
                  src="https://sun9-49.userapi.com/impf/wRD5HGMu1d8LGwQ60i6PFrYluPhn-6bdkQvPhg/JSv4uw9XmFI.jpg?size=960x1280&quality=96&sign=6bb463205b722d23763f10d5029397b7&type=album"
              />
              <Avatar
                  className="mr-10"
                  src="https://pp.userapi.com/c633722/v633722645/26f8f/EzGUE4ATJdo.jpg"
              />
            </div>
          </Paper>
        </div>
      </MainLayout>
  );
}
