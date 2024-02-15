import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-info">
        <p>Welcome to MedCare Clinic</p>
        <h2>The best specialists of the city expect you</h2>
        <button className="btn">Make an appointment</button>
        <button className="btn outlined">Departments</button>
      </div>
    </div>
  );
};

export default Banner;
