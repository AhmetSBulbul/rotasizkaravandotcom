import React from "react";
import cn from "classnames";
import {
  reviewCard as styleCard,
  reviewCardBody as styleBody,
  reviewCardFooter as styleFooter,
} from "./index.module.css";
import BaseCard from "./BaseCard";

const ReviewCard = ({
  children,
  name,
  className,
}) => {
  return (
    <BaseCard
      className={cn([styleCard, className])}
    >
      <div className={styleBody}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="absolute top-0 left-0 w-8 h-8 dark:text-coolGray-700"
        >
          <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
          <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
        </svg>
        <p>{children}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="absolute bottom-0 right-0 w-8 h-8 dark:text-coolGray-700"
        >
          <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
          <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
        </svg>
      </div>
      <div className={styleFooter}>
        <h3>{name}</h3>
      </div>
    </BaseCard>
  );
};

export default ReviewCard;
