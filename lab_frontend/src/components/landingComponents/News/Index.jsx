import blog1 from "../../../assets/blog-1.jpg";
import blog2 from "../../../assets/blog-2.jpg";
import blog3 from "../../../assets/blog-3.jpg";

import "./news.css";

const News = () => {
  return (
    <div className="docs-main">
      <p className="our-doctors">Latest News</p>
      <h3 className="doc-title">
        <span style={{ color: "#00BCD1" }}>News</span> and healthcare tips
      </h3>

      <div className="docs-div">
        <div className="doc-info">
          <img src={blog1} alt="" />
          <div className="doc-details">
            <h4>Aspirin for prevention</h4>
            <p>
              {" "}
              In this installment of “Aspirin for prevention,”
              physician-researcher Randall Stafford provides tips to calculate
              the risk of heart…
            </p>
          </div>
        </div>
        <div className="doc-info">
          <img src={blog2} alt="" />
          <div className="doc-details">
            <h4>New operating suites</h4>
            <p>
              {" "}
              With the opening of the new hospital and the Children’s surgical
              and imaging centers, MedCare will be redesigning…
            </p>
          </div>
        </div>
        <div className="doc-info">
          <img src={blog3} alt="" />
          <div className="doc-details">
            <h4>Epidurals increase in popularity</h4>
            <p>
              {" "}
              The percentage of pregnant women getting epidurals or other spinal
              analgesia has climbed to a high of 71…{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
