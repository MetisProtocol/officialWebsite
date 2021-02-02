import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Container from "@material-ui/core/Container";
import { v4 as uuid } from "uuid";
import Roadmap from "./roadmap";
import "./company.scss";

interface Partner {
  name: string;
  position: string;
  link: string;
  intro: string;
  avatar: string;
  inactiveAvatar: string;
  nameClr: string;
}

export default function Company() {
  const { t } = useTranslation();
  const [leftPartner, setLeftPartner] = useState<Partner[]>([]);
  const [rightPartner, setRightPartner] = useState<Partner[]>([]);

  useEffect(() => {
    setLeftPartner([
      {
        name: "Elena Sinelnikova",
        nameClr: "#8591ff",
        avatar: "/images/elena.png",
        inactiveAvatar: "/images/elena_inactive.png",
        position: t("company_page.team.elena.position"),
        intro: t("company_page.team.elena.intro"),
        link: "https://www.linkedin.com/in/esinelnikova",
      },
      {
        name: "Yuan Su",
        nameClr: "#88ff8f",
        avatar: "/images/yuan.png",
        inactiveAvatar: "/images/yuan_inactive.png",
        position: t("company_page.team.yuan.position"),
        intro: t("company_page.team.yuan.intro"),
        link: "https://www.linkedin.com/in/yuansu",
      },
    ]);

    setRightPartner([
      {
        name: "Kevin Liu",
        nameClr: "#81e8ff",
        avatar: "/images/kevin.png",
        inactiveAvatar: "/images/kevin_inactive.png",
        position: t("company_page.team.kevin.position"),
        intro: t("company_page.team.kevin.intro"),
        link: "https://www.linkedin.com/in/kevinliudac",
      },
    ]);
  }, [t]);

  return (
    <div className="metis_fe--company-container">
      <div className="overview-container">
        <Container className="group" maxWidth="lg">
          <img src="/images/logo_svg.svg" alt="" />
          <div className="description">
            {/* {t("company_page.description")} */}
            <span className="text-strong">In Greek</span> mythology,
            <br />
            <span className="text-strong">Metis was the Titan</span> of
            <br />
            prudence, good council, planning,
            <br />
            advice, deep thought, craftiness and wisdom.
          </div>
        </Container>
      </div>
      <div className="team-container">
        <Container maxWidth="lg">
          <h2>{t("company_page.team.title")}</h2>
          <div className="team-group">
            <div className="left-col">
              {leftPartner.map((partner) => {
                return (
                  <div key={uuid()} className="partner-box">
                    <div className="info">
                      <div className="name" style={{ color: partner.nameClr }}>
                        {partner.name}
                      </div>
                      <div className="position">{partner.position}</div>
                      <p className="intro">{partner.intro}</p>

                      <a href={partner.link} target="__blank">
                        <img src="/images/linkin.png" alt="" />
                      </a>
                    </div>
                    <div className="avatar">
                      <img
                        className="active-avatar"
                        src={partner.avatar}
                        alt=""
                      />
                      <img
                        className="inactive-avatar"
                        src={partner.inactiveAvatar}
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="right-col">
              {rightPartner.map((partner) => {
                return (
                  <div key={uuid()} className="partner-box">
                    <div className="avatar">
                      <img
                        className="active-avatar"
                        src={partner.avatar}
                        alt=""
                      />
                      <img
                        className="inactive-avatar"
                        src={partner.inactiveAvatar}
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <div className="name" style={{ color: partner.nameClr }}>
                        {partner.name}
                      </div>
                      <div className="position">{partner.position}</div>
                      <p className="intro">{partner.intro}</p>

                      <a href={partner.link} target="__blank">
                        <img src="/images/linkin.png" alt="" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="team-group-phone">
            {leftPartner.map((partner) => {
              return (
                <div key={uuid()} className="partner-box">
                  <div className="avatar">
                    <img
                      className="active-avatar"
                      src={partner.avatar}
                      alt=""
                    />
                    <img
                      className="inactive-avatar"
                      src={partner.inactiveAvatar}
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <div className="name" style={{ color: partner.nameClr }}>
                      {partner.name}
                    </div>
                    <div className="position">{partner.position}</div>
                    <p className="intro">{partner.intro}</p>

                    <a href={partner.link} target="__blank">
                      <img src="/images/linkin.png" alt="" />
                    </a>
                  </div>
                </div>
              );
            })}

            {rightPartner.map((partner) => {
              return (
                <div key={uuid()} className="partner-box">
                  <div className="avatar">
                    <img
                      className="active-avatar"
                      src={partner.avatar}
                      alt=""
                    />
                    <img
                      className="inactive-avatar"
                      src={partner.inactiveAvatar}
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <div className="name" style={{ color: partner.nameClr }}>
                      {partner.name}
                    </div>
                    <div className="position">{partner.position}</div>
                    <p className="intro">{partner.intro}</p>

                    <a href={partner.link} target="__blank">
                      <img src="/images/linkin.png" alt="" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <h2>Advisor</h2>

          <div className="team-group think-tank-group">
            <div className="left-col">
              <div className="partner-box">
                <img
                  className="avatar"
                  src="/images/Ralf_P_Gerteis.jpeg"
                  alt=""
                />
                <div className="info">
                  <div className="name">Ralf P. Gerteis</div>
                  <div className="position">Entrepreneur and Investor</div>
                </div>
              </div>
            </div>

            <div className="right-col">
              <div className="partner-box">
                <img
                  className="avatar"
                  src="/images/advisor_medha_parlikar.jpeg"
                  alt=""
                />
                <div className="info">
                  <div className="name">Medha Parlikar</div>
                  <div className="position">
                    CTO and Co-Founder of CasperLabs
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="team-group-phone think-tank-group">
            <div className="left-col">
              <div className="partner-box">
                <img
                  className="avatar"
                  src="/images/Ralf_P_Gerteis.jpeg"
                  alt=""
                />
                <div className="info">
                  <div className="name">Ralf P. Gerteis</div>
                  <div className="position">Entrepreneur and Investor</div>
                </div>
              </div>
            </div>

            <div className="right-col">
              <div className="partner-box">
                <img
                  className="avatar"
                  src="/images/advisor_medha_parlikar.jpeg"
                  alt=""
                />
                <div className="info">
                  <div className="name">Medha Parlikar</div>
                  <div className="position">
                    CTO and Co-Founder of CasperLabs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="roadmap-container">
        <Container maxWidth="lg">
          <h2>{t("company_page.roadmap.title")}</h2>
          <Roadmap />
        </Container>
      </div>
    </div>
  );
}
