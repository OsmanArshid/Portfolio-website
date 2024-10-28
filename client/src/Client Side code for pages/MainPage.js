import React, { useEffect, useState } from 'react';
import '../styles/login.css';
import ProfilePic from '../styles/MyImage.jpeg';
import image2 from '../styles/Image2.png'
import Image1 from '../styles/AI mobile App.jpeg'
import datascience from '../styles/DataScience.jpeg'
import Lums from '../styles/LumsApp.jpeg'


const MainPage = () => {
    const [typedName, setTypedName] = useState('');
    const [hasScrolledToProjects, setHasScrolledToProjects] = useState(false); // Track if the user has scrolled to projects section
    const fullName = "  I'M     CHANGEZI";

    const phrases = [
        '        A STUDENT           ',
        '        A FRONTEND DEVELOPER               ',
        '        A BACKEND DEVELOPER            ',
        'A MOB APP DEVELOPER        ',
        '         AN OPENAI EXPERT               '
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
    }, [isDeleting, currentPhrase, charIndex, typedPhrase]);

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
                            I’m a <span className="highlighted">Computer Science</span> student at <span className="highlighted">LUMS</span> with a strong focus on <span className="highlighted">Full-Stack Web and Mobile development</span>. My academic journey has equipped me with a solid foundation in fields like <span className="highlighted">Web/App Design</span> and <span className="highlighted">Development</span>, and <span className="highlighted">Game Design/Development</span>, complemented by hands-on projects. My internship at <span className="highlighted">SigmaTec Solutions</span> enhanced my <span className="highlighted">MERN stack</span> skills. Additionally, I served as <span className="highlighted">General Secretary</span> at <span className="highlighted">Ummat Educational Organization</span>, where I provided free education to underprivileged students, fostering my passion for community service. A passionate <span className="highlighted">tech enthusiast</span>, I’m eager to launch my career and contribute innovative solutions to the tech industry.
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
                    <a href="https://1drv.ms/b/c/3100f52f0c98a0b6/EdBIBWj2455CjWFIW3PRh_oBaFR7vmoMC7RsS3U9DEcdUw?e=3N57ps" download="YourCV.pdf" class="btn-download-cv">Download CV</a>
                    </div>
                </section>
            </div>


            <section id="projects" className="projects-section">
    <div className={`container ${hasScrolledToProjects ? 'slide-in' : ''}`}>
        <h2 style={{ fontWeight: 'bold', color: '#00bccde5', fontSize: '2.5em', textAlign: 'center' }}>PROJECTS</h2>
        <div className="projects-grid">

            <div className="project-card">
                <div className="text-section">
                    <h3>Data Science Project </h3>
                    <p>
                    Using ML modeled system and data science techniques, we developed a system that predicts academic life balance techniques for users based on data gathered from past student experiences. Utilized data cleaning and manipulation techniques to prepare the dataset for analysis.
                    </p>
                    <ul style={{ paddingLeft: '20px', margin: '20px 0' }}>
                            <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Data Gathering</li>
                            <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Data Cleaning</li>
                            <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Data Manipulation</li>
                
                        </ul>
                    <a href="https://github.com/your-repo-1" target="_blank" rel="noopener noreferrer" className="project-link">
                        View Project
                    </a>
                </div>
                <div className="image-section" >
                    <img src={datascience} alt="Data Science Project Snapshot" className="project-image" />
                </div>
            </div>

            <div className="project-card">
                <div className="text-section">
                    <h3>Real-time Ride Booking Web Application</h3>
                    <p>
                        Created a real-time ride booking web application using the MERN stack. Implemented features such as user authentication and dynamic ride tracking, gaining hands-on experience with MongoDB for database storage.
                    </p>
                    <ul style={{ paddingLeft: '20px', margin: '20px 0' }}>
                            <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> MERN STACK</li>
                            <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> REACT, JAVASCRIPT, HTML, CSS</li>
                            <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> MONGODB</li>
                
                        </ul>
                    <a href="https://github.com/your-repo-2" target="_blank" rel="noopener noreferrer" className="project-link">
                        View Project
                    </a>
                </div>
                <div className="image-section" >
                    <img src={image2} alt="Ride Booking Project Snapshot" className="project-image" />
                </div>
            </div>

            <div className="project-card">
                <div className="text-section">
                    <h3>AI-Based Task Scheduling Mobile Application</h3>
                    <p>
                        Developed a mobile application using Flutter and Firebase that allows users to schedule tasks by providing task descriptions. The app sends timely notifications for each sub-task, enhancing user productivity.
                    </p>
                    <ul style={{ paddingLeft: '20px', margin: '20px 0' }}>
                            <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Flutter</li>
                            <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Dart</li>
                            <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Firebase</li>
                
                        </ul>
                    <a href="https://github.com/your-repo-3" target="_blank" rel="noopener noreferrer" className="project-link">
                        View Project
                    </a>
                </div>
                <div className="image-section" >
                    <img src={Image1} alt="Task Scheduling Project Snapshot" className="project-image" />
                </div>
            </div>

            <div className="project-card">
                <div className="text-section">
                    <h3>LUMSync Mobile Application Interface</h3>
                    <p>
                        Designed the interface for the LUMSync mobile application, enabling users to manage their coursework and extracurricular activities from a single platform. Utilized Figma for interface design and improved problem identification and solution proposing skills.
                    </p>
                    <ul style={{ paddingLeft: '20px', margin: '20px 0' }}>
                            <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> User Research, Problem Identification</li>
                            <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Optimal Solution Approach, Interviewing Audience</li>
                            <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Figma Screens Design</li>
                
                        </ul>
                    <a href="https://github.com/your-repo-4" target="_blank" rel="noopener noreferrer" className="project-link">
                        View Project
                    </a>
                </div>
                <div className="image-section">
                    <img src={Lums} alt="LUMSync Project Snapshot" className="project-image" />
                </div>
            </div>

            {/* Add more projects similarly if needed */}
        </div>
    </div>
</section>

<section id="skills" className="skills-section">
    <div className="container">
        <h2 style={{ fontWeight: 'bold', color: '#00bccde5', fontSize: '2.5em', textAlign: 'center' }}>Skills</h2>
        <div className="skills-grid">

            {/* JavaScript */}
            <div className="skill-item">
                <a href="https://www.geeksforgeeks.org/javascript-tutorial/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" style={{ width: '50px', height: '50px' }} />
                    <p>JavaScript</p>
                </a>
            </div>

            {/* React */}
            <div className="skill-item">
                <a href="https://www.geeksforgeeks.org/reactjs-tutorials/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" style={{ width: '50px', height: '50px' }} />
                    <p>React</p>
                </a>
            </div>

            {/* Node.js */}
            <div className="skill-item">
                <a href="https://www.geeksforgeeks.org/nodejs-tutorials/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" style={{ width: '50px', height: '50px' }} />
                    <p>Node.js</p>
                </a>
            </div>

            {/* MongoDB */}
            <div className="skill-item">
                <a href="https://www.geeksforgeeks.org/mongodb-tutorial/" target="_blank" rel="noopener noreferrer">
                    <img src="data:image/svg+xml,%3csvg%20width='112'%20height='249'%20viewBox='0%200%20112%20249'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M61.2247%20248.567L54.6167%20246.309C54.6167%20246.309%2055.4234%20212.624%2043.3353%20210.206C35.2765%20200.858%2044.6246%20-186.289%2073.6356%20208.917C73.6356%20208.917%2063.6436%20213.913%2061.8702%20222.456C59.9354%20230.837%2061.2247%20248.567%2061.2247%20248.567Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M61.2247%20248.567L54.6167%20246.309C54.6167%20246.309%2055.4234%20212.624%2043.3353%20210.206C35.2765%20200.858%2044.6246%20-186.289%2073.6356%20208.917C73.6356%20208.917%2063.6436%20213.913%2061.8702%20222.456C59.9354%20230.837%2061.2247%20248.567%2061.2247%20248.567Z'%20fill='%23A6A385'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M64.7701%20216.01C64.7701%20216.01%20122.632%20177.972%20109.093%2098.8333C96.0386%2041.2939%2065.2527%2022.4363%2061.8687%2015.1828C58.1621%2010.0254%2054.6152%201%2054.6152%201L57.0341%20161.048C57.0341%20161.209%2052.0365%20210.046%2064.7701%20216.01Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M64.7701%20216.01C64.7701%20216.01%20122.632%20177.972%20109.093%2098.8333C96.0386%2041.2939%2065.2527%2022.4363%2061.8687%2015.1828C58.1621%2010.0254%2054.6152%201%2054.6152%201L57.0341%20161.048C57.0341%20161.209%2052.0365%20210.046%2064.7701%20216.01Z'%20fill='%23499D4A'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M51.2308%20218.105C51.2308%20218.105%20-3.08606%20181.034%200.138055%20115.759C3.1993%2050.4815%2041.5599%2018.4078%2048.9733%2012.605C53.8094%207.44761%2053.9708%205.51284%2054.2935%200.355469C57.6775%207.60897%2057.0336%20108.828%2057.5161%20120.755C58.9668%20166.69%2054.9374%20209.403%2051.2308%20218.105Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M51.2308%20218.105C51.2308%20218.105%20-3.08606%20181.034%200.138055%20115.759C3.1993%2050.4815%2041.5599%2018.4078%2048.9733%2012.605C53.8094%207.44761%2053.9708%205.51284%2054.2935%200.355469C57.6775%207.60897%2057.0336%20108.828%2057.5161%20120.755C58.9668%20166.69%2054.9374%20209.403%2051.2308%20218.105Z'%20fill='%2358AA50'/%3e%3c/svg%3e" alt="MongoDB" style={{ width: '50px', height: '50px' }} />
                    <p>MongoDB</p>
                </a>
            </div>

            {/* Express */}
            <div className="skill-item">
                <a href="https://www.geeksforgeeks.org/express-js/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express" style={{ width: '50px', height: '50px' }} />
                    <p>Express</p>
                </a>
            </div>

            {/* CSS */}
            <div className="skill-item">
                <a href="https://www.geeksforgeeks.org/css/" target="_blank" rel="noopener noreferrer">
                    <img src="data:image/svg+xml,%3csvg%20width='256'%20height='290'%20viewBox='0%200%20256%20290'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20d='M127.844%20289.088L23.6618%20260.166L0.445312%20-0.234375H255.555L232.314%20260.125L127.844%20289.088Z'%20fill='%23264DE4'/%3e%3cpath%20d='M212.417%20243.547L232.278%2021.0576H128V266.951L212.417%20243.547Z'%20fill='%232965F1'/%3e%3cpath%20d='M53.668%20117.636L56.5304%20149.572H127.999V117.636H53.668Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M47.918%2052.9951L50.8212%2084.9325H128.001V52.9951H47.918Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M128.001%20200.58L127.861%20200.618L92.2925%20191.013L90.0188%20165.542H57.959L62.4334%20215.688L127.854%20233.849L128.001%20233.808V200.58Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M202.128%20117.637L207.893%2052.9951H127.891V84.9325H172.893L169.987%20117.637H127.891V149.573H167.218L163.51%20190.993L127.891%20200.607V233.834L193.363%20215.688L193.844%20210.292L201.349%20126.213L202.128%20117.637Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='256'%20height='290'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="CSS" style={{ width: '50px', height: '50px' }} />
                    <p>CSS</p>
                </a>
            </div>

            {/* AWS Cloud */}
            <div className="skill-item">
                <a href="https://aws.amazon.com/training/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS Cloud" style={{ width: '50px', height: '50px' }} />
                    <p>AWS Cloud</p>
                </a>
            </div>

            {/* Unity */}
            <div className="skill-item">
                <a href="https://learn.unity.com/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg" alt="Unity" style={{ width: '50px', height: '50px' }} />
                    <p>Unity</p>
                </a>
            </div>

            {/* Figma */}
            <div className="skill-item">
                <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" style={{ width: '50px', height: '50px' }} />
                    <p>Figma</p>
                </a>
            </div>

            {/* Firebase */}
            <div className="skill-item">
                <a href="https://firebase.google.com/docs" target="_blank" rel="noopener noreferrer">
                    <img src="data:image/svg+xml,%3csvg%20width='256'%20height='351'%20viewBox='0%200%20256%20351'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%20282.998L2.12251%20280.026L102.527%2089.5119L102.739%2087.4951L58.4788%204.35812C54.7706%20-2.6061%2044.3313%20-0.845305%2043.1143%206.95059L0%20282.998Z'%20fill='%23FFC24A'/%3e%3cpath%20d='M1.25195%20280.732L2.85756%20277.601L102.21%2089.0837L58.0605%205.60859C54.3912%20-1.28266%2045.0733%200.474059%2043.8691%208.18828L1.25195%20280.732Z'%20fill='%23FFA712'/%3e%3cg%20filter='url(%23filter0_i)'%3e%3cpath%20d='M1.25195%20280.732L2.85756%20277.601L102.21%2089.0837L58.0605%205.60859C54.3912%20-1.28266%2045.0733%200.474059%2043.8691%208.18828L1.25195%20280.732Z'%20fill='%23FCA20E'/%3e%3c/g%3e%3cpath%20d='M135.006%20150.381L167.961%20116.63L134.996%2053.6996C131.867%2047.7428%20123.13%2047.7256%20120.033%2053.6996L102.422%2087.2884V90.1491L135.006%20150.381Z'%20fill='%23F4BD62'/%3e%3cpath%20d='M134.418%20148.974L166.457%20116.161L134.418%2055.1542C131.376%2049.3631%20123.985%2048.7564%20120.975%2054.5642L103.27%2088.6734L102.74%2090.4171L134.418%20148.974Z'%20fill='%23FFA50E'/%3e%3cg%20filter='url(%23filter1_i)'%3e%3cpath%20d='M134.418%20148.974L166.457%20116.161L134.418%2055.1542C131.376%2049.3631%20123.985%2048.7564%20120.975%2054.5642L103.27%2088.6734L102.74%2090.4171L134.418%20148.974Z'%20fill='%23FCA20E'/%3e%3c/g%3e%3cpath%20d='M0%20282.997L0.962097%20282.03L4.45771%20280.609L132.935%20152.609L134.563%20148.178L102.513%2087.1045L0%20282.997Z'%20fill='%23F6820C'/%3e%3cpath%20d='M139.121%20347.551L255.396%20282.703L222.191%2078.209C221.153%2071.8109%20213.303%2069.2815%20208.724%2073.8691L0%20282.998L115.608%20347.545C122.914%20351.625%20131.813%20351.627%20139.121%20347.551Z'%20fill='%23FDE068'/%3e%3cpath%20d='M254.354%20282.16L221.402%2079.2184C220.371%2072.8688%20213.843%2070.2414%20209.299%2074.7942L1.28906%20282.601L115.627%20346.51C122.878%20350.558%20131.709%20350.56%20138.961%20346.516L254.354%20282.16Z'%20fill='%23FCCA3F'/%3e%3cpath%20d='M139.121%20345.641C131.813%20349.717%20122.914%20349.715%20115.608%20345.635L0.931157%20282.015L0%20282.998L115.608%20347.546C122.914%20351.625%20131.813%20351.627%20139.121%20347.552L255.396%20282.704L255.111%20280.952L139.121%20345.641Z'%20fill='%23EEAB37'/%3e%3cdefs%3e%3cfilter%20id='filter0_i'%20x='1.25195'%20y='1.30176'%20width='100.958'%20height='279.43'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='17.5'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.06%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow'/%3e%3c/filter%3e%3cfilter%20id='filter1_i'%20x='102.74'%20y='43.498'%20width='64.7163'%20height='105.476'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='1'%20dy='-9'/%3e%3cfeGaussianBlur%20stdDeviation='3.5'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.09%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e" alt="Firebase" style={{ width: '50px', height: '50px' }} />
                    <p>Firebase</p>
                </a>
            </div>

            {/* Canva */}
            <div className="skill-item">
                <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer">
                    <img src="data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40%200H4C1.791%200%200%201.791%200%204V40C0%2042.209%201.791%2044%204%2044H40C42.209%2044%2044%2042.209%2044%2040V4C44%201.791%2042.209%200%2040%200Z'%20fill='url(%23paint0_linear)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30.4511%2029.953C28.9731%2031.312%2028.0131%2032.246%2025.8631%2033.345C24.6311%2033.96%2023.2461%2034.33%2021.9391%2034.33C18.0181%2034.33%2016.1061%2030.72%2015.7251%2027.602C14.7481%2019.603%2021.7771%208.60804%2026.6781%208.60804C27.8211%208.60804%2028.8421%209.60204%2029.0321%2011.151C29.3261%2013.562%2029.2781%2015.271%2026.7851%2017.354C26.5121%2017.581%2026.4321%2017.95%2026.5731%2018.168C26.7851%2018.494%2027.4551%2018.527%2028.8091%2017.842C31.4611%2016.504%2032.4171%2014.438%2032.1251%2012.046C31.8001%209.39204%2029.4841%207.17004%2026.3781%207.17004C24.8681%207.17004%2023.2071%207.62104%2021.7241%208.52404C15.2611%2012.461%2011.0911%2021.445%2011.9291%2028.297C12.1941%2030.471%2013.0981%2032.851%2014.8051%2034.451C15.9561%2035.517%2018.0361%2036.83%2020.4881%2036.83C23.1431%2036.83%2025.3851%2035.805%2027.3961%2034.536C28.7591%2033.663%2029.8991%2032.607%2030.8621%2031.526C32.4411%2030.058%2031.3051%2029.147%2030.4511%2029.953Z'%20fill='white'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='42.984'%20y1='45.143'%20x2='1.623'%20y2='-0.474002'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23823AF3'/%3e%3cstop%20offset='0.36'%20stop-color='%234B66E1'/%3e%3cstop%20offset='0.906'%20stop-color='%2301F1C4'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="Canva" style={{ width: '50px', height: '50px' }} />
                    <p>Canva</p>
                </a>
            </div>

            {/* Python */}
            <div className="skill-item">
                <a href="https://www.python.org/doc/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" style={{ width: '50px', height: '50px' }} />
                    <p>Python</p>
                </a>
            </div>

            {/* C++ */}
            <div className="skill-item">
                <a href="https://cplusplus.com/doc/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++" style={{ width: '50px', height: '50px' }} />
                    <p>C++</p>
                </a>
            </div>

            {/* TypeScript */}
            <div className="skill-item">
                <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" style={{ width: '50px', height: '50px' }} />
                    <p>TypeScript</p>
                </a>
            </div>

            {/* Haskell */}
            <div className="skill-item">
                <a href="https://www.haskell.org/documentation/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg" alt="Haskell" style={{ width: '50px', height: '50px' }} />
                    <p>Haskell</p>
                </a>
            </div>

            <div className="skill-item">
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" style={{width:'50px', height:'50px'}}/>
                    <p>HTML</p>
                </a>
            </div>

            <div className="skill-item">
                <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" alt="MySQL" style={{width:'50px', height:'50px'}}/>
                    <p>MySQL</p>
                </a>
            </div>


        </div>
    </div>
</section>


<section id="experience" className="experience-section">
    <div className="container">
        <h2 style={{ fontWeight: 'bold', color: '#00bccde5', fontSize: '2.5em', textAlign: 'center' }}>Experience</h2>

        <div className="experience-grid">
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

            <div className="experience-card">
                <div className="card">
                    <h3 className="company-name">IconPro <span style={{color: "#d8d3d3"}}>Solutions</span></h3>
                    <div className="experience-details">
                        <strong className="role"><span style={{color: "#d8d3d3"}}>Front End Design Intern (June-August 2024)</span></strong>
                        <ul style={{ paddingLeft: '20px', margin: '20px 0' }}>
                            <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Assisted in designing and developing user-friendly interfaces for web applications.</li>
                            <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Collaborated with back-end developers to integrate RESTful APIs into the front-end.</li>
                            <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Conducted usability testing and gathered feedback to enhance user experience.</li>
                            <li style={{ marginBottom: '5px' }}><span style={{color: "blue"}}>✔️</span> Learned about agile development methodologies and participated in daily stand-ups and sprint reviews.</li>
                        </ul>
                        <div className="skills-icons">
                            <i className="fas fa-laptop-code skill-logo" title="HCI" style={{ color: "#00bccd", margin: '10px', fontSize: '50px' }}></i>
                            <i className="fas fa-paint-brush skill-logo" title="Front-end" style={{ color: "#00bccd", margin: '10px', fontSize: '50px' }}></i>
                            <i className="fab fa-figma skill-logo" title="Front-end" style={{ color: "#00bccd", margin: '10px', fontSize: '50px' }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

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







 <footer className="footer-section" style={{ backgroundColor: 'black', color: '#fff', padding: '0px 0' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', padding: '0 20px' }}>
       
        <div className="footer-right" style={{ flex: '1', textAlign: 'right', margin: '10px 0' }}>
            <h3 style={{ color: '#00bccde5' }}>© 2024 Mehdi</h3>
            <p>All rights reserved.</p>
        </div>
    </div>
</footer>


        </>

        
    );

    
};

export default MainPage;
