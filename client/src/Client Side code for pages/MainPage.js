import React, { useEffect, useState } from 'react';
import '../styles/login.css';
import ProfilePic from '../styles/MyImage.jpg';
import Ride_Booking from '../styles/Ride-Booking.png';
import Task_Scheduler from '../styles/AI-Task_Scheduler.png';
import AnimatedSkills from "./skills.animation";
import manzil from '../styles/Manzil.png';
import SnackOutLogo from "../styles/snack-out.svg"
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'; // Example import, adjust based on your library


const MainPage = () => {
    const [typedName, setTypedName] = useState('');
    const fullName = "   I'M     MEHDI";

    const phrases = [
        ' ',
        'A Software Engineer               ',
        ' ',
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [typedPhrase, setTypedPhrase] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
    const [charIndex, setCharIndex] = useState(0);
    const [hasScrolledToProjects, setHasScrolledToProjects] = useState(false)
    const [activeTab, setActiveTab] = useState("data-science")


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        // Send data to the backend
        fetch('https://portfolio-website-ruby-one.vercel.app/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
            setFormData({ name: '', email: '', message: '' }); // Reset the form
            alert('Message sent successfully!'); // Show a success message
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Failed to send message. Please try again later.'); // Show an error message
        });
    };



    // Typing effect for full name
    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < fullName.length) {
                setTypedName((prev) => prev + fullName.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100); 

        return () => clearInterval(typingInterval);
    }, []); 

    // Typing effect for phrases
    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (isDeleting) {
                setTypedPhrase((prev) => prev.slice(0, -1));
                if (typedPhrase.length === 0) {
                    setIsDeleting(false);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                }
            } else {
                if (charIndex < currentPhrase.length) {
                    setTypedPhrase((prev) => currentPhrase.slice(0, charIndex + 1));
                    setCharIndex((prev) => prev + 1);
                } else {
                    setIsDeleting(true);
                    setTimeout(() => {
                        setCharIndex(0);
                    }, 20000);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearInterval(typingInterval);
    }, [isDeleting, currentPhrase, charIndex, typedPhrase, phrases.length]);


    // Manage currentPhrase and resetting logic
    useEffect(() => {
        if (!isDeleting) {
            setCurrentPhrase(phrases[phraseIndex]);
            setTypedPhrase('');
            setCharIndex(0);
        }
    }, [phraseIndex]);


    // Detect scrolling to the projects section
    useEffect(() => {
        const handleScroll = () => {
            const projectsSection = document.getElementById('projects');
            const sectionPosition = projectsSection.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            // Check if the section is in view and the animation hasn't run before
            if (sectionPosition < screenHeight && !hasScrolledToProjects) {
                setHasScrolledToProjects(true); // Trigger the animation
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasScrolledToProjects]);

    return (
        <>
            <div className="header-about-container">
                <header>
                    <h1>{typedName}</h1>
                    <nav>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>

                <section id="about" className="about-section">

                    <div className="profile-pic-container">
                        <img src={ProfilePic} alt="My Profile" className="profile-pic" />
                    </div>
                    <br /><br />

                    <div className="about-section" style={{ textAlign: 'center', color: 'white', fontWeight: 'normal' }}>
                        <p>
                            <span style={{ fontSize: '1.2em', color: 'white', fontWeight: 'bold' }}>Hi,</span> My name is{' '}
                            <span style={{ fontSize: '1.2em', color: 'white', fontWeight: 'bold' }}>Muhammad Mehdi Changezi,</span> and I am{' '}
                            <span style={{ color: '#00bccde5', fontSize: '1.8em', fontWeight: 'bold' }}>{typedPhrase}</span>.
                        </p>

                        <div className="about-card">
                            <p>
                                I’m a <span className="highlighted">final-year Computer Science</span> student at <span className="highlighted">LUMS</span>, currently working as a part-time <span className="highlighted">Software Engineer at SnackOut Technologies</span>. I have expertise in <span className="highlighted">Mobile Application</span> and <span className="highlighted">Web App Development</span>, working with frameworks like <span className="highlighted">MERN</span> and <span className="highlighted">React Native</span>. Currently, as a full-stack engineer, I am focusing on enhancing the <span className="highlighted">Snackout Partner web app and Admin web app</span>, making its user experience more seamless. The frontend is built with <span className="highlighted">React</span>, and the backend is developed using <span className="highlighted">Express and NodeJs</span>. Apart from this I have always been actively doing projects and learning different tools like, <span className='highlighted'>Prisma ORM, AWS, Postgre-SQL, Non-SQL, Github Version Controls, Socket.io Programming, 3rd party API integration,</span> and <span className='highlighted'>KAFKA</span> etc. 
                            </p>

                        </div>
                    </div>

                    <div className="social-icons">
                        <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BOh%2BO5auqRNGxH6rSGPAkWA%3D%3D" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin" />
                        </a>
                        <a href="https://github.com/Muhammad-Mehdi-Changazi" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <a href="https://1drv.ms/b/c/3100f52f0c98a0b6/EUR9754mBiVFtKitlVjOBRoBUm8wcYWrEZJFQb4dtr90RA?e=0YOQH0" download="Muhammad_Mehdi_CV" class="btn-download-cv">Download CV</a>
                    </div>
                </section>
            </div>

{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
           
      <section id="projects" className="projects-section">
            <div className={`container ${hasScrolledToProjects ? 'slide-in' : ''}`}>
                <h2 style={{ fontWeight: 'bold', color: '#00bccde5', fontSize: '2.5em', textAlign: 'center' }}>
                PROJECTS
                </h2>

                  <Tabs defaultValue="Manzil" style={{ marginTop: '40px' }}>
                    <TabsList className="tab-buttons-container">
                        <TabsTrigger value="Manzil" className="tab-button">
                        Journi-Sphere
                        </TabsTrigger>
                        <TabsTrigger value="ridebooking" className="tab-button">
                        Ride Booking
                        </TabsTrigger>
                        <TabsTrigger value="taskscheduling" className="tab-button">
                        Task Scheduling
                        </TabsTrigger>
                        <TabsTrigger value="datascience" className="tab-button">
                        Data Science
                        </TabsTrigger>
                        <TabsTrigger value="lumsync" className="tab-button">
                        LUMSync App
                        </TabsTrigger>
                    </TabsList>

                {/* Data Science Project */}
                <TabsContent value="datascience">
                    <div className="project-card" style={{ marginTop: '20px' }}>
                    <div className="text-section">
                        <h3>LUMS Students Study-Life balance Project</h3>
                        <h1>Overview</h1>
                        <p>
                        In this project, we aimed to predict how a new incoming student at LUMS can better manage their study-life balance by using a data-driven approach. The model was designed to analyze various factors affecting students' academic life, personal life, and their ability to balance these domains effectively. We collected data from a diverse set of LUMS students across different batches through Google Forms and in-depth interviews. The goal was to leverage this data to create an accurate predictive model that could help incoming students optimize their study-life balance, making their academic journey more manageable and productive.
                        </p>

                        <h1>Data Collection</h1>
                        <p>
                           To gather comprehensive data on study-life balance, we conducted a detailed survey through Google Forms, which was distributed to students across various batches. The survey included questions on study habits, extracurricular activities, time management practices, stress levels, social interactions, and other factors influencing academic life. In addition to the survey, we carried out interviews with a subset of students to gain qualitative insights. These interviews provided a deeper understanding of students' personal experiences, challenges, and strategies for managing their time and mental health, offering valuable context that complemented the survey data. This combined approach allowed us to gather both quantitative and qualitative information to better predict and understand study-life balance among LUMS students.
                        </p>

                        <h1>Data cleaning, Analysis, and Model building</h1>
                        <p>The collected data required extensive preprocessing and cleaning to ensure its suitability for model training. Missing values were addressed by filling them with the median or mean, or removing records with excessive missing data. Responses from interviews were transformed into numerical ratings, and outliers were identified and either removed or adjusted to avoid skewing the model. To standardize the data, we normalized numerical variables like study time, sleep hours, and social activities. We then performed exploratory data analysis (EDA) using Matplotlib and Seaborn, which included creating a correlation heatmap to identify significant relationships, histograms and box plots to examine variable distributions, and scatter plots to explore potential impacts on study-life balance. For model building, we chose linear regression due to its simplicity and interpretability, selecting features such as study time, social interaction, physical activity, sleep, and stress levels. The dataset was split into training and testing sets, and the model was trained using k-fold cross-validation to ensure accuracy. The model’s performance was evaluated with metrics like Mean Squared Error (MSE) and R-squared, showing a high degree of accuracy in predicting study-life balance outcomes.</p>
                        <h1>Results</h1>
                        <p>The linear regression model provided valuable insights into the factors influencing a student's ability to maintain a healthy study-life balance. Key findings included that students who allocated structured time for both study and recreation achieved better balance, emphasizing the importance of time management. Additionally, insufficient sleep and high stress were strongly correlated with poor balance, while those with adequate sleep and lower stress levels fared better. Participation in extracurricular activities like sports or clubs also positively contributed to well-being, highlighting the benefits of a holistic approach to university life. Lastly, social interactions and maintaining relationships outside academics helped students feel more relaxed and focused, further enhancing their study-life balance.</p>
                        
                        <ul style={{ paddingLeft: '20px', margin: '20px 0' }}>
                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Data Gathering (Google Forms, Interviews, Live Questions)</li>
                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Data Cleaning </li>
                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Data Manipulation (Histograms, heatmaps, Box plots, scatter plots, MatPlot and Seaborn Libraries) </li>
                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Linear Regression (Study Time, social interaction, physical Activity)</li>
                        </ul>
                    </div>
                    </div>
                </TabsContent>

                {/* Manzil*/}
                <TabsContent value="Manzil">
                    <div className="project-card" style={{ marginTop: '20px' }}>
                    <div className="text-section">
                        <h3>Journi-Sphere </h3>
                        <p>
                        JourniSphere is an innovative tourism platform that empowers users to plan, organize, and book their trips through a user-friendly mobile app. It offers curated travel options, real-time information, personalized AI-based trip planning, and secure booking—all in one seamless experience.
                        </p>
                        <ul style={{ paddingLeft: '20px', margin: '20px 0' }}>

                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Discover and Explore: Access curated lists of tourist spots, restaurants, hotels, and car rental services with real-time information, user reviews, AI-generated place descriptions, and integrated navigation support.</li>
                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Personalized Trip Planning: Use the AI-powered trip planner to create fully customized travel itineraries based on your preferences, budget, and schedule—complete with suggested hotels, rental options, and instant contact details.</li>
                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Seamless Booking and Payments: Book hotels and car rentals directly through the app with a secure payment system, confirming your entire trip easily and safely within minutes.</li>
                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Web panel for the Hotels and Car rentals: The Software also has two website for hotels and car rentals to manage their inventory and update the reservations and update timely.</li>
                        </ul>
                    </div>
                    <div className="image-section">
                        <img src={manzil} alt="Ride Booking Project Snapshot" className="project-image" />
                    </div>
                    </div>
                </TabsContent>


                {/* Ride Booking Project */}
                <TabsContent value="ridebooking">
                    <div className="project-card" style={{ marginTop: '20px' }}>
                    <div className="text-section">
                        <h3>Ride Booking Web Application</h3>
                        <p>
                        Created a web application featuring ride booking by allowing users to request and schedule rides seamlessly. Integrated Car rent companies to receive reservation requests. The Software had two panels, one for the users and one for the Car rentals, where the both end customers could interact. The software also had chat and real time ride tracking features to interact and track the rider in real time. Also Used firebase notifications to notify the users about their ride status and the car rent companies about the ride requests. The software was built using MERN stack, with a focus on user experience and real-time communication.
                        </p>
                        <ul style={{ paddingLeft: '20px', margin: '20px 0' }}>

                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Used Socket.io for real time communication and firebase notification system to notify the users.</li>
                                                <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Companies near the User's location are prioritized to receive the request initially.</li>
                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Integrated third party APIs for real time location update and tracking.</li>
                        </ul>
                    </div>
                    <div className="image-section">
                        <img src={Ride_Booking} alt="Ride Booking Project Snapshot" className="project-image" />
                    </div>
                    </div>
                </TabsContent>

                {/* AI-Based Task Scheduling Project */}
                <TabsContent value="taskscheduling">
                    <div className="project-card" style={{ marginTop: '20px' }}>
                    <div className="text-section">
                        <h3>AI-Based Task Scheduling Mobile Application</h3>
                        <p>
                        We developed a task scheduling mobile application using React Native, designed to help users manage their workload more efficiently. Users input task details, and the app intelligently breaks down each task into subtasks and automatically schedules them in a calendar. Notifications for scheduled tasks are sent through Firebase, ensuring users stay updated. The app tracks the task status by moving tasks through "In Progress" and "Done" lists as users work through them. We also integrated the ChatGPT API to enhance the task breakdown and scheduling process with smart, AI-driven suggestions.
                        </p>
                        <ul style={{ paddingLeft: '20px', margin: '20px 0' }}>
                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Smart task breakdown into subtasks and automated calendar scheduling.</li>
                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Real-time task status tracking (In Progress and Done).</li>
                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Push notifications to remind users about upcoming tasks.</li>
                        </ul>
                    </div>
                    <div className="image-section">
                        <img src={Task_Scheduler} alt="Task Scheduling Project Snapshot" className="project-image" />
                    </div>
                    </div>
                </TabsContent>

                {/* LUMSync Project */}
                <TabsContent value="lumsync">
                    <div className="project-card" style={{ marginTop: '20px' }}>
                    <div className="text-section">
                        <h3>LUMSync Mobile Application Interface</h3>
                        <p>
                        Designed the user interface for the LUMSync mobile application, a platform aimed at streamlining course management and extracurricular activity tracking for university students. Conducted thorough user research and problem identification sessions to deeply understand student pain points and organizational challenges. Mapped out optimized solutions to enhance the app’s task management capabilities, ensuring a smoother and more efficient user experience. Collaborated closely with potential users through interviews to validate design decisions and prioritize essential features. Developed detailed wireframes and fully interactive prototypes using Figma, focusing on creating a clean, intuitive, and user-centric interface that supports both academic and extracurricular engagement.
                        </p>
                        <ul style={{ paddingLeft: '20px', margin: '20px 0' }}>
                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span>Conducted User Research and Problem Identification to understand real needs</li>
                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span>Proposed and validated Optimal Solution Approaches through user interviews</li>
                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span>Designed detailed Figma Wireframes, Screens, and Interactive Prototypes</li>
                        </ul>
                    </div>
                    </div>
                </TabsContent>

                </Tabs>
            </div>

           <style jsx>{`
            .tab-buttons-container {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                justify-content: center;
                margin: 10px 0;
            }

            .tab-button {
                flex: 1 1 10%;
                padding: 10px 8px;
                font-size: 1.5em;
                background-color: #0092a0;
                border: none;
                cursor: pointer;
                transition: all 0.3s ease;
                text-align: center;
                border-radius: 5px;
                min-width: 150px;
                margin: 5px;
                margin-left: 5px;
                margin-right:5px;
                color: white;
            }

            .tab-button[data-state="active"] {
                background-color: #00363b;
                color: white;
                transform: scale(1.02);
                font-weight: bold;
                z-index: 1;
            }

            .project-card {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
            }

            .text-section {
                flex: 1;
                min-width: 300px;
            }

            .image-section {
                flex: 1;
                min-width: 300px;
            }

            .project-image {
                width: 100%;
                height: auto;
                border-radius: 10px;
            }

            /* ✅ Responsive Fix: On smaller screens */
            @media (max-width: 768px) {
                .tab-buttons-container {
                flex-direction: column;
                align-items: center;
                }

                .tab-button {
                width: 90%; /* wide button on mobile */
                font-size: 1.2em;
                }
            }
            `}</style>

            </section>


            <section id="experience" className="experience-section">
                <div className="container">
                    <h2 style={{ fontWeight: 'bold', color: '#00bccde5', fontSize: '2.5em', textAlign: 'center' }}>Experience</h2>

                    <div className="experience-grid">

                        <div className="experience-card">
                            {/* Experience card with company name */}
                            <div className="card">
                                      <img src={SnackOutLogo} alt="SnackOut Logo" style={{ width: '100px', height: '100px', verticalAlign: 'middle' }} ></img>   
                            
                                <div className="experience-details">
                                    <strong className="role"><span style={{color: "#d8d3d3"}}>Associate Software Engineer (Jan 2025 - Present)</span></strong>
                                    <ul style={{ paddingLeft: '20px', margin: '20px 0' }}>
                                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Lead frontend development of SnackOut’s Vendor and Admin web panels using React and TypeScript.</li>
                                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Developed and maintained modules for restaurant inventory management, rider assignment, order tracking, and wallet management.</li>
                                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Integrated push notifications via Firebase to enhance real-time communication with vendors and riders.</li>
                                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Worked closely with backend technologies including Node.js, Express.js, Prisma ORM, and PostgreSQL databases.</li>
                                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Collaborated with DevOps teams to manage AWS CI/CD pipelines and Kafka for event-driven communication.</li>
                                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Solely responsible for designing and implementing new features, ensuring performance and scalability.</li>
                                    </ul>
                                    <div className="skills-icons">
                                        <i className="fab fa-js-square skill-logo" title="JavaScript" style={{ margin: '10px', color: '#00bccd', fontSize: '50px' }}></i>
                                        <i className="fab fa-react skill-logo" title="React" style={{ margin: '10px', color: '#00bccd', fontSize: '50px' }}></i>
                                        <i className="fab fa-css3-alt skill-logo" title="CSS" style={{ margin: '10px', color: '#00bccd', fontSize: '50px' }}></i>
                                        <i className="fab fa-node skill-logo" title="NodeJS" style={{ margin: '10px', color: '#00bccd',fontSize: '50px' }}></i>
                                        <i className="fas fa-database skill-logo" title="PostgreSQL" style={{  margin: '10px', color: '#00bccd',fontSize: '50px' }}></i>
                                        <i className="fas fa-cloud skill-logo" title="AWS" style={{  margin: '10px', color: '#00bccd',fontSize: '50px' }}></i>
                                        <i className="fas fa-bolt skill-logo" title="Kafka" style={{  margin: '10px', color: '#00bccd', fontSize: '50px' }}></i>
                                        <i className="fas fa-bell skill-logo" title="Firebase" style={{ margin: '10px', color: '#00bccd', fontSize: '50px' }}></i>
                                    </div>

                                </div>
                            </div>
                            
                        </div>

                        <div className="experience-card">
                            {/* Experience card with company name */}
                            <div className="card">
                                <h3 className="company-name">
                                    <span style={{color: "#d8d3d3"}}>SIGMA</span>
                                    <span style={{color: "#770909"}}>TEC</span><span style={{color: "#d8d3d3"}}> Solutions</span>
                                </h3>

                                <div className="experience-details">
                                    <strong className="role"><span style={{color: "#d8d3d3"}}>Software Development Intern (June-August 2023)</span></strong>
                                    <ul style={{ paddingLeft: '20px', margin: '20px 0' }}>
                                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Developed a photography website using the MERN stack, enabling users to showcase their art skills and attract customers.</li>
                                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Gained practical experience in MERN stack development.</li>
                                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Collaborated with the design team to enhance the website’s user interface for better engagement.</li>
                                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Conducted user testing to gather feedback, leading to significant improvements in functionality.</li>
                                    </ul>
                                    <div className="skills-icons">
                                        <i className="fab fa-js-square skill-logo" title="JavaScript" style={{ color: '#00bccd', margin: '10px', fontSize: '50px' }}></i>
                                        <i className="fab fa-react skill-logo" title="React" style={{ color: '#00bccd', margin: '10px', fontSize: '50px' }}></i>
                                        <i className="fab fa-css3-alt skill-logo" title="CSS" style={{ color: '#00bccd', margin: '10px', fontSize: '50px' }}></i>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className="experience-card">
                            <div className="card">
                                <h3 className="company-name"><span style={{color: "#d8d3d3"}}>Ummat Educational and Cultural Organization</span></h3>
                                <div className="experience-details">
                                    <strong className="role"><span style={{color: "#d8d3d3"}}>General Secretary (Feb 2019 - Aug 2021)</span></strong>
                                    <ul style={{ paddingLeft: '20px', margin: '20px 0' }}>
                                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Volunteered as a Teacher and Management Member for two years, providing free education to underprivileged students.</li>
                                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Gained experience in management, communication, and public dealing.</li>
                                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Organized workshops and events to raise awareness about education among the community.</li>
                                        <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Collaborated with local organizations to secure resources and materials for students.</li>
                                    </ul>
                                    <div className="skills-icons">
                                        <i className="fas fa-user-graduate skill-logo" title="Management" style={{ color: '#00bccd', margin: '10px', fontSize: '50px' }}></i>
                                        <i className="fas fa-comments skill-logo" title="Communication" style={{ color: '#00bccd', margin: '10px', fontSize: '50px' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <AnimatedSkills />

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
       
            <section id="contact" className="contact-section">
                <div className="container">
                    <div className="contact-grid">
                    <div className="contact-form">
                        <h2>Contact Me</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-button">Send Message</button>
                        </form>
                    </div>


                        <div className="contact-info">
                            <h2>Welcome!</h2>
                            <p>Feel free to reach out to me through the form or connect with me on social media.</p>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/muhammad-mehdi-07a716255" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/Muhammad-Mehdi-Changazi" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://www.instagram.com/mehdi_changezii" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                                </a>
                                
                                <a href="https://www.facebook.com/mehdichangexii?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div>

                            <div className="contact-icons" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <a href="mailto:Mehdichangazi135@gmail.com" style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginLeft:"20px" }}>
                                    <i className="fas fa-envelope" style={{ marginRight: '5px' }}></i>
                                    MehdiChangazi135@gmail.com
                                </a>
                                <a href="tel:+923418886424" style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginLeft:"20px" }}>
                                    <i className="fas fa-phone" style={{ marginRight: '5px' }}></i>
                                    +92 341 888 6424
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          
          
            <footer className="footer-section" style={{ backgroundColor: 'black', color: '#fff', padding: '0px 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', padding: '0 20px' }}>
                
                    <div className="footer-right" style={{ flex: '1', textAlign: 'right', margin: '10px 0' }}>
                        <h3 style={{ color: '#00bccde5' }}>© 2025 Muhammad Mehdi</h3>
                    </div>
                </div>
            </footer>


        </>

        
    );

    
};

export default MainPage;
