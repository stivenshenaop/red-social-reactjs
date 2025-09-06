
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import LeftColumn from "./components/LeftColumn";
import MiddleColumn from "./components/MiddleColumn";
import RightColumn from "./components/RightColumn";
import Footer from "./components/Footer";

export default function SocialTemplate() {
  return (
    <div className="w3-theme-l5" style={{ minHeight: "100vh" }}>
      {/* Head assets via CDN */}
      <Helmet>
        <title>W3.CSS Template</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
        <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-blue-grey.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <style>{`html, body, h1, h2, h3, h4, h5 {font-family: "Open Sans", sans-serif}`}</style>
      </Helmet>

      <Navbar />

      {/* Page Container */}
      <div className="w3-container w3-content" style={{ maxWidth: 1400, marginTop: 80 }}>
        <div className="w3-row">
          <LeftColumn />
          <MiddleColumn />
          <RightColumn />
        </div>
      </div>

      <br />
      <Footer />
    </div>
  );
}