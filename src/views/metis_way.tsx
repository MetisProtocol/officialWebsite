import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import './metis_way.scss';

export default function Protocol() {
  const { t } = useTranslation();

  return (
    <section className="metis_fe--metisway-section-container">
      <div className="section-one">
        <Container className="one-container" maxWidth="lg">
          <h2 className="title">
            System Framework
          </h2>

          <p className="description">
            Metis is building a decentralized framework on top of the Layer1 network to erase the difficulty for you to use blockchain
          </p>

          <img className="preview-img" src="/images/metis_way_sys_frame.svg" alt="" />
        </Container>
      </div>

      <div className="section-two">
        <Container className="two-container" maxWidth="lg">
          <h2 className="title">
            Metis Virtual Machine
          </h2>
          <div className="sub-title">
            Hard forked from Optimistic Virtual Machine and Tailored for Collaboration Management
          </div>

          <div className="preview-img">
            <img src="/images/metis_way_section2.svg" alt=""/>
          </div>
        </Container>
      </div>

      <div className="section-three">
        <Container className="three-container" maxWidth="lg">
          <h2 className="title">
            ComCo Framework
          </h2>

          <div className="description">
            Model and program complex collaborations for managing decentralized companies

            <ul className="items-list">
              <li>
                On-chain tools for collaboration and management
              </li>

              <li>
                Proof for disputes resolution
              </li>

              <li>
                Proof for profit sharing
              </li>
            </ul>
          </div>

          <div className="preview-img">
            <img src="/images/metis_way_section3.svg" alt=""/>
          </div>
        </Container>
      </div>

      <div className="section-four">
        <Container className="four-container" maxWidth="lg">
          <h2 className="title">
            Optimistic Governance
          </h2>

          <div className="description">
            The best governance is NO governance at all
          </div>

          <div className="preview-img">
            <img src="/images/metis_way_section4.svg" alt=""/>
          </div>
        </Container>
      </div>

      <div className="section-five">
        <Container className="five-container" maxWidth="lg">
          <div className="info-part">
            <h2 className="title">
              {t('protocol_page.section_four.title')}
            </h2>
            <p className="description">
              {t('protocol_page.section_four.description')}
            </p>
          </div>

          <div className="preview-img">
            <img src="/images/metis_way_section5.svg" alt=""/>
          </div>
        </Container>
      </div>
    </section>
  )
}
