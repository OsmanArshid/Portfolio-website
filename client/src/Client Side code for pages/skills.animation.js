"use client"
import "../styles/skills-animation.css"

export default function AnimatedSkills() {
  // Skills data with their links and image URLs
  const skillsData = [
    {
      name: "JavaScript",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      link: "https://www.geeksforgeeks.org/javascript-tutorial/",
    },
    {
      name: "React",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      link: "https://www.geeksforgeeks.org/reactjs-tutorials/",
    },
    {
      name: "Node.js",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      link: "https://www.geeksforgeeks.org/nodejs-tutorials/",
    },
    {
      name: "MongoDB",
      imageUrl:
        "data:image/svg+xml,%3csvg%20width='112'%20height='249'%20viewBox='0%200%20112%20249'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fillRule='evenodd'%20clipRule='evenodd'%20d='M61.2247%20248.567L54.6167%20246.309C54.6167%20246.309%2055.4234%20212.624%2043.3353%20210.206C35.2765%20200.858%2044.6246%20-186.289%2073.6356%20208.917C73.6356%20208.917%2063.6436%20213.913%2061.8702%20222.456C59.9354%20230.837%2061.2247%20248.567%2061.2247%20248.567Z'%20fill='white'/%3e%3cpath%20fillRule='evenodd'%20clipRule='evenodd'%20d='M61.2247%20248.567L54.6167%20246.309C54.6167%20246.309%2055.4234%20212.624%2043.3353%20210.206C35.2765%20200.858%2044.6246%20-186.289%2073.6356%20208.917C73.6356%20208.917%2063.6436%20213.913%2061.8702%20222.456C59.9354%20230.837%2061.2247%20248.567%2061.2247%20248.567Z'%20fill='%23A6A385'/%3e%3cpath%20fillRule='evenodd'%20clipRule='evenodd'%20d='M64.7701%20216.01C64.7701%20216.01%20122.632%20177.972%20109.093%2098.8333C96.0386%2041.2939%2065.2527%2022.4363%2061.8687%2015.1828C58.1621%2010.0254%2054.6152%201%2054.6152%201L57.0341%20161.048C57.0341%20161.209%2052.0365%20210.046%2064.7701%20216.01Z'%20fill='white'/%3e%3cpath%20fillRule='evenodd'%20clipRule='evenodd'%20d='M64.7701%20216.01C64.7701%20216.01%20122.632%20177.972%20109.093%2098.8333C96.0386%2041.2939%2065.2527%2022.4363%2061.8687%2015.1828C58.1621%2010.0254%2054.6152%201%2054.6152%201L57.0341%20161.048C57.0341%20161.209%2052.0365%20210.046%2064.7701%20216.01Z'%20fill='%23499D4A'/%3e%3cpath%20fillRule='evenodd'%20clipRule='evenodd'%20d='M51.2308%20218.105C51.2308%20218.105%20-3.08606%20181.034%200.138055%20115.759C3.1993%2050.4815%2041.5599%2018.4078%2048.9733%2012.605C53.8094%207.44761%2053.9708%205.51284%2054.2935%200.355469C57.6775%207.60897%2057.0336%20108.828%2057.5161%20120.755C58.9668%20166.69%2054.9374%20209.403%2051.2308%20218.105Z'%20fill='white'/%3e%3cpath%20fillRule='evenodd'%20clipRule='evenodd'%20d='M51.2308%20218.105C51.2308%20218.105%20-3.08606%20181.034%200.138055%20115.759C3.1993%2050.4815%2041.5599%2018.4078%2048.9733%2012.605C53.8094%207.44761%2053.9708%205.51284%2054.2935%200.355469C57.6775%207.60897%2057.0336%20108.828%2057.5161%20120.755C58.9668%20166.69%2054.9374%20209.403%2051.2308%20218.105Z'%20fill='%2358AA50'/%3e%3c/svg%3e",
      link: "https://www.geeksforgeeks.org/mongodb-tutorial/",
    },
    {
      name: "Express",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      link: "https://www.geeksforgeeks.org/express-js/",
    },
    {
      name: "CSS",
      imageUrl:
        "data:image/svg+xml,%3csvg%20width='256'%20height='290'%20viewBox='0%200%20256%20290'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clipPath='url(%23clip0)'%3e%3cpath%20d='M127.844%20289.088L23.6618%20260.166L0.445312%20-0.234375H255.555L232.314%20260.125L127.844%20289.088Z'%20fill='%23264DE4'/%3e%3cpath%20d='M212.417%20243.547L232.278%2021.0576H128V266.951L212.417%20243.547Z'%20fill='%232965F1'/%3e%3cpath%20d='M53.668%20117.636L56.5304%20149.572H127.999V117.636H53.668Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M47.918%2052.9951L50.8212%2084.9325H128.001V52.9951H47.918Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M128.001%20200.58L127.861%20200.618L92.2925%20191.013L90.0188%20165.542H57.959L62.4334%20215.688L127.854%20233.849L128.001%20233.808V200.58Z'%20fill='%23EBEBEB'/%3e%3cpath%20d='M202.128%20117.637L207.893%2052.9951H127.891V84.9325H172.893L169.987%20117.637H127.891V149.573H167.218L163.51%20190.993L127.891%20200.607V233.834L193.363%20215.688L193.844%20210.292L201.349%20126.213L202.128%20117.637Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='256'%20height='290'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
      link: "https://www.geeksforgeeks.org/css/",
    },
    {
      name: "AWS Cloud",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      link: "https://aws.amazon.com/training/",
    },
    {
      name: "Unity",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg",
      link: "https://learn.unity.com/",
    },
    {
      name: "Figma",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Firebase",
      imageUrl:
        "data:image/svg+xml,%3csvg%20width='256'%20height='351'%20viewBox='0%200%20256%20351'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%20282.998L2.12251%20280.026L102.527%2089.5119L102.739%2087.4951L58.4788%204.35812C54.7706%20-2.6061%2044.3313%20-0.845305%2043.1143%206.95059L0%20282.998Z'%20fill='%23FFC24A'/%3e%3cpath%20d='M1.25195%20280.732L2.85756%20277.601L102.21%2089.0837L58.0605%205.60859C54.3912%20-1.28266%2045.0733%200.474059%2043.8691%208.18828L1.25195%20280.732Z'%20fill='%23FFA712'/%3e%3cg%20filter='url(%23filter0_i)'%3e%3cpath%20d='M1.25195%20280.732L2.85756%20277.601L102.21%2089.0837L58.0605%205.60859C54.3912%20-1.28266%2045.0733%200.474059%2043.8691%208.18828L1.25195%20280.732Z'%20fill='%23FCA20E'/%3e%3c/g%3e%3cpath%20d='M135.006%20150.381L167.961%20116.63L134.996%2053.6996C131.867%2047.7428%20123.13%2047.7256%20120.033%2053.6996L102.422%2087.2884V90.1491L135.006%20150.381Z'%20fill='%23F4BD62'/%3e%3cpath%20d='M134.418%20148.974L166.457%20116.161L134.418%2055.1542C131.376%2049.3631%20123.985%2048.7564%20120.975%2054.5642L103.27%2088.6734L102.74%2090.4171L134.418%20148.974Z'%20fill='%23FFA50E'/%3e%3cg%20filter='url(%23filter1_i)'%3e%3cpath%20d='M134.418%20148.974L166.457%20116.161L134.418%2055.1542C131.376%2049.3631%20123.985%2048.7564%20120.975%2054.5642L103.27%2088.6734L102.74%2090.4171L134.418%20148.974Z'%20fill='%23FCA20E'/%3e%3c/g%3e%3cpath%20d='M0%20282.997L0.962097%20282.03L4.45771%20280.609L132.935%20152.609L134.563%20148.178L102.513%2087.1045L0%20282.997Z'%20fill='%23F6820C'/%3e%3cpath%20d='M139.121%20347.551L255.396%20282.703L222.191%2078.209C221.153%2071.8109%20213.303%2069.2815%20208.724%2073.8691L0%20282.998L115.608%20347.545C122.914%20351.625%20131.813%20351.627%20139.121%20347.551Z'%20fill='%23FDE068'/%3e%3cpath%20d='M254.354%20282.16L221.402%2079.2184C220.371%2072.8688%20213.843%2070.2414%20209.299%2074.7942L1.28906%20282.601L115.627%20346.51C122.878%20350.558%20131.709%20350.56%20138.961%20346.516L254.354%20282.16Z'%20fill='%23FCCA3F'/%3e%3cpath%20d='M139.121%20345.641C131.813%20349.717%20122.914%20349.715%20115.608%20345.635L0.931157%20282.015L0%20282.998L115.608%20347.546C122.914%20351.625%20131.813%20351.627%20139.121%20347.552L255.396%20282.704L255.111%20280.952L139.121%20345.641Z'%20fill='%23EEAB37'/%3e%3cdefs%3e%3cfilter%20id='filter0_i'%20x='1.25195'%20y='1.30176'%20width='100.958'%20height='279.43'%20filterUnits='userSpaceOnUse'%20colorInterpolationFilters='sRGB'%3e%3cfeFlood%20floodOpacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='17.5'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.06%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow'/%3e%3c/filter%3e%3cfilter%20id='filter1_i'%20x='102.74'%20y='43.498'%20width='64.7163'%20height='105.476'%20filterUnits='userSpaceOnUse'%20colorInterpolationFilters='sRGB'%3e%3cfeFlood%20floodOpacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dx='1'%20dy='-9'/%3e%3cfeGaussianBlur%20stdDeviation='3.5'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.09%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",
      link: "https://firebase.google.com/docs",
    },
    {
      name: "Canva",
      imageUrl:
        "data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40%200H4C1.791%200%200%201.791%200%204V40C0%2042.209%201.791%2044%204%2044H40C42.209%2044%2044%2042.209%2044%2040V4C44%201.791%2042.209%200%2040%200Z'%20fill='url(%23paint0_linear)'/%3e%3cpath%20fillRule='evenodd'%20clipRule='evenodd'%20d='M30.4511%2029.953C28.9731%2031.312%2028.0131%2032.246%2025.8631%2033.345C24.6311%2033.96%2023.2461%2034.33%2021.9391%2034.33C18.0181%2034.33%2016.1061%2030.72%2015.7251%2027.602C14.7481%2019.603%2021.7771%208.60804%2026.6781%208.60804C27.8211%208.60804%2028.8421%209.60204%2029.0321%2011.151C29.3261%2013.562%2029.2781%2015.271%2026.7851%2017.354C26.5121%2017.581%2026.4321%2017.95%2026.5731%2018.168C26.7851%2018.494%2027.4551%2018.527%2028.8091%2017.842C31.4611%2016.504%2032.4171%2014.438%2032.1251%2012.046C31.8001%209.39204%2029.4841%207.17004%2026.3781%207.17004C24.8681%207.17004%2023.2071%207.62104%2021.7241%208.52404C15.2611%2012.461%2011.0911%2021.445%2011.9291%2028.297C12.1941%2030.471%2013.0981%2032.851%2014.8051%2034.451C15.9561%2035.517%2018.0361%2036.83%2020.4881%2036.83C23.1431%2036.83%2025.3851%2035.805%2027.3961%2034.536C28.7591%2033.663%2029.8991%2032.607%2030.8621%2031.526C32.4411%2030.058%2031.3051%2029.147%2030.4511%2029.953Z'%20fill='white'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='42.984'%20y1='45.143'%20x2='1.623'%20y2='-0.474002'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stopColor='%23823AF3'/%3e%3cstop%20offset='0.36'%20stopColor='%234B66E1'/%3e%3cstop%20offset='0.906'%20stopColor='%2301F1C4'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
      link: "https://www.canva.com/",
    },
    {
      name: "Python",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      link: "https://www.python.org/doc/",
    },
    {
      name: "C++",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      link: "https://cplusplus.com/doc/",
    },
    {
      name: "TypeScript",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      link: "https://www.typescriptlang.org/docs/",
    },

    {
      name: "HTML",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "MySQL",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
      link: "https://dev.mysql.com/doc/",
    },
    {
      name: "GitHub",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      link: "https://docs.github.com/",
    },

  ]

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 style={{ fontWeight: "bold", color: "#00bccde5", fontSize: "2.5em", textAlign: "center" }}>Technical Tools</h2>
        <div className="skills-container">
          <div className="skills-track">
            {/* First set of skills */}
            {skillsData.map((skill, index) => (
              <div key={`skill-1-${index}`} className="skill-item" style={{ animationDelay: `${index * 0.2}s` }}>
                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={skill.imageUrl || "/placeholder.svg"}
                    alt={skill.name}
                    style={{ width: "50px", height: "50px", margin: "20px" }}
                  />
                  <p>{skill.name}</p>
                </a>
              </div>
            ))}

            {/* Duplicate set for seamless looping */}
            {skillsData.map((skill, index) => (
              <div key={`skill-2-${index}`} className="skill-item" style={{ animationDelay: `${index * 0.2}s` }}>
                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={skill.imageUrl || "/placeholder.svg"}
                    alt={skill.name}
                    style={{ width: "50px", height: "50px", margin: "20px" }}
                  />
                  <p>{skill.name}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
