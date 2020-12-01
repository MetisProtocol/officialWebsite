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
        position: t("company_page.team.elena.position"),
        intro: t("company_page.team.elena.intro"),
        link: "",
      },
      {
        name: "Yuan Su",
        nameClr: "#88ff8f",
        avatar: "/images/yuan.png",
        position: t("company_page.team.yuan.position"),
        intro: t("company_page.team.yuan.intro"),
        link: "",
      },
    ]);

    setRightPartner([
      {
        name: "Kevin Liu",
        nameClr: "#81e8ff",
        avatar: "/images/kevin.png",
        position: t("company_page.team.kevin.position"),
        intro: t("company_page.team.kevin.intro"),
        link: "",
      },
    ]);
  }, [t]);

  return (
    <div className="metis_fe--company-container">
      <div className="overview-container">
        <Container className="group" maxWidth="lg">
          <img src="/images/logo.png" alt="" />
          <p className="description">{t("company_page.description")}</p>
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

                      <a href={partner.link}>
                        <img src="/images/linkin.png" alt="" />
                      </a>
                    </div>
                    <img className="avatar" src={partner.avatar} alt="" />
                  </div>
                );
              })}
            </div>
            <div className="right-col">
              {rightPartner.map((partner) => {
                return (
                  <div key={uuid()} className="partner-box">
                    <img className="avatar" src={partner.avatar} alt="" />
                    <div className="info">
                      <div className="name" style={{ color: partner.nameClr }}>
                        {partner.name}
                      </div>
                      <div className="position">{partner.position}</div>
                      <p className="intro">{partner.intro}</p>

                      <a href={partner.link}>
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
                  <div className="info">
                    <div className="name" style={{ color: partner.nameClr }}>
                      {partner.name}
                    </div>
                    <div className="position">{partner.position}</div>
                    <p className="intro">{partner.intro}</p>

                    <a href={partner.link}>
                      <img src="/images/linkin.png" alt="" />
                    </a>
                  </div>
                  <img className="avatar" src={partner.avatar} alt="" />
                </div>
              );
            })}

            {rightPartner.map((partner) => {
              return (
                <div key={uuid()} className="partner-box">
                  <div className="info">
                    <div className="name" style={{ color: partner.nameClr }}>
                      {partner.name}
                    </div>
                    <div className="position">{partner.position}</div>
                    <p className="intro">{partner.intro}</p>

                    <a href={partner.link}>
                      <img src="/images/linkin.png" alt="" />
                    </a>
                  </div>
                  <img className="avatar" src={partner.avatar} alt="" />
                </div>
              );
            })}
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
