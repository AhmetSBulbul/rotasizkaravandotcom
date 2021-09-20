import React, { Component } from "react";
import * as styles from "./index.module.css";
import cn from "classnames";
import OurServiceCard from "../OurServiceCard";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      focusOnSelect: false,
      afterChange: (current) =>
        this.setState({ activeSlide: current }),
    };
    return (
      <div className={cn([styles.container])}>
        <div className={styles.innerContainer}>
          <div className="content-safe flex">
            <span className={styles.activeIndex}>
              {this.state.activeSlide + 1}
            </span>
          </div>
          <Slider
            ref={(c) => (this.slider = c)}
            {...settings}
          >
            <OurServiceCard
              key={1}
              title="Karavan Danışmanlığı"
              content="Rotasız Karavan olarak araba satın alma, bütçe belirleme ve karavan imalatı üzerine sorularınızı sorabilirsiniz."
            >
              <StaticImage
                src="../../images/2012-sprinter.jpg"
                alt="mercedes sprinter 2012"
                layout="constrained"
                objectFit="cover"
                className={
                  styles.cardImageWrapper
                }
                imgClassName={styles.cardImage}
              />
            </OurServiceCard>
            <OurServiceCard
              key={2}
              title="Tasarım ve Planlama"
              content="Siz hayalinizi anlatın, biz sizin için somutlaştıralım. İstek, ihtiyaç ve bütçenize göre en uygun karavanı sizin için tasarlayalım."
            >
              <StaticImage
                src="../../images/road.jpg"
                alt="mercedes sprinter 2012"
                layout="constrained"
                objectFit="cover"
                className={
                  styles.cardImageWrapper
                }
                imgClassName={styles.cardImage}
              />
            </OurServiceCard>
            <OurServiceCard
              key={3}
              title="Karavan İmalatı"
              content="Hayallerinizi kendi hayaliymiş gibi sahiplenen tecrübeli ustalarımız ve çalışma arkadaşlarımızla sizin için en uygun karavanı üretelim."
            >
              <StaticImage
                src="../../images/drive-pov.jpg"
                alt="mercedes sprinter 2012"
                layout="constrained"
                objectFit="cover"
                className={
                  styles.cardImageWrapper
                }
                imgClassName={styles.cardImage}
              />
            </OurServiceCard>
          </Slider>
          <div className="content-safe">
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
        </div>
      </div>
    );
  }
}
