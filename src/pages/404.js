import * as React from "react";
import { Link } from "gatsby";
import { BlogFigure } from "../components/figures";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily:
    "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <>
      <div className="pageLead">
        <BlogFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>Üzgünüz Böyle Bir Sayfa Yok</h1>
        </div>
      </div>

      <br />
      {process.env.NODE_ENV === "development" ? (
        <>
          <br />
          Try creating a page in{" "}
          <code style={codeStyles}>
            src/pages/
          </code>
          .
          <br />
        </>
      ) : null}
    </>
  );
};

export default NotFoundPage;
