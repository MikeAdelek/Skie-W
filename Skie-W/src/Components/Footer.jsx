import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="footer__text">
        Designed and Built by{" "}
        <a href="https://github.com/MikeAdelek" target="_blank">
          Michael Adeleke
        </a>{" "}
        with React, CSS, Chart.js, GeolocationAPI, and WeatherAPI.
      </h3>
    </div>
  );
};

export default Footer;
