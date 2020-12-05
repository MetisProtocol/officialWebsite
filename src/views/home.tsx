import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import './home.scss';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="metis_fe--home-section-container">
      <div className="section-one">
        <Container className="one-container" maxWidth="lg">
          <h1>
            {t('home_page.title1')}
          </h1>
          <h1>
            {t('home_page.title2')}
          </h1>
        </Container>

        <div className="contract-list">
          <a href="/">
            <img src="/images/media.png" alt=""/>
          </a>
          <a href="/">
            <img src="/images/telegram.png" alt=""/>
          </a>
          <a href="/">
            <img src="/images/github.png" alt=""/>
          </a>
          <a href="/">
            <img src="/images/twitter.png" alt=""/>
          </a>
        </div>
      </div>

      <div className="section-two">
        <Container className="two-container" maxWidth="lg">
          <h2 className="title">
            { t('home_page.section_two.title') }
          </h2>

          <div className="preview-img">
            <img src="/images/home_section2.png" alt=""/>
          </div>
        </Container>
      </div>

      <div className="section-three">
        <Container className="three-container" maxWidth="lg">
          <h2 className="title">
            { t('home_page.section_three.title') }
          </h2>

          <p className="description">
            { t('home_page.section_three.description') }
          </p>

          <div className="preview-img">
            <img src="/images/home_section3.png" alt=""/>
          </div>

          <h2 className="title another-part">
            { t('home_page.section_four.title') }
          </h2>

          <p className="description">
            { t('home_page.section_four.description') }
          </p>

          <div className="preview-img">
            <img src="/images/home_section4.png" alt=""/>
          </div>
        </Container>
      </div>

      <div className="section-five">
        <Container className="five-container" maxWidth="lg">
          <div className="block-list">
            <div className="block">
              <img src="/images/fi_trending-up.png" alt=""/>

              <span className="name" style={{color: '#CEA7FF'}}>
                {t('home_page.section_five.one_name')}
              </span>
            </div>

            <div className="block">
              <img src="/images/fi_zap.png" alt=""/>

              <span className="name" style={{color: '#81E8FF'}}>
                {t('home_page.section_five.two_name')}
              </span>
            </div>
          </div>
          <div className="block-list">
            <div className="block">
              <img src="/images/price_down.png" alt=""/>

              <span className="name" style={{color: '#8591FF'}}>
                {t('home_page.section_five.three_name')}
              </span>
            </div>

            <div className="block">
              <img src="/images/fi_shield.png" alt=""/>

              <span className="name" style={{color: '#88FFBF'}}>
                {t('home_page.section_five.four_name')}
              </span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
