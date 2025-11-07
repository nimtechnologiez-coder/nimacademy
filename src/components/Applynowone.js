import "../style/Applynowone.css";
import Navbar from "../components/Navbar"
 
function Applynow() {
  return (
    <div className="apply-body">
      <div className="main-wrapperr">
     <Navbar/>
        {/* Hero Section */}
        <div className="apply">
          <h1 className="apply-title">
            <span className="apply-highlight">APPLY</span> NOW
          </h1>
          <p className="apply-subtitle">JOIN, LEARN, GROW, ACHIEVE</p>
        </div>
      </div>
      </div>
       );
}
 
export default Applynow;
 