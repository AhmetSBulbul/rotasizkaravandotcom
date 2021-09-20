import React, { Component } from "react";
import * as styles from "./index.module.css";
import cn from "classnames";
import OurServiceCard from "../OurServiceCard";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Icon from "../icons/colorful-icons";
import ContentSafe from "../ContentSafe";

const LeftArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
};

const RightArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
};

export default class SectionOurServices extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      activeSlide: 0,
    };
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      swipe: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      focusOnSelect: false,
      autoplay: true,
      cssEase: "linear",
      autoplaySpeed: 4000,
      afterChange: (current) =>
        this.setState({ activeSlide: current }),
    };
    return (
      <section>
        <ContentSafe className={styles.wrapper}>
          <div className={styles.decoration}>
            <StaticImage
              src="../../images/compass.jpg"
              alt="mercedes sprinter 2012"
              layout="constrained"
              objectFit="cover"
              className={styles.cardImageWrapper}
              imgClassName={styles.cardImage}
            />
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Hizmetlerimiz
              </h2>
              <div className={styles.iconWrapper}>
                <Icon.Blueprint
                  className={cn(
                    styles.makeGray,
                    this.state.activeSlide == 0 &&
                      styles.color
                  )}
                />
                <Icon.Planning
                  className={cn(
                    styles.makeGray,
                    this.state.activeSlide == 1 &&
                      styles.color
                  )}
                />
                <Icon.Toolbox
                  className={cn(
                    styles.makeGray,
                    this.state.activeSlide == 2 &&
                      styles.color
                  )}
                />
              </div>
            </div>
            <div className={styles.sectionBody}>
              <Slider
                ref={(c) => (this.slider = c)}
                {...settings}
              >
                <OurServiceCard
                  key={1}
                  title="Karavan Danışmanlığı"
                >
                  Rotasız Karavan olarak araba
                  satın alma, bütçe belirleme ve
                  karavan imalatı üzerine
                  sorularınızı sorabilirsiniz.
                </OurServiceCard>
                <OurServiceCard
                  key={2}
                  title="Tasarım ve Planlama"
                >
                  Siz hayalinizi anlatın, biz
                  sizin için somutlaştıralım.
                  İstek, ihtiyaç ve bütçenize göre
                  en uygun karavanı sizin için
                  tasarlayalım.
                </OurServiceCard>
                <OurServiceCard
                  key={3}
                  title="Karavan İmalatı"
                >
                  Hayallerinizi kendi hayaliymiş
                  gibi sahiplenen tecrübeli
                  ustalarımız ve çalışma
                  arkadaşlarımızla sizin için en
                  uygun karavanı üretelim.
                </OurServiceCard>
              </Slider>
            </div>
            <div className={styles.buttonWrapper}>
              <button onClick={this.previous}>
                <LeftArrow />
              </button>
              <div className="bg-black mx-2 h-8 w-1 my-auto rounded-full" />
              <button onClick={this.next}>
                <RightArrow />
              </button>
            </div>
          </div>
        </ContentSafe>
      </section>
    );
  }
}
