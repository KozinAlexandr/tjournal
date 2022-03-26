import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { PostActions } from '../PostActions';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import UserAddIcon from '@material-ui/icons/PersonAddOutlined';
import Image from 'next/image';
import styles from './FullPost.module.scss';

export const FullPost = () => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div style={{ margin: '0 auto', width: 680 }}>
        <Typography variant="h4" className={styles.title}>
        Рынок денег рухнул: мем про «покупающих деньги» котов-бизнесменов 
        сильно изменился из-за экономической ситуации в России
        </Typography>
        <div>
          <Typography>
          Финансовый совет на 2022 год: продавайте деньги.
          </Typography>
          <Image
            src="https://leonardo.osnova.io/6d9f3008-03b1-5dd6-a4eb-e19763e4c77e/-/preview/800/-/format/webp/"
            height={500}
            width={600}
          />
          <Typography>
          В бизнес-изданиях параллельной реальности коты изучают котировки «денег» и, видя, экономическую ситуацию, советуют не покупать их, а продавать. Это постироничный мем рунета, который в последний месяц обрёл совершенно новое значение: теперь он иронизирует не над новым поколением инвесторов-любителей, а констатирует экономический кризис в России.
          </Typography>
          <Typography>Источник мема — уже знаменитый в рунете паблик «мемы про котов (по ржать)». Это постироничное сообщество, которое основал пользователь «ВКонтакте» Борис Мосехин — в паблике зародилось множество мемов, например, «мыш (кродёться)», «хоба», «большой кот, кот поменьше, вообще маленький кот жесть» и другие. В 2021 году одним из главных мемов года стал «Вы продаёте рыбов?» — он тоже пошёл оттуда. Также не в последнюю очередь именно из-за этого паблика шрифт Lobster ассоциируется с постиронией.
          </Typography>
          <Typography>
          В конце 2019-2020 года в «мемах про котов» начала появляться фраза «покупайте деньги», иронизирующая над бизнес-советами. Иллюстрацией шутки стал коллаж из стоковой картинки биржевых курсов и кота в костюме с Reddit. Шаблон в итоге чем-то напоминал мем Stonks и получил несколько вариаций.
          </Typography>
          <Image
            src="https://leonardo.osnova.io/144f3d44-512f-56fc-96c7-98e1c0e97325/-/preview/800/-/format/webp/"
            height={500}
            width={600}
          />
          <Image
            src="https://leonardo.osnova.io/a20743cc-9a05-5f5e-91d8-eb1a02391183/-/preview/600/-/format/webp/"
            height={500}
            width={600}
          />
          <Image
            src="https://leonardo.osnova.io/30c83008-1250-55d4-8617-870f8eaa2121/-/preview/800/-/format/webp/"
            height={500}
            width={600}
          />
          <Typography>
          В сообществе периодически возвращались к шутке — мем особо не выходил за пределы паблика, но стал популярным на локальном уровне. Таких в «мемах про котов» много — новый подписчик обычно сталкивается со множеством картинок про «ржение», «сыровое», «прищепочку» и другими форсами. «Покупайте деньги» и производное от него «5 денег» относились к похожей категории.
          </Typography>
          <Image
            src="https://leonardo.osnova.io/6a607f9c-531e-5c77-a6b8-9e3c2a6890d1/-/preview/600/-/format/webp/"
            height={500}
            width={600}
          />
          <Image
            src="https://leonardo.osnova.io/7e6f9c2c-6106-5a4d-a061-44fab9aa16ef/-/preview/600/-/format/webp/"
            height={500}
            width={600}
          />
          <Image
            src="https://leonardo.osnova.io/c21f713e-cee8-5643-8f60-43415d099acb/-/preview/600/-/format/webp/"
            height={500}
            width={600}
          />
          <Image
            src="https://leonardo.osnova.io/866bc10e-16d1-5f05-9312-3fa4064c10db/-/preview/600/-/format/webp/"
            height={500}
            width={600}
          />
          <Image
            src="https://leonardo.osnova.io/227322fa-2073-5071-80d7-3c89c859845a/-/preview/300/-/format/webp/"
            height={500}
            width={600}
          />
          <Image
            src="https://leonardo.osnova.io/cab155a5-4e3a-58c7-999a-0f85413092bd/-/preview/300/-/format/webp/"
            height={500}
            width={600}
          />
          <Typography>
          После начала «спецоперации» на Украине Россия столкнулась с экономическими последствиями: с первых дней курсы доллара и евро выросли до исторических значений, на Мосбирже почти месяц не проводили торги акциями, а масштабные санкции Запада стали причиной для тревожных прогнозов.
          </Typography>
          <Typography>
          Именно в тот момент мем про котов-бизнесменов резко обрёл новое значение: теперь они не покупают, а в спешке продают деньги. Или же отмечают, что «рынок денег рухнул», а курс «5 денег» теперь составляет миллиард рублей. Экономическая ситуация дала шутке новую жизнь.
          </Typography>
          <Image
            src="https://leonardo.osnova.io/dd56622e-83b2-5e80-97c2-f13ccebdb3d9/-/preview/500/-/format/webp/"
            height={500}
            width={600}
          />
          <Image
            src="https://leonardo.osnova.io/9f731c5e-44cb-51dc-bb95-aac91e7208b4/-/preview/600/-/format/webp/"
            height={500}
            width={600}
          />
          <Image
            src="https://leonardo.osnova.io/1c7fe1b1-7953-5a4c-b0d0-03e35948de90/-/preview/600/-/format/webp/"
            height={500}
            width={600}
          />
          <Image
            src="https://leonardo.osnova.io/30e484f2-68f6-544e-ad20-5b129a822b7a/-/preview/600/-/format/webp/"
            height={500}
            width={600}
          />
          <Image
            src="https://leonardo.osnova.io/78187ff5-89ab-5953-9acf-a8390bb32683/-/preview/600/-/format/webp/"
            height={500}
            width={600}
          />
          <Image
            src="https://leonardo.osnova.io/bc145f6d-b8da-5cd6-876e-c02615c8aa8f/-/preview/800/-/format/webp/"
            height={500}
            width={600}
          />
          <Image
            src="https://leonardo.osnova.io/3f18b344-f644-5875-b60f-96b6ecc36e25/-/preview/300/-/format/webp/"
            height={500}
            width={600}
          />
          <Typography>
          Не всегда героями шуток становились коты.
          </Typography>
          <Image
            src="https://leonardo.osnova.io/97337d8e-3ed5-5b65-a4e6-4fa9252e2322/-/preview/500/-/format/webp/"
            height={500}
            width={600}
          />
          <Image
            src="https://leonardo.osnova.io/fef84180-4f19-510b-a301-69a4056544b6/-/preview/500/-/format/webp/"
            height={500}
            width={600}
          />
          <Image
            src="https://leonardo.osnova.io/99d3d246-df33-54c4-bf5f-11c6595c313c/-/preview/1100/-/format/webp/"
            height={500}
            width={600}
          />
          <Image
            src="https://leonardo.osnova.io/8d27969a-98ad-5e78-931f-d2a6f8e08951/-/preview/700/-/format/webp/"
            height={500}
            width={600}
          />
          <div style={{ width: 250, marginLeft: -14 }}>
            <PostActions />
          </div>
          <div className="d-flex justify-between align-center mt-30 mb-30">
            <div className={styles.userInfo}>
              <img
                src="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg"
                alt="Avatar"
              />
              <b>Mr.Godzilla</b>
              <span>+1337</span>
            </div>
            <div>
              <Button variant="contained" className="mr-15">
                <MessageIcon />
              </Button>
              <Button variant="contained">
                <UserAddIcon />
                <b className="ml-10">Подписаться</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};
