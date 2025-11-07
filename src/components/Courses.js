import Navbar from "../components/Navbar";
import "../style/Course.css";
// import Footer from "./footer";
// import CustomCursor from "./cursor";
import { useNavigate } from "react-router-dom"; 
import datasciintern from "../images/datasciintern.jpg"
import dataanalyst from "../images/dataanalintern.jpg"
import python from "../images/pyback.jpg"
import aiintern from "../images/aiintern.jpg"
import digitalmarket from "../images/dmintern.jpg"
import java from "../images/javaintern.jpg"
import uiux from "../images/uiuxintern.jpg"
import awsintern from "../images/awsintern.jpg"
import iot from "../images/iotintern.jpg"
import mern from "../images/mernintern.jpg"

function ClassroomToBoardroom() {
  return (
    <div className="ctb-main">
      <div className="ctb-title">
        <span className="ctb-green">FROM </span>
        <span className="ctb-blue">CLASSROOM</span>
      </div>
      <div className="ctb-title">
        <span className="ctb-blue">TO </span>
        <span className="ctb-green">BOARDROOM</span>
      </div>
      <a href="/apply" className="ctb-btn">
  Join Now
</a>

    </div>
  );
}

const PythonCourse = () => {
  const navigate = useNavigate();
  return (
    <>
       
       {/* Datasci */}
       <div className="internship-container">
        <img
          src={datasciintern}
          alt="Internship Background"
          className="background-image"
        />
        <div className="blur-card">
          <h1>
            <span className="blue">DATA</span>
            <span className="green"> SCIENCE</span>
          </h1>

          {/* Button Group (Vertical Alignment) */}
          <div className="button-group-vertical">
            <button>4.5 - Months</button>
            
            <button>Real Time Projects</button>
          </div>
        </div>
      </div>

      <p className="pfs-description">
Unlock the power of data with our Data Science Program, designed to help you master the tools and techniques used by data professionals. This course blends theory with practical learning — from Python programming and data visualization to machine learning and deep learning fundamentals. By the end of the program, you’ll be equipped to analyze data, build predictive models, and turn raw information into valuable insights for real-world applications.      </p>

      <h3 className="pfs-header">
        What You'll <span className="pfs-header-green">Learn</span>
      </h3>

      <div className="pfs-list">
        <div>Module 1: Programming – Python, NumPy, Pandas, Matplotlib</div>
        <div>Module 2: Data Visualization – Power BI, Seaborn, Tableau</div>
        <div>Module 3: Statistics & Analytics – Descriptive & Inferential Statistics, Probability</div>
        <div>Module 4: Machine Learning – Regression, Classification, Clustering, Model Evaluation</div>
        <div>Module 5: Data Preprocessing – Data Cleaning, Feature Engineering, Data Transformation</div>
        <div>Module 6: Deep Learning – Neural Networks, TensorFlow, Keras</div>
        <div>Module 7: Database Management – SQL, MongoDB</div>
        <div>Module 8: Version Control – Git & GitHub</div>
        <div>Module 9: Project Implementation – Real-world data analysis and predictive modeling</div>
        
      </div>

     <div className="pfs-center">
  <a href="/apply" className="pfs-btn">
    Apply Now
  </a>
</div>


      {/* Dataanalyst */}
       <div className="internship-container">
        <img
          src={dataanalyst}
          alt="Internship Background"
          className="background-image"
        />
        <div className="blur-card">
          <h1>
            <span className="blue">DATA</span>
            <span className="green"> ANALYST</span>
          </h1>

          {/* Button Group (Vertical Alignment) */}
          <div className="button-group-vertical">
            <button>3 - Months</button>
            
            <button>Real Time Projects</button>
          </div>
        </div>
      </div>

      <p className="pfs-description">
The Data Analyst Training Institute at Nim Academy helps you gain practical skills in data collection, analysis, and visualization.
Learn tools like Excel, Python, SQL, and Power BI through real-world projects and case studies.
Start your journey to Learn Data Analytics in Nagercoil and build a successful Career in Data Analytics with our Advanced Data Analytics Training at Nim Academy.</p>

      <h3 className="pfs-header">
        What You'll <span className="pfs-header-green">Learn</span>
      </h3>

      <div className="pfs-list">
        <div>Module 1: Introduction to Data Analysis – Overview of data analytics, roles, and tools used in the industry.</div>
        <div>Module 2: Excel for Data Analysis – Data cleaning, formulas, pivot tables, and visualization in Excel.</div>
        <div>Module 3: Programming for Analysis – Python, Pandas, NumPy for data manipulation and analysis.</div>
        <div>Module 4: Data Visualization – Create dashboards and reports using Power BI, Tableau, and Matplotlib.</div>
        <div>Module 5: SQL for Data Handling – Querying, filtering, joining, and managing data in MySQL / PostgreSQL.</div>
        <div>Module 6: Statistics for Data Analysis – Learn descriptive statistics, probability, correlation, and hypothesis testing.</div>
        <div>Module 7: Business Intelligence Tools – Use BI tools to convert data into actionable insights.</div>
        <div>Module 8: Reporting & Presentation – Building interactive reports and data stories for decision-making.</div>
        <div>Module 9: Capstone Project – Analyze real-world datasets and present insights through a final project.</div>
      </div>

      <div className="pfs-center">
  <a href="/apply" className="pfs-btn">
    Apply Now
  </a>
</div>


{/* python */}
      <div className="internship-container">
        <img
          src={python}
          alt="Internship Background"
          className="background-image"
        />
        <div className="blur-card">
          <h1>
            <span className="blue">PYTHON</span>
            <span className="green"> FULL STACK</span>
          </h1>

          {/* Button Group (Vertical Alignment) */}
          <div className="button-group-vertical">
            <button>4.5 - Months</button>
            <button>Full Stack Development</button>
            <button>Real Time Projects</button>
          </div>
        </div>
      </div>

      <p className="pfs-description">
      Join the Best Python Training Institute in Nagercoil to Master Python for beginners and advance your skills in Django, HTML, CSS, JavaScript, and SQL.
      At Nim Academy, you’ll learn Python programming through hands-on projects and become a job-ready full-stack developer.
      </p>

      <h3 className="pfs-header">
        What You'll <span className="pfs-header-green">Learn</span>
      </h3>

      <div className="pfs-list">
        <div>Frontend Development: HTML5, CSS3, JavaScript, React (optional)</div>
        <div>Backend Development: Python, Django Framework</div>
        <div>Database Management: MySQL / PostgreSQL</div>
        <div>API Integration: RESTful APIs and JSON</div>
        <div>Version Control: Git &amp; GitHub</div>
        <div>Deployment: Hosting applications on cloud platforms</div>
      </div>

       <div className="pfs-center">
  <a href="/apply" className="pfs-btn">
    Apply Now
  </a>
</div>

{/* AI */}
      <div className="internship-container">
        <img
          src={aiintern}
          alt="Internship Background"
          className="background-image"
        />
        <div className="blur-card">
          <h1>
            <span className="blue">AI</span>
            <span className="green"> PROGRAMS</span>
          </h1>

          {/* Button Group (Vertical Alignment) */}
          <div className="button-group-vertical">
            <button>1 - Month</button>
            <button>Machine Learning</button>
            <button>Real Time Projects</button>
          </div>
        </div>
      </div>

      <p className="pfs-description">
        The 1-Month AI Program at Nim Academy is a fast-track training designed to give you a strong foundation in Artificial Intelligence and Machine Learning. Through practical, project-based learning, you’ll explore how AI models are built, trained, and deployed using real-world tools and techniques.
      </p>

      <h3 className="pfs-header">
        What You'll <span className="pfs-header-green">Learn</span>
      </h3>

      <div className="pfs-list">
        <div>Introduction to AI & Machine Learning Concepts</div>
        <div>Python for AI – Data handling, libraries (NumPy, Pandas)</div>
        <div>Supervised & Unsupervised Learning</div>
        <div>Basics of Neural Networks and Deep Learning</div>
        <div>Mini Project: Build & Deploy a Simple AI Model</div>
        
      </div>

      <div className="pfs-center">
        <button
            className="pfs-btn"
            onClick={() => navigate('/apply')}
          >
            Apply Now
          </button>
      </div>

      {/* dm */}
<div className="internship-container">
        <img
          src={digitalmarket}
          alt="Internship Background"
          className="background-image"
        />
        <div className="blur-card">
          <h1>
            <span className="blue">DIGITAL</span>
            <span className="green"> MARKETING</span>
          </h1>

          {/* Button Group (Vertical Alignment) */}
          <div className="button-group-vertical">
            <button>3 - Months</button>
            <button>SEO & AD Campaign</button>
            <button>Real Time Analysis</button>
          </div>
        </div>
      </div>

      <p className="pfs-description">
Join the digital marketing course in Nagercoil at Nim Academy to master SEO, social media, and online marketing strategies.
This practical digital marketing course helps you plan, execute, and optimize campaigns — preparing you for real-world projects and SEO services careers.  </p>

      <h3 className="pfs-header">
        What You'll <span className="pfs-header-green">Learn</span>
      </h3>

      <div className="pfs-list">
        <div>Module 1: Fundamentals of Digital Marketing – Strategy, branding & audience targeting</div>
        <div>Module 2: SEO (Search Engine Optimization) – On-page, off-page, and technical SEO</div>
        <div>Module 3: Social Media Marketing (SMM) – Facebook, Instagram, LinkedIn, YouTube</div>
        <div>Module 4: Google Ads & PPC Campaigns – Setup, optimization, and performance tracking</div>
        <div>Module 5: Email & Content Marketing – Content strategy, automation, and lead nurturing</div>
        <div>Module 6: Web Analytics & Reporting – Google Analytics, KPIs, and ROI tracking</div>
        <div>Capstone Project: Run and analyze a complete live marketing campaign</div>
      </div>

       <div className="pfs-center">
  <a href="/apply" className="pfs-btn">
    Apply Now
  </a>
</div>

{/* java */}

<div className="internship-container">
        <img
          src={java}
          alt="Internship Background"
          className="background-image"
        />
        <div className="blur-card">
          <h1>
            <span className="blue">JAVA</span>
            <span className="green"> FULL STACK</span>
          </h1>

          {/* Button Group (Vertical Alignment) */}
          <div className="button-group-vertical">
            <button>4 - Months</button>
            <button>Full Stack Development</button>
            <button>Real Time Projects</button>
          </div>
        </div>
      </div>

      <p className="pfs-description">
        Join Nim Academy’s Java training in Nagercoil to become a skilled full-stack developer.
        Our Java full course helps you master both frontend and backend development using industry-standard tools and frameworks.
        Perfect for beginners and professionals seeking Java certification and real-world project experience.
      </p>
      <h3 className="pfs-header">
        What You'll <span className="pfs-header-green">Learn</span>
      </h3>

      <div className="pfs-list">
        <div>Module 1:  Frontend Development - HTML5, CSS3, JavaScript, Bootstrap, React / Angular.</div>
        <div>Module 2: Advanced Java - OOPs, Collections, Exception Handling, Multithreading.</div>
        <div>Module 3: Backend Development -Spring, Spring Boot, Hibernate, RESTful APIs.</div>
        <div>Module 4: Database Management MySQL / PostgreSQL — CRUD operations, joins, indexing</div>
        <div>Module 5: Version Control & Deployment Git, GitHub, Maven, Jenkins.</div>
        <div>Project: Develop and deploy a complete full-stack web application</div>
      </div>

        <div className="pfs-center">
  <a href="/apply" className="pfs-btn">
    Apply Now
  </a>
</div>

      {/* uiux */}

      <div className="internship-container">
        <img
          src={uiux}
          alt="Internship Background"
          className="background-image"
        />
        <div className="blur-card">
          <h1>
            <span className="blue">UI/UX</span>
            <span className="green"> DESIGNING</span>
          </h1>

          {/* Button Group (Vertical Alignment) */}
          <div className="button-group-vertical">
            <button>4 - Months</button>
            <button>Full Stack Development</button>
            <button>Real Time Projects</button>
          </div>
        </div>
      </div>

      <p className="pfs-description">
       The graphic design course in Nagercoil at Nim Academy helps you master UI and UX principles to create engaging, user-centered designs.
       Learn graphic designing for beginners and develop learning basic graphic design skills to craft stunning web and mobile interfaces that captivate users.
      </p>

      <h3 className="pfs-header">
        What You'll <span className="pfs-header-green">Learn</span>
      </h3>

      <div className="pfs-list">
        <div>Module 1: Design Fundamentals – Color theory, typography, layout, and visual hierarchy</div>
        <div>Module 2: UX Research & Analysis – User personas, wireframes, and journey mapping Backend Development</div>
        <div>Module 3: UI Design & Prototyping – Tools like Figma, Adobe XD, and Sketch</div>
        <div>Module 4: Interaction & Usability – Micro-interactions, accessibility, and responsive design</div>
        <div>Module 5: Design Handoff & Collaboration – Working with developers, versioning, and real-world project workflow.</div>
        <div>Project: Design a complete web or mobile application with end-to-end UI/UX</div>
      </div>

    <div className="pfs-center">
  <a href="/apply" className="pfs-btn">
    Apply Now
  </a>
</div>

      {/* aws */}

      <div className="internship-container">
        <img
          src={awsintern}
          alt="Internship Background"
          className="background-image"
        />
        <div className="blur-card">
          <h1>
            <span className="blue">AWS</span>
            <span className="green"> DEVOPS</span>
          </h1>

          {/* Button Group (Vertical Alignment) */}
          <div className="button-group-vertical">
            <button>3 - Months</button>
  
            <button>Real Time Projects</button>
          </div>
        </div>
      </div>

      <p className="pfs-description">
        Join Nim Academy’s DevOps training in Nagercoil to master cloud deployment and automation using AWS.
        This AWS DevOps for beginners course covers CI/CD pipelines, Infrastructure as Code (IaC), and cloud monitoring — preparing you for the AWS certification course in Nagercoil and a successful DevOps career.</p>

      <h3 className="pfs-header">
        What You'll <span className="pfs-header-green">Learn</span>
      </h3>

      <div className="pfs-list">
        <div>Module 1: DevOps Basics – Learn DevOps principles, CI/CD, and automation concepts.</div>
        <div>Module 2: AWS Fundamentals – Explore core AWS services, IAM, and cloud setup.</div>
        <div>Module 3: Version Control – Manage projects using Git, GitHub, and CodeCommit.</div>
        <div>Module 4: CI/CD Pipeline – Build automation pipelines with CodeBuild, CodeDeploy, and CodePipeline.</div>
        <div>Module 5: Infrastructure as Code – Manage infrastructure using CloudFormation and Terraform.</div>
        <div>Module 6: Containerization – Deploy Docker containers with ECS and ECR.</div>
        <div>Module 7: Monitoring & Security – Monitor and secure applications with CloudWatch, IAM, and KMS.</div>
        <div>Project – Create a complete CI/CD pipeline and deploy real-world applications.</div>
      </div>

   <div className="pfs-center">
  <a href="/apply" className="pfs-btn">
    Apply Now
  </a>
</div>

{/* IOT*/}

      <div className="internship-container">
        <img
          src={iot}
          alt="Internship Background"
          className="background-image"
        />
        <div className="blur-card">
          <h1>
            <span className="green"> INTERNET</span>
            <span className="blue"> OF</span>
            <span className="green"> THINGS</span>
          </h1>

          {/* Button Group (Vertical Alignment) */}
          <div className="button-group-vertical">
            <button>3 - Months</button>
  
            <button>Real Time Projects</button>
          </div>
        </div>
      </div>

      <p className="pfs-description">
The Internet of Things (IoT) Program introduces learners to the world of connected devices and smart technologies. This course blends hardware, software, and cloud integration to help students design, build, and deploy IoT-based solutions. Through hands-on projects, participants will learn to connect sensors, collect data, and automate systems that power modern innovations.
    </p>  <h3 className="pfs-header">
        What You'll <span className="pfs-header-green">Learn</span>
      </h3>

      <div className="pfs-list">
        <div>Module 1: Introduction to IoT – Overview of IoT concepts, architecture, and real-world applications.</div>
        <div>Module 2: Hardware Components – Working with Arduino, Raspberry Pi, sensors, and actuators.</div>
        <div>Module 3: Networking & Communication – IoT communication protocols: MQTT, HTTP, Bluetooth, Wi-Fi.</div>
        <div>Module 4: Data Collection & Processing – Interfacing sensors, collecting and analyzing real-time data.</div>
        <div>Module 5: Cloud Integration – Connecting IoT devices to AWS IoT Core, Google Cloud, or Azure IoT Hub.</div>
        <div>Module 6: IoT Security – Understanding data privacy, encryption, and device authentication.</div>
        <div>Module 7: Automation & Control – Building smart systems with real-time monitoring and alerts.</div>
        <div>Module 8: Project Implementation – Developing a complete IoT project integrating hardware, software, and cloud.</div>
      </div>
   <div className="pfs-center">
  <a href="/apply" className="pfs-btn">
    Apply Now
  </a>
</div>

{/* mern*/}

      <div className="internship-container">
        <img
          src={mern}
          alt="Internship Background"
          className="background-image"
        />
        <div className="blur-card">
          <h1>
            
            <span className="blue"> MERN</span>
            <span className="green"> STACK</span>
          </h1>

          {/* Button Group (Vertical Alignment) */}
          <div className="button-group-vertical">
            <button>3 - Months</button>
  
            <button>Real Time Projects</button>
          </div>
        </div>
      </div>

      <p className="pfs-description">
Join the Best MERN Stack Training Centre in Nagercoil to master full-stack web development using MongoDB, Express.js, React, and Node.js.
This MERN Stack training program offers hands-on projects in front-end, back-end, and API integration — helping you build powerful, scalable applications with the best MERN stack course in Nagercoil.   </p>  <h3 className="pfs-header">
        What You'll <span className="pfs-header-green">Learn</span>
      </h3>

      <div className="pfs-list">
        <div>Module 1: Web Development Basics – Introduction to HTML5, CSS3, JavaScript, and responsive design principles.</div>
        <div>Module 2: Frontend Development – Building dynamic user interfaces using React and modern UI components.</div>
        <div>Module 3: Backend Development – Server-side programming with Node.js and Express.js.</div>
        <div>Module 4: Database Management – Storing and managing data using MongoDB and Mongoose.</div>
        <div>Module 5: API Development & Integration – Creating and consuming RESTful APIs using JSON.</div>
        <div>Module 6: Authentication & Security – Implementing JWT authentication, sessions, and security best practices.</div>
        <div>Module 7: Deployment & Hosting – Deploying applications on cloud platforms like AWS, Vercel, or Render.</div>
        <div>Module 8: Project Implementation – Developing a complete full-stack web application as a capstone project.</div>
      </div>

     <div className="pfs-center">
  <a href="/apply" className="pfs-btn">
    Apply Now
  </a>
</div>


    </>
  );
};

function Courses() {
  return (
    <div className="course-body">
      <div className="main-wrapperr">
        <Navbar/>
        <div className="course">
          <h1 className="course-title">
            <span className="course-highlight">OUR</span> COURSES
          </h1>
          <p className="course-subtitle">
            BEST COURSES ARE WAITING TO <br /> ENRICH YOUR SKILLS
          </p>
        </div>
      </div>
       
      <PythonCourse />
      <ClassroomToBoardroom/>
      {/* <Footer /> */}
      {/* <CustomCursor/> */}
    </div>
  );
}

export default Courses;