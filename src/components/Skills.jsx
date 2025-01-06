const Skills = ()=>{

    const skills = [
        {label : 'C/C++', picture:'/c c++.png', text:'Experience of more than 2 years. We\'ve used this language in our bachelors career till now for different perpectives'},
        {label : 'React.js', picture: '/react.png', text : 'Building websites with React.js is a pleasure. I love its modular structure, hooks, state management, and features that make development easy and enjoyable.'},
        {label : 'HTML 5', picture:'/html5.png', text:'Familiarity of more than 2 years. I\'m implementing different websites for different purposes since the start of my CS journey'},
        {label : 'CSS3', picture:'/CSS3.png', text:'Familiarity of more than 2 years. In the due journey of CS, like all students, I can provide simple but decent and professional design to my webpage'},
        {label : 'Node.js', picture:'/node.png', text:'The dynamic applications can\'t be rendered without a backend server. With Node js, I\'ve established local servers to send data from database upon requests'},
        {label : 'JavaScript', picture:'/js.png', text:'The webpages can\'t be functional without Javascript I\'ve been using this language for more than 1 year, making website functional, fetching data, updating DOM'},
        {label : 'Java', picture:'/java.png', text:'When it comes to Object-oriented language, java, I can implement simple and effiecient code snippets of java along with considering all the concepts of OOP'},
        {label : 'Python', picture:'/python.png', text:'Python is a user-friendly, scalable, and versatile language that many aspire to learn. I use it for everything from simple programs to machine learning algorithms.'},
    ]
    
    return(
        <section id="skills">
            <div className="bg-bgTheme-dark text-white flex flex-col justify-center rounded-md mx-2 pt-4 pb-6">
                <div id="skillsFirst" className="text-center space-y-5 p-2 my-4 max-w-[80%] mx-auto">
                    <h1 className="text-4xl">Skills</h1>
                    <p>I've tried best to invest my precious time in gaining valuable skills. <i className="font-semibold">Hover and scroll horizontally to view more carousels</i>.</p>
                </div>
                <div id="skillsSecond" className="my-2 mx-4 p-3 overflow-x-scroll scroll-m-60">
                    <div className="flex flex-row w-max justify-center scale-100 gap-24">
                        {skills.map((skill,index) => (
                            <div key={'skill'+index} id="card" className="flex flex-col justify-center items-center gap-4 max-w-[80vw] md:max-w-[20rem] fadedLight rounded-md py-6 px-4 mx-2 text-center shadow-xl hover:shadow-bgTheme-light duration-200">
                                <img src={skill.picture} alt={skill.label} className="max-h-24 h-full"/>
                                <p>{skill.text}</p>
                            </div>
                        ))}
                    {/* <div id="card"
                        className="flex flex-col justify-center items-center gap-4 max-w-[80vw] md:max-w-[20rem] bg-bgTheme-fadedLight text-bgTheme-dark rounded-md py-6 px-4 mx-2 text-center hover:bg-white hover:shadow-lg hover:shadow-bgTheme-light duration-200">
                        <img src="./html_finalprojimages/react.png" alt="Node js" className="max-h-24 h-full"/>
                        <p>It feels pleasure when you can implement websites using most popular front-end frameworks
                            like React js. I love to develop websites using React js because of its modularity,hooks,
                            states and other features.</p>
                    </div>
                    <div id="card"
                        className="flex flex-col justify-center items-center gap-4 max-w-[80vw] md:max-w-[20rem] bg-bgTheme-fadedLight text-bgTheme-dark rounded-md py-6 px-4 mx-2 text-center hover:bg-white hover:shadow-lg hover:shadow-bgTheme-light duration-200">
                        <img src="./html_finalprojimages/c c++.png" alt="C/C++" className="max-h-24 h-full"/>
                        <p>Experience of more than 2 years. We've used this language in our bachelors career till now
                            for different perpectives</p>
                    </div>
                    <div id="card"
                        className="flex flex-col justify-center items-center gap-4 max-w-[80vw] md:max-w-[20rem] bg-bgTheme-fadedLight text-bgTheme-dark rounded-md py-6 px-4 mx-2 text-center hover:bg-white hover:shadow-lg hover:shadow-bgTheme-light duration-200">
                        <img src="./html_finalprojimages/CSS3.png" alt="CSS3" className="max-h-24 h-full"/>
                        <p>Familiarity of more than 2 years. In the due journey of CS, like all students, I can provide
                            simple but decent and professional design to my webpage</p>
                    </div>
                    <div id="card"
                        className="flex flex-col justify-center items-center gap-4 max-w-[80vw] md:max-w-[20rem] bg-bgTheme-fadedLight text-bgTheme-dark rounded-md py-6 px-4 mx-2 text-center hover:bg-white hover:shadow-lg hover:shadow-bgTheme-light duration-200">
                        <img src="./html_finalprojimages/html5.png" alt="HTML 5" className="max-h-24 h-full"/>
                        <p>Familiarity of more than 2 years. I'm implementing different websites for different purposes
                            since the start of my CS journey</p>
                    </div>
                    <div id="card"
                        className="flex flex-col justify-center items-center gap-4 max-w-[80vw] md:max-w-[20rem] bg-bgTheme-fadedLight text-bgTheme-dark rounded-md py-6 px-4 mx-2 text-center hover:bg-white hover:shadow-lg hover:shadow-bgTheme-light duration-200">
                        <img src="./html_finalprojimages/java.png" alt="Java" className="max-h-24 h-full"/>
                        <p>When it comes to Object-oriented language, java, I can implement simple and effiecient code
                            snippets of java along with considering all the concepts of OOP</p>
                    </div>
                    <div id="card"
                        className="flex flex-col justify-center items-center gap-4 max-w-[80vw] md:max-w-[20rem] bg-bgTheme-fadedLight text-bgTheme-dark rounded-md py-6 px-4 mx-2 text-center hover:bg-white hover:shadow-lg hover:shadow-bgTheme-light duration-200">
                        <img src="./html_finalprojimages/js.png" alt="Javascript" className="max-h-24 h-full"/>
                        <p>The webpages can't be functional without Javascript. I've been using this language for more
                            than 1 year, making website functional, fetching data, updating DOM</p>
                    </div>
                    <div id="card"
                        className="flex flex-col justify-center items-center gap-4 max-w-[80vw] md:max-w-[20rem] bg-bgTheme-fadedLight text-bgTheme-dark rounded-md py-6 px-4 mx-2 text-center hover:bg-white hover:shadow-lg hover:shadow-bgTheme-light duration-200">
                        <img src="./html_finalprojimages/node.png" alt="Node js" className="max-h-24 h-full"/>
                        <p>The dynamic applications can't be rendered without a backend server. With Node js, I've
                            established local servers to send data from database upon requests</p>
                    </div> */}
                    
                   </div>
                </div>
            </div>
        </section>
    );
}
export default Skills;