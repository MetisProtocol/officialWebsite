import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuid } from 'uuid';
import './roadmap.scss';

interface RoadmapItem {
  icon: string;
  date: string;
  title: string;
  description: string;
}

export default function Roadmap() {
  const { t } = useTranslation();
  const [roadmapItems, setRoadmapItems] = useState<RoadmapItem[]>([]);
  const [prevDisabled, setPrevDisabled] = useState<boolean>(false);
  const [nextDisabled, setNextDisabled] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  
  const isPhone = document.body.clientWidth < 768;
  const pageStep = isPhone ? 100 : 33;

  function handlePageNext() {
    if (!nextDisabled) {
      setCurrentPage(currentPage + 1);
    }
  }
  
  function handlePagePrev() {
    if (!prevDisabled) {
      setCurrentPage(currentPage - 1)
    }
  }

  useEffect(() => {
    setRoadmapItems([
      {
        title: t('company_page.roadmap.items.stone_age.title'),
        date: 'Dec 2018 - Dec 2020',
        icon: '/images/stone_age.svg',
        description: t('company_page.roadmap.items.stone_age.description')
      },
      {
        title: t('company_page.roadmap.items.bronze_age.title'),
        date: 'Jan 2021 - Mar 2021',
        icon: '/images/bronze_age.svg',
        description: t('company_page.roadmap.items.bronze_age.description')
      },
      {
        title: t('company_page.roadmap.items.Iron_age.title'),
        date: 'Apr 2021 - Jul 2021',
        icon: '/images/iron_age.svg',
        description: t('company_page.roadmap.items.Iron_age.description')
      },
      {
        title: t('company_page.roadmap.items.Discovery_age.title'),
        date: 'Starting from Aug 2021',
        icon: '/images/telescope.svg',
        description: t('company_page.roadmap.items.Discovery_age.description')
      }
    ]);
  }, [ t ]);

  useEffect(() => {
    if (document.body.clientWidth < 768) {
      if (currentPage >= roadmapItems.length - 1) {
        setNextDisabled(true);
      } else {
        setNextDisabled(false);
      }
    } else {
      if (currentPage >= roadmapItems.length - 3) {
        setNextDisabled(true);
      } else {
        setNextDisabled(false);
      }
    }

    if (currentPage <= 0) {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
    }
  }, [ currentPage, roadmapItems ]);

  return (
    <div className="roadmap-page-container">
      <span className={`page-prev ${prevDisabled ? 'disabled' : ''}`} onClick={handlePagePrev}>

        <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="1" d="M15 2L2 14.8842L15 28" stroke="#81E8FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>

      <span className={`page-next ${nextDisabled ? 'disabled' : ''}`} onClick={handlePageNext}>
        <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="1" d="M2 2L15 14.8842L2 28" stroke="#81E8FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>

      <div className="items-list" style={{transform: `translateX(${- pageStep * currentPage}%)`}}>
        {
          roadmapItems.map((item: RoadmapItem, index: number) => {

            return (
              <div key={uuid()} className="roadmap-item">
                {
                  index !== 0 && <div className="split-line"></div>
                }
                <div className="item-icon">
                  <img src={item.icon} alt=""/>
                </div>

                <span className="item-title">
                  {item.title}
                </span>

                <span className="item-date">
                  {item.date}
                </span>

                <p className="item-description" dangerouslySetInnerHTML={{ __html: item.description }} />    
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

