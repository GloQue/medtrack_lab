import doc1 from "../../../assets/od-1.jpg";
import doc2 from "../../../assets/od-2.jpg";
import doc3 from "../../../assets/od-3.jpg";
import doc4 from "../../../assets/od-4.jpg";
import "./doctors.css";

const Doctors = () => {
  return (
    <div className="docs-main">
      <p className="our-doctors">Our Doctors</p>
      <h3 className="doc-title">
        We have the best <span style={{ color: "#00BCD1" }}>specialists</span>{" "}
        in the area
      </h3>

      <div className="docs-div">
        <div className="doc-info">
          <img src={doc1} alt="" />
          <div className="doc-details">
            <h4>Dr.Todd Moore</h4>
            <p> Surgeon</p>
          </div>
        </div>
        <div className="doc-info">
          <img src={doc2} alt="" />
          <div className="doc-details">
            <h4>Dr.Anne Freeman</h4>
            <p> Dentist</p>
          </div>
        </div>
        <div className="doc-info">
          <img src={doc3} alt="" />
          <div className="doc-details">
            <h4>Dr.Ike Kingsley</h4>
            <p> Lab </p>
          </div>
        </div>
        <div className="doc-info">
          <img src={doc4} alt="" />
          <div className="doc-details">
            <h4>Dr.Teddy Moore</h4>
            <p> Surgeon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
