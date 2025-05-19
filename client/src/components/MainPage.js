"use client"

import { useState, useEffect } from "react"
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa"
import "../styles/Hero.css"
import "../styles/skills-animation.css" // Import the new animation CSS
import Danish from "../styles/Danish_Meean.jpg"
import micro from "../styles/microsoft.svg"
import aws from "../styles/aws.svg"
import informs from "../styles/informs.svg"
import salesforce from "../styles/salesforce.svg"
import ML from "../styles/MLflow.svg"
import RISK from "../styles/RISK.svg"
import { Calendar } from "lucide-react"
import tweet from "../styles/twitter.png"
import bank from "../styles/bank.png"
import dumhubby from "../styles/dumhubby.png"
import sentimental from "../styles/sentimental.png"



/**
 * @typedef {Object} ProjectCardProps
 * @property {string} title
 * @property {string} description
 * @property {string[]} technologies
 * @property {string} [date]
 */

const MainPage = () => {
  const [copySuccess, setCopySuccess] = useState(false)

  // Skill logos mapping with direct URLs
  const skillLogos = {
    // Languages
    python: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    r: "https://www.r-project.org/logo/Rlogo.svg",
    sql: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    java: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
    "c++": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    bash: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/1200px-Bash_Logo_Colored.svg.png",
    php: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png",

    // ML & AI
    tensorflow: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    keras: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1200px-Keras_logo.svg.png",
    pytorch: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg",
    "scikit-learn": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    mlflow: ML,

    // Data & Big Data
    "apache spark": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg",
    hadoop: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hadoop_logo.svg/1280px-Hadoop_logo.svg.png",
    snowflake: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg",
    mongodb: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    "sql server":
      "https://upload.wikimedia.org/wikipedia/de/thumb/8/8c/Microsoft_SQL_Server_Logo.svg/1200px-Microsoft_SQL_Server_Logo.svg.png",

    // Cloud & DevOps
    aws: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    azure: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    gcp: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png",
    "github actions": "https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg",
    kubernetes: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",

    // BI & Visualization
    tableau: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png",
    "power bi": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    "excel (adv)":
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
    matplotlib: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
    plotly: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Plotly-logo.png/1200px-Plotly-logo.png",
    "google analytics": "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg",
    figma: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",

    // Modeling & Stats
    "sas em": "https://cdn.icon-icons.com/icons2/2699/PNG/512/sas_logo_icon_170761.png",
    spss: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/SPSS_logo.svg/1200px-SPSS_logo.svg.png",
    "@risk": RISK,
    "time-series": "https://cdn-icons-png.flaticon.com/512/2784/2784487.png",
    "a/b testing": "https://cdn-icons-png.flaticon.com/512/6295/6295417.png",
  }

  // Skill Category Component
  const SkillCategory = ({ title, skills }) => {
    return (
      <div className="skill-category">
        <h3 className="category-title">{title}</h3>
        <ImprovedSkillsTrack skills={skills} />
      </div>
    )
  }

  /**
   * Project card component
   * @param {ProjectCardProps} props
   */
  const ProjectCard = ({ title, description, technologies, date }) => {
    return (
      <div className="project-card">
        <h3>{title}</h3>
        {date && (
          <div className="project-date">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        )}
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    )
  }
  
  


  const ImprovedSkillsTrack = ({ skills }) => {
    const [isHovered, setIsHovered] = useState(false)

    // the skills array to create an infinite loop effect
    const duplicatedSkills = [...skills, ...skills]

    // Determine animation speed based on hover state
    const animationSpeed = isHovered ? "paused" : "running"

    return (
      <div
        className="skills-track-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="skills-track" style={{ animationPlayState: animationSpeed }}>
          {duplicatedSkills.map((skill, index) => {
            const skillKey = skill.trim().toLowerCase()
            const imageUrl = skillLogos[skillKey] || "/placeholder.svg?height=40&width=40"

            return (
              <div key={`skill-${index}`} className="skill-item">
                <div className="skill-icon-container">
                  <img
                    src={imageUrl || "/placeholder.svg"}
                    alt={`${skill} icon`}
                    className="skill-icon"
                    width="40"
                    height="40"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=40&width=40"
                    }}
                  />
                </div>
                <span className="skill-name">{skill}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // Handle smooth scrolling for navbar links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const id = hash.replace("#", "")

        // Find the element
        const element = document.getElementById(id)

        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" })
          }, 0)
        }
      }
    }

    handleHashChange()

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const copyEmailToClipboard = (e) => {
    e.preventDefault()
    const email = "dazhar@purdue.edu"
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopySuccess(true)

        setTimeout(() => {
          setCopySuccess(false)
        }, 2000)
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err)
      })
  }

  return (
    <>
      {/* Hero Section */}
      <div className="hero-container">
        <h1 className="hero-name">Danish Azhar</h1>
        <p className="hero-title">Hi, I Turn Data into Impact</p>

        <div className="hero-roles">
          <span className="highlight">Data Scientist • AI Consultant • Product Optimizer</span>
        </div>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/danish-azhar/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/danishazhar14" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <div className="email-container" style={{ position: "relative", display: "inline-block" }}>
            <a href="#" onClick={copyEmailToClipboard} className="social-icon" title="Click to copy email">
              <FaEnvelope />
            </a>
            {copySuccess && (
              <span
                style={{
                  position: "absolute",
                  bottom: "-40px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#3a8deb",
                  color: "#001220",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  fontSize: "0.875rem",
                  whiteSpace: "nowrap",
                  zIndex: 10,
                }}
              >
                Email copied!
              </span>
            )}
          </div>
        </div>
        <div className="scroll-down">
          <span className="scroll-icon">&#8595;</span>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="section">
        {/* About section content remains unchanged */}
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <p className="tagline">
            "Engineering scalable, intelligent solutions at the intersection of data, automation, and business impact."
          </p>
          {/* Rest of About section */}
          <div className="section-content">
            <div className="about-content-container">
              <div className="about-text">
                <p>
                  Analytical professional with a strong foundation in data science, product strategy, and consulting,
                  specializing in delivering AI-driven solutions to complex business challenges. Skilled in leveraging
                  machine learning, predictive analytics, and cloud technologies to optimize operations and drive
                  strategic growth. Experienced in stakeholder engagement, building business cases, and developing data
                  products that align technical innovation with organizational goals. Adept at bridging business needs
                  with scalable technical solutions across industries including agritech, fintech, and social impact.
                </p>
              </div>
              <div className="profile-image-container">
                <img src={Danish || "/placeholder.svg"} alt="Danish Azhar" className="profile-image" />
              </div>
            </div>
            <div className="quick-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Analytical Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Industry Verticals Explored</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - unchanged */}
      <section id="education" className="section">
        {/* Education section content remains unchanged */}
        <div className="section-container">
          <h2 className="section-title">Education</h2>
          <div className="section-content">
            <div className="education-item">
              <h3>Master of Science in Business Analytics and Information Management</h3>
              <p className="institution">Purdue University, Daniels School of Business — West Lafayette, IN</p>
              <p className="duration">August 2025</p>
            </div>

            <div className="education-item">
              <h3>Bachelor of Science (Honors) in Management Science</h3>
              <p className="institution">
                Lahore University of Management Sciences, Suleman Dawood School of Business — Lahore, Pakistan
              </p>
              <p className="duration">June 2024</p>
            </div>

            <div className="education-item">
              <h3>Oxford Institute Summer Program</h3>
              <p className="institution">University of Oxford – Oxford, United Kingdom</p>
              <p className="duration">August 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - unchanged */}
      <section id="experience" className="section">
        {/* Experience section content remains unchanged */}
        <div className="section-container">
          <h2 className="section-title">Experience</h2>
          <div className="section-content">
            {/* Experience content */}
            <div className="experience-item">
              <h3>Data Science Consultant (Internship)</h3>
              <p className="company">AgReliant Genetics – Agrotechnology Firm, Westfield, IN</p>
              <p className="duration">January 2025 - Present</p>
              <ul className="responsibilities">
                <li>
                  Conducted supply chain evaluations using Python, R, and Snowflake to identify inefficiencies in
                  shipment consolidation and warehouse mapping, improving fulfillment accuracy and reducing excess
                  deliveries.
                </li>
                <li>
                  Designed KPIs in Tableau to track delivery frequency, warehouse utilization, and logistics costs,
                  enabling data-driven decision-making and better supply-sales alignment.
                </li>
                <li>
                  Built a network flow optimization model using XGBoost, Random Forest, Solver, and Python PuLP to
                  manage seasonal demand and customer-to-warehouse allocation.
                </li>
                <li>
                  Automated key workflows and integrated risk models to enhance operational efficiency and system
                  performance.
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Junior Supply Chain Analyst</h3>
              <p className="company">Tayaba Welfare International Association – Social Enterprise, Lahore, Pakistan</p>
              <p className="duration">January 2023 - April 2024</p>
              <ul className="responsibilities">
                <li>
                  Applied Apache Spark for EDA to uncover procurement patterns, improve data quality, and enable more
                  accurate aid distribution strategies.
                </li>
                <li>
                  Used SAS-EM for regression modeling and time-series forecasting to streamline flood-relief
                  distribution routes, supporting the deployment of 4,000+ H2O Wheels.
                </li>
                <li>
                  Built Excel-based stochastic optimization models to ensure consistent resource allocation for 8,000
                  wheels across varying terrains and constraints.
                </li>
                <li>
                  Worked closely with cross-functional teams to co-develop scalable solutions and maintain rigorous
                  documentation standards.
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Business Analyst</h3>
              <p className="company">DSME Global Links – Software Firm, Amsterdam, Netherlands</p>
              <p className="duration">February 2022 - December 2022</p>
              <ul className="responsibilities">
                <li>
                  Leveraged Python and LLM modeling to analyze user engagement, using Databricks and statistical
                  modeling to generate insights that led to a 12% growth increase.
                </li>
                <li>
                  Built Tableau dashboards to track KPIs for 20+ clients, integrating transaction data and agile
                  analytics to enhance decision-making.
                </li>
                <li>
                  Conducted market segmentation using SQL and Excel, delivering accurate financial insights and
                  maintaining reporting consistency on Looker Studio.
                </li>
                <li>
                  Developed scalable prototypes and contributed to cross-functional solutions aligned with product and
                  business goals.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <img src={tweet} alt="Project 1" />
          <h3>Disaster Tweets Classification</h3>
          <p>
          Social media provides real-time crisis updates, but not all disaster-related tweets are real. This project uses NLP and machine learning to classify 10,000 hand-labeled tweets as actual disasters or not.
          </p>
          <div className="project-tech">
            <span className="tech-tag">Natural Language Processing</span>
            <span className="tech-tag">Machine Learning</span>
            <span className="tech-tag">Text Classification</span>
            <span className="tech-tag">Python</span>
          </div>
          {/* <a href="#" className="project-link">
            Learn More
          </a> */}
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src={dumhubby} alt="Project 2" />
          <h3>Dunnhumby Optimization</h3>
          <p>
          This project carries out exploratory data analysis followed by AI and ML modeling to identify how manufacturers in the Cold Cereal market can optimize pricing, promotional, and marketing strategies to enhance sales performance, respond effectively to competition, and maximize profitability.
          </p>
          <div className="project-tech">
            <span className="tech-tag">AI Modeling</span>
            <span className="tech-tag">Data Analysis</span>
            <span className="tech-tag">Market Strategy</span>
            <span className="tech-tag">Pricing Optimization</span>
          </div>
          {/* <a href="#" className="project-link">
            Learn More
          </a> */}
        </div>

        {/* Proj 3 */}
        <div className="project-card">
          <img src={bank} alt="Project 3" />
          <h3>Bank Churn Prediction - Big Data and MLOps</h3>
          <p>
          The project aims to leverage binary classification and machine learning to predict customer churn — whether a customer continues using their account or closes it. The train dataset consists of 110,023 rows and 14 columns, providing key insights into customer behavior by implementing scalable data pipelines and ML workflows.
          </p>
          <div className="project-tech">
            <span className="tech-tag">Data bricks</span>
            <span className="tech-tag">PySpark</span>
            <span className="tech-tag">DataFrame API</span>
            <span className="tech-tag">Apache Spark</span>
          </div>
          {/* <a href="#" className="project-link">
            Learn More
          </a> */}
        </div>

          {/* Proj 4 */}
          <div className="project-card">
          <img src={sentimental} alt="Project 4" />
          <h3>Glassdoor Sentiment Analysis - Python</h3>
          <p>This project analyzes over 3 million Glassdoor employee reviews to identify key factors driving job satisfaction and company ratings.</p>
          <div className="project-tech">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Exploratory Data Analysis</span>
            <span className="tech-tag">Sentiment Analysis</span>
          </div>
          {/* <a href="#" className="project-link">
            Learn More
          </a> */}
        </div>

      </div>
    </section>



      {/* Skills Section */}
      <section id="skills" className="section bg-dark py-16">
        <div className="section-container">
          <h2 className="section-title">Tech Stack</h2>
          <div className="section-content">
            <div className="space-y-12">
              <SkillCategory title="Languages" skills={["Python", "R", "SQL", "Java", "C++", "Bash", "PHP"]} />

              <SkillCategory title="ML & AI" skills={["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "MLflow"]} />

              <SkillCategory
                title="Data & Big Data"
                skills={["Apache Spark", "Hadoop", "Snowflake", "MongoDB", "SQL Server"]}
              />

              <SkillCategory title="Cloud & DevOps" skills={["AWS", "Azure", "GCP", "GitHub Actions", "Kubernetes"]} />

              <SkillCategory
                title="BI & Visualization"
                skills={["Tableau", "Power BI", "Excel (Adv)", "Matplotlib", "Plotly", "Google Analytics", "Figma"]}
              />

              <SkillCategory
                title="Modeling & Stats"
                skills={["SAS EM", "SPSS", "@RISK", "Time-Series", "A/B Testing"]}
              />
            </div>
          </div>
        </div>
        <style jsx>{`
          .bg-dark {
            background-color: #0a192f;
            color: #e6f1ff;
          }
          
          .category-title {
   color: #3a8deb;
   font-size: 1.5rem;
   margin-top: 30px; padding-bottom: 0.5rem;  display: inline-block;
}
          
          .skills-track-wrapper {
            position: relative;
            overflow: hidden;
            width: 100%;
            background: rgba(10, 25, 47, 0.8);
            border-radius: 12px;
            padding: 1.5rem 0;
            box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
            border: 1px solid rgba(100, 255, 218, 0.1);
          }
          
          .skills-track {
            display: flex;
            animation: scrollSkills 30s linear infinite;
            padding: 0 1rem;
          }
          
          @keyframes scrollSkills {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .skill-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 1.5rem;
            flex-shrink: 0;
            transition: transform 0.3s ease, filter 0.3s ease;
          }
          
          .skill-item:hover {
            transform: translateY(-8px);
            filter: brightness(1.2);
          }
          
          .skill-icon-container {
            background: rgba(255, 255, 255, 0.05);
            padding: 0.75rem;
            border-radius: 12px;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 64px;
            height: 64px;
            transition: all 0.3s ease;
            border: 1px solid rgba(100, 255, 218, 0.1);
          }
          
          .skill-item:hover .skill-icon-container {
            background: rgba(100, 255, 218, 0.1);
            box-shadow: 0 0 15px rgba(100, 255, 218, 0.3);
            border-color: rgba(100, 255, 218, 0.3);
          }
          
          .skill-icon {
            max-width: 40px;
            max-height: 40px;
            object-fit: contain;
            filter: drop-shadow(0px 0px 3px rgba(100, 255, 218, 0.5));
          }
          
          .skill-name {
            font-size: 0.85rem;
            color: #ccd6f6;
            font-weight: 500;
            text-align: center;
            margin-top: 0.5rem;
            white-space: nowrap;
          }
        `}</style>
      </section>

      {/* Awards Section - unchanged */}
      <section id="awards" className="section">
        {/* Awards section content remains unchanged */}
        <div className="section-container">
          <h2 className="section-title">Awards and Honors</h2>

          <div className="section-content">
            <div className="awards-grid">
              <div className="award-item">
                <h3>Krannert Graduate Merit Scholarship Award</h3>
                <p className="award-date">2024</p>
              </div>

              <div className="award-item">
                <h3>Future Edelman Award Winner</h3>
                <p className="award-date">2024</p>
              </div>

              <div className="award-item">
                <h3>LUMS Deans Honours List</h3>
                <p className="award-date">2020-2022</p>
              </div>

              <div className="award-item">
                <h3>60% University of Oxford Merit Scholarship</h3>
                <p className="award-date">2019</p>
              </div>

              <div className="award-item">
                <h3>Roots High Achievers Award</h3>
                <p className="award-date">2018</p>
              </div>

              <div className="award-item">
                <h3>100% Roots Merit Scholarship</h3>
                <p className="award-date">2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section - unchanged */}
      <section id="certifications" className="section certifications-section">
        {/* Certifications section content remains unchanged */}
        <div className="section-container">
          <h2 className="section-title">Certifications</h2>
          <div className="section-content">
            <div className="certifications-list">
              <div className="certification-item delay-0">
                <div className="certification-item-inner">
                  <div className="certification-item-front">
                    <div className="certification-logo">
                      <img src={micro || "/placeholder.svg"} alt="Microsoft logo" width="60" height="60" />
                    </div>
                    <p className="certification-issuer">Microsoft</p>
                  </div>
                  <div className="certification-item-back">
                    <div className="certification-logo-back">
                      <img src={micro || "/placeholder.svg"} alt="Microsoft logo" width="80" height="80" />
                    </div>
                    <h3>Azure AI Fundamentals (AI-900)</h3>
                  </div>
                </div>
              </div>

              <div className="certification-item delay-1">
                <div className="certification-item-inner">
                  <div className="certification-item-front">
                    <div className="certification-logo">
                      <img src={micro || "/placeholder.svg"} alt="Microsoft logo" width="60" height="60" />
                    </div>
                    <p className="certification-issuer">Microsoft</p>
                  </div>
                  <div className="certification-item-back">
                    <div className="certification-logo-back">
                      <img src={micro || "/placeholder.svg"} alt="Microsoft logo" width="80" height="80" />
                    </div>
                    <h3>Azure Fundamentals (AZ-900)</h3>
                  </div>
                </div>
              </div>

              <div className="certification-item delay-2">
                <div className="certification-item-inner">
                  <div className="certification-item-front">
                    <div className="certification-logo">
                      <img src={salesforce || "/placeholder.svg"} alt="Salesforce logo" width="60" height="60" />
                    </div>
                    <p className="certification-issuer">Salesforce</p>
                  </div>
                  <div className="certification-item-back">
                    <div className="certification-logo-back">
                      <img src={salesforce || "/placeholder.svg"} alt="Salesforce logo" width="80" height="80" />
                    </div>
                    <h3>Tableau Desktop Specialist</h3>
                  </div>
                </div>
              </div>

              <div className="certification-item delay-3">
                <div className="certification-item-inner">
                  <div className="certification-item-front">
                    <div className="certification-logo">
                      <img src={aws || "/placeholder.svg"} alt="AWS logo" width="60" height="60" />
                    </div>
                    <p className="certification-issuer">Amazon Web Services</p>
                  </div>
                  <div className="certification-item-back">
                    <div className="certification-logo-back">
                      <img src={aws || "/placeholder.svg"} alt="AWS logo" width="80" height="80" />
                    </div>
                    <h3>AWS Cloud Practitioner</h3>
                  </div>
                </div>
              </div>

              <div className="certification-item delay-4">
                <div className="certification-item-inner">
                  <div className="certification-item-front">
                    <div className="certification-logo">
                      <img src={informs || "/placeholder.svg"} alt="INFORMS logo" width="60" height="60" />
                    </div>
                    <p className="certification-issuer">INFORMS</p>
                  </div>
                  <div className="certification-item-back">
                    <div className="certification-logo-back">
                      <img src={informs || "/placeholder.svg"} alt="INFORMS logo" width="80" height="80" />
                    </div>
                    <h3>Associate Certified Analytics Professional (aCAP®)</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section - unchanged */}
      <section id="resume" className="section">
        {/* Resume section content remains unchanged */}
        <div className="section-container">
          <h2 className="section-title">Resume</h2>
          <div className="section-content">
            <div className="resume-container">
              <p className="resume-description">
                Complete overview of my professional experience, education, and skills.
              </p>
              <a href="/Danish-Azhar_CV.pdf" className="resume-button" download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - unchanged */}
      <section id="contact" className="section">
        {/* Contact section content remains unchanged */}
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-form-side">
              <h2 className="section-title">Contact Me</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" className="form-input" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" className="form-input" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" className="form-textarea"></textarea>
                </div>

                <button type="button" className="send-button">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info-side">
              <h2 className="welcome-title">Welcome!</h2>
              <p className="welcome-text">
                Feel free to reach out to me through the form or connect with me with this info.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <FaEnvelope className="detail-icon" />
                  <span>dazhar@purdue.edu</span>
                </div>
                <div className="contact-detail-item">
                  <FaPhone className="detail-icon" />
                  <span>+1 (765) 476-6555</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainPage
