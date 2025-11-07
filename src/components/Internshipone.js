import "../style/internshipone.css";
import Navbar from "../components/Navbar"
 
 
function Internship() {
  return (
    <div className="inte-body">
      <div className="main-wrapperr">
       
       <Navbar/>
 
        {/* Hero Section */}
        <div className="inte">
          <h1 className="inte-title">
            <span className="intern-highlight">INTERN</span>SHIP
          </h1>
          <p className="inte-subtitle">ACCELERATE YOUR CAREER WITH<br/> <span className="inte-highlight">NIM</span> INTERNSHIPS</p>
        </div>
      </div>
        </div>
       );
}
export default Internship;
 