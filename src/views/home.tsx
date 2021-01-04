import React from 'react';
// import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import './home.scss';

export default function Home() {
  // const { t } = useTranslation();

  return (
    <div className="metis_fe--home-section-container">
      <div className="section-one">
        <Container className="one-container" maxWidth="lg">
          
          {/* <div dangerouslySetInnerHTML={{ __html:  t('home_page.title1')}} /> */}

          <h1 className="title">
            <span className="text-strong">
            Metis Runs
            </span>
            <br/>
            <span className="text-strong">
            Decentralized Companies
            </span>
          </h1>
        </Container>

        <div className="contract-list">
          <a href="https://metisdao.medium.com" target="__blank">
            <img src="/images/medium.svg" alt=""/>
          </a>
          <a href="https://t.me/MetisDAO" target="__blank">
            <img src="/images/telegram.svg" alt=""/>
          </a>
          <a href="https://github.com/MetisProtocol/metis" target="__blank">
            <img src="/images/github.svg" alt=""/>
          </a>
          <a href="https://twitter.com/MetisDAO" target="__blank">
            <img src="/images/twitter.svg" alt=""/>
          </a>
        </div>
      </div>

      <div className="section-two">
        <Container className="two-container" maxWidth="lg">
          <h2 className="title">
            Launch a Decentralized Company in
            <span className="text-strong"> 3 Steps </span>
          </h2>

          <div className="step-list">
            <div className="step">
              <h4 className="step-title">
                1.Create
              </h4>
              <img style={{width: 330}} className="step-img" src="/images/home_step1.svg" alt=""/>
            </div>

            <div className="step">
              <h4 className="step-title">
                2.Stake to Activate
              </h4>
              <img style={{width: 280}} className="step-img" src="/images/home_step2.svg" alt=""/>
            </div>

            <div className="step">
              <h4 className="step-title">
                3.And All Set!
              </h4>
              <img style={{width: 634}} className="step-img" src="/images/home_step3.svg" alt=""/>
            </div>
          </div>
        </Container>
      </div>

      <div className="section-three">
        <Container className="three-container" maxWidth="lg">
          <h2 className="title">
            Manage All the Community 
            <span className="text-strong"> Collaborations </span>
          </h2>

          <div className="group">
            <h4 className="group-title">
              Incentivized Tasks
            </h4>

            <img src="/images/home_section3_1.svg" alt=""/>
          </div>

          <div className="group">
            <h4 className="group-title">
              Community-Maintained Knowledge Base
            </h4>

            <img src="/images/home_section3_2.svg" alt=""/>
          </div>

          <div className="item-list">
            <div className="item-group">
              <div className="item-group-title">
              Liquidity Pool
              </div>
              <img src="/images/home_section3_process.svg" alt=""/>
            </div>

            <div className="item-group">
              <div className="item-group-title">
              Chatroom
              </div>
              <img src="/images/home_section3_chat.svg" alt=""/>
            </div>

            <div className="item-group">
              <div className="item-group-title">
              Accounting
              </div>
              <img src="/images/home_section3_account.svg" alt=""/>
            </div>

            <div className="item-group">
              <div className="item-group-title">
              Arbitration
              </div>
              <img src="/images/home_section3_handshake.svg" alt=""/>
            </div>
          </div>

          <div className="plus">
            <p>more to come ...</p>
          </div>
        </Container>
      </div>

      <div className="section-five">
        <Container className="five-container" maxWidth="lg">
          <div className="block-list">
            <div className="block">
              <img src="/images/fi_trending-up.svg" alt=""/>

              <span className="name" style={{color: '#CEA7FF'}}>
                Easy-to-use framework
              </span>
            </div>

            <div className="block">
              <img src="/images/fi_zap.svg" alt=""/>

              <span className="name" style={{color: '#81E8FF'}}>
                Cater to the UX of internet applications
              </span>
            </div>
          </div>
          <div className="block-list">
            <div className="block">
              <img src="/images/price_down.svg" alt=""/>

              <span className="name" style={{color: '#8591FF'}}>
                High Scalability
              </span>
            </div>

            <div className="block">
              <img src="/images/fi_shield.svg" alt=""/>

              <span className="name" style={{color: '#88FFBF'}}>
                Low Operation Cost
              </span>
            </div>
          </div>
        </Container>
      </div>

      <div className="section-six">
        <Container className="six-container" maxWidth="lg">
          <h2 className="title">
            Use cases
          </h2>

          <div className="block-list">
            <div className="block">
              <div className="block-title">
              Defi 2.0
              </div>
              <div className="block-content">
              Not just yield farming, a new way to grow the community and integrate with real-world business
              </div>
            </div>

            <div className="block">
              <div className="block-title">
              Gig Economy
              </div>
              <div className="block-content">
              A decentralized and trustworthy platform for global gig workers
              </div>
            </div>

            <div className="block">
              <div className="block-title">
              Developers Community
              </div>
              <div className="block-content">
              Your Work, 
              <br/>
              your Contribution, 
              <br/>
              your Reputation Power
              </div>
            </div>
          </div>

          <div className="items-list">
            <div className="item">
              <img className="item-icon" src="/images/home_section6_union.svg" alt=""/>

              <span className="item-name">
                DApps
              </span>
            </div>

            <div className="item">
              <img className="item-icon" src="/images/home_section6_vector.svg" alt=""/>

              <span className="item-name">
                Open Source
                <br/>
                Projects
              </span>
            </div>

            <div className="item">
              <img className="item-icon" src="/images/home_section6_users.svg" alt=""/>

              <span className="item-name">
                Community
                <br/>
                Economy
              </span>
            </div>

            <div className="item">
              <img className="item-icon" src="/images/home_section6_share.svg" alt=""/>

              <span className="item-name">
                Sharing
                <br/>
                Economy
              </span>
            </div>

            <div className="item">
              <img className="item-icon" src="/images/home_section6_heart.svg" alt=""/>

              <span className="item-name">
                Volunteers
              </span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
