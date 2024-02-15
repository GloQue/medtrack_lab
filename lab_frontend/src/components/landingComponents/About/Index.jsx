import "./about.css";
import doc from "../../../assets/doc.png";

const About = () => {
  return (
    <div className="about-main">
      <div className="about-info">
        <p className="about-us">About Us</p>
        <h2 className="title">
          Clinic with <span style={{ color: "#00BCD1" }}>innovative</span>{" "}
          approach to treatment
        </h2>
        <p className="sub-title">
          We provide the a wide range of medical services, so every person could
          have the opportunity to receive qualitative medical help
        </p>

        <div className="list-group">
          <p>
            <i className="fa fa-check" aria-hidden="true"></i> &nbsp; Adult and
            Children&apos;s Trauma Center
          </p>
          <p>
            <i className="fa fa-check" aria-hidden="true"></i>&nbsp; Birthing
            and Lactation Classes
          </p>

          <p>
            <i className="fa fa-check" aria-hidden="true"></i> &nbsp;Dental and
            Oral Surgery
          </p>

          <p>
            <i className="fa fa-check" aria-hidden="true"></i> &nbsp;Heart and
            Vascular Institute
          </p>

          <p>
            <i className="fa fa-check" aria-hidden="true"></i>
            &nbsp;Interventional Cardiology
          </p>

          <p>
            <i className="fa fa-check" aria-hidden="true"></i>&nbsp;Ear, Nose
            and Throat (ENT)
          </p>

          <p>
            <i className="fa fa-check" aria-hidden="true"></i>&nbsp;Cardiac
            Support Groups
          </p>

          <p>
            <i className="fa fa-check" aria-hidden="true"></i> &nbsp;Pediatric
            Emergency Care
          </p>

          <button className="btn">Read More</button>
        </div>
      </div>

      <div className="img">
        <img src={doc} alt="" />
      </div>
    </div>
  );
};

export default About;
