import "./about2.css";
import doc from "../../../assets/doc2.jpg";

const About2 = () => {
  return (
    <div className="about2-main">
      <div className="img-div">
        <img src={doc} alt="" />
      </div>
      <div className="about2-info">
        <h2 className="title">
          We carry out various <span style={{ color: "#00BCD1" }}>studies</span>{" "}
          and analysis
        </h2>

        <div className="list-group">
          <p>
            <i className="fa fa-arrow-right"></i> &nbsp; Viral infections
          </p>
          <p>
            <i className="fa fa-arrow-right"></i> &nbsp; Oncological diseases
          </p>
          <p>
            <i className="fa fa-arrow-right"></i> &nbsp; Nature and technology
          </p>
          <p>
            <i className="fa fa-arrow-right"></i> &nbsp; Labs and Pharmacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;
