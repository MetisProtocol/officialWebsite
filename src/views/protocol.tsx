import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import './protocol.scss';

export default function Protocol() {
  const { t } = useTranslation();

  return (
    <section className="metis_fe--protocol-section-container">
      <div className="section-one">
        <Container className="one-container" maxWidth="lg">
          <div className="block">
            {t('protocol_page.section_one.one_part')}
          </div>

          <div className="block">
            {t('protocol_page.section_one.two_part')}
          </div>
        </Container>
      </div>

      <div className="section-two">
        <Container className="two-container" maxWidth="lg">
          <h2 className="title">
            {t('protocol_page.section_two.title')}
          </h2>
          <div className="sub-title">
            {t('protocol_page.section_two.subtitle')}
          </div>

          <div className="preview-img">
            <img src="/images/protocol_section2.png" alt=""/>
          </div>
        </Container>
      </div>

      <div className="section-three">
        <Container className="three-container" maxWidth="lg">
          <h2 className="title">
            {t('protocol_page.section_three.title')}
          </h2>

          <div className="preview-img">
            <img src="/images/protocol_section3.png" alt=""/>
          </div>
        </Container>
      </div>

      <div className="section-four">
        <Container className="four-container" maxWidth="lg">
          <div className="info-part">
            <h3 className="title">
              {t('protocol_page.section_four.title')}
            </h3>
            <p className="description">
              {t('protocol_page.section_four.description')}
            </p>
          </div>

          <div className="preview-img">
            <img src="/images/protocol_rp.png" alt=""/>
          </div>
        </Container>
      </div>
    </section>
  )
}
