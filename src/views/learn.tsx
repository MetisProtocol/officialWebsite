import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import './learn.scss';

enum ItemType {
  ARTICLE = 'article',
  VIDEO = 'video',
}

interface Item {
  previewImg: string;
  title: string;
  date: Date;
  type: ItemType;
  link: string;
}

export default function Learn() {
  const { t } = useTranslation();
  const [ items, setItems ] = useState<Item[]>([]);

  useEffect(() => {
    setItems([
      {
        previewImg: '/images/article_01.png',
        title: t('learn_page.article01_title'),
        date: new Date('2020-09-08'),
        type: ItemType.ARTICLE,
        link: ''
      },
      {
        previewImg: '/images/article_02.png',
        title: t('learn_page.article02_title'),
        date: new Date('2020-09-13'),
        type: ItemType.ARTICLE,
        link: ''
      },
      {
        previewImg: '/images/article_03.png',
        title: t('learn_page.article03_title'),
        date: new Date('2020-09-28'),
        type: ItemType.ARTICLE,
        link: ''
      },
      {
        previewImg: '/images/video_01.png',
        title: t('learn_page.video01_title'),
        date: new Date('2020-09-08'),
        type: ItemType.VIDEO,
        link: ''
      },
      {
        previewImg: '/images/video_02.png',
        title: t('learn_page.video02_title'),
        date: new Date('2020-09-08'),
        type: ItemType.VIDEO,
        link: ''
      },
      {
        previewImg: '/images/video_03.png',
        title: t('learn_page.video03_title'),
        date: new Date('2020-09-08'),
        type: ItemType.VIDEO,
        link: ''
      },
    ]);
  }, []);

  return (
    <section className="metis_fe--learn-section-container">
      <Container maxWidth="lg" className="learn-section-content">
        <div className="title">
          <h1>
            { t('learn_page.title') }
          </h1>
          <p>
            { t('learn_page.description') }
          </p>
        </div>
        <Grid container spacing={5}>
          {
            items.map((item: Item) => {
              return (
                <Grid key={uuid()} item xs={12} md={6} lg={4}>
                  <div className="item-block">
                    <div className="preview-img" style={{backgroundImage: `url(${item.previewImg}`}}>
                      {
                        item.type === ItemType.VIDEO ? 
                        <span className="play-btn">
                          <img src="/images/arrow_right.png" alt=""/>
                        </span> : 
                        <></>
                      }
                    </div>
                    <h3>{item.title}</h3>
                    <div className="sub-mes">
                      <span className="date">
                        {moment(item.date).format('MMMM Do YYYY')}
                      </span>

                      <a className="link-btn" href={item.link} target="__blink">
                        { item.type === ItemType.ARTICLE ? t('learn_page.read') : t('learn_page.watch') }
                        <ArrowForward />
                      </a>
                    </div>
                  </div>
                </Grid>
              );
            })
          }
        </Grid>
      </Container>
    </section>
  );
}
