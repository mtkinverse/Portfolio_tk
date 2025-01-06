const Projects = () => {

    const projects = [
        {label:'Konnect App', picture:'/konnect.png', gitLink:'https://github.com/mtkinverse/Konnect', text:'A Computer Scientist become more familiar with computing problems and solutions when it gets familiar with different data structures. This app uses different data structures to create an efficient network that connects people to solve problems. Graphs are a key data structure that makes this network work. Users can log in or sign up to use the app and post their problems. They can also help others by responding to their problems.'},
        {label:'Pong Game', picture:'/pongGame.png', gitLink:'https://github.com/mtkinverse/code_tk/tree/main/project', text:'Being the first ever programming and developing experience, this project was subjected to very much excitement and quality of work. It is a CLI based game with different user profiles designed in C language. Users have to use a pad to controll the ball to break all the blocks or to defeat the opponent'},
        {label:'Vertex', picture:'/vertex.jpg', gitLink:'https://github.com/mtkinverse/code_cpp/tree/main/Project', text:'Vertex , a platformer based game, resides on the concepts of Object-oriented programming. Here we moved one step forward to develop a GUI utilizing SFML library. This game has different characters and a very well formation'},
        {label:'BillEase', picture:'/billEase2.png', gitLink:'https://mtkinverse.github.io/utility-app/', text:`BillEase is a web-app designed using React js. With the help of this app, you can track different types of slips, download, and use them. BillEase is also mobile friendly to enable portable use. However, its new features are under process`},
    ]
    
    return (
        <section id="projects">
            <div className="bg-bgTheme-dark rounded-lg mx-2 my-4 py-6 flex flex-col items-center gap-6">
                <div className="text-center space-y-5 max-w-[80%] py-2">
                   <h1 className="text-4xl text-white">Projects</h1>
                   <p>I've gained experience of developing different projects with different goals using different technoligies. Some of them are below. <i className="font-semibold">Click on the projects</i> to naviagte to details</p>
                </div>

                {projects.map((project,index) => (
                    <a key={'project' + index} href={project.gitLink} target="_blank">
                        <div className="max-w-[80%] mx-auto my-2 flex flex-wrap-reverse gap-4 justify-around items-center fadedLight hover:shadow-md hover:shadow-white rounded-lg py-4 px-2">
                            <div id="textProj" className="min-[1075px]:max-w-[50%] max-[1075px]:text-center my-6 p-2">
                                <h1 className="text-2xl font-semibold text-bgTheme-dark">{project.label}</h1>
                                <p>{project.text}</p>
                            </div>
                            <div id="projImg" className="min-[1075px]:max-w-[40%] my-2">
                                <img src={project.picture} alt={project.label} className="h-full max-h-[15rem] border-1 border-bgTheme-dark shadow shadow-bgTheme-dark rounded-md"/>
                            </div>
                        </div>
                    </a>
                    
                ))}

                {/* 
                <div className="max-w-[80%] mx-auto my-2 flex flex-wrap-reverse gap-4 justify-around items-center bg-bgTheme-fadedLight text-bgTheme-dark hover:shadow-md hover:shadow-white hover:bg-white rounded-lg py-4 px-2">
                    <div id="textProj" className="min-[1075px]:max-w-[50%] max-[1075px]:text-center my-6 p-2">
                        <h1 className="text-2xl font-semibold text-bgTheme-dark"><a href="https://github.com/mtkinverse/code_tk/tree/main/project" target="_blank" className="border border-transparent hover:border-b-bgTheme-dark duration-200"> Pong Game </a></h1>
                        <p>Being the first ever programming and developing experience, this project was subjected to very much excitement and quality of work. It's a CLI based game with different user profiles designed in C language. Users have to use a pad to controll the ball to break all the blocks or to defeat the opponent</p>
                    </div>
                    <div id="projImg" className="min-[1075px]:max-w-[40%] my-2">
                        <img src="./html_finalprojimages/pongGame.png" alt="Game image" className="h-full max-h-[15rem] border-1 border-bgTheme-dark shadow shadow-bgTheme-dark rounded-md"/>
                    </div>
                </div>

                <div className="max-w-[80%] mx-auto my-2 flex flex-wrap-reverse gap-4 justify-around items-center bg-bgTheme-fadedLight text-bgTheme-dark hover:shadow-md hover:shadow-white hover:bg-white rounded-lg py-4 px-2">
                    <div id="textProj" className="min-[1075px]:max-w-[50%] max-[1075px]:text-center my-6 p-2">
                        <h1 className="text-2xl font-semibold text-bgTheme-dark"><a href="https://github.com/mtkinverse/code_cpp/tree/main/Project" target="_blank" className="border border-transparent hover:border-b-bgTheme-dark duration-200">Vertex</a></h1>
                        <p>Vertex , a platformer based game, resides on the concepts of Object-oriented programming. Here we moved one step forward to develop a GUI utilizing SFML library. This game has different characters and a very well formation</p>
                    </div>
                    <div id="projImg" className="min-[1075px]:max-w-[40%] my-2">
                        <img src="./html_finalprojimages/vertex.jpg" alt="Game image" className="h-full max-h-[15rem] border-1 border-bgTheme-dark shadow shadow-bgTheme-dark rounded-md"/>
                    </div>
                </div>

                <div className="max-w-[80%] mx-auto my-2 flex flex-wrap-reverse gap-4 justify-around items-center bg-bgTheme-fadedLight text-bgTheme-dark hover:shadow-md hover:shadow-white hover:bg-white rounded-lg py-4 px-2">
                    <div id="textProj" className="min-[1075px]:max-w-[50%] max-[1075px]:text-center my-6 p-2">
                        <h1 className="text-2xl font-semibold text-bgTheme-dark"><a href="https://mtkinverse.github.io/utility-app/" target="_blank" className="border border-transparent hover:border-b-bgTheme-dark duration-200">BillEase</a></h1>
                        <p>BillEase is a web-app designed using <b>React js</b>. With the help of this app, you can track different types of slips, download, and use them. BillEase is also mobile friendly to enable portable use. However, it's new features are under process</p>
                    </div>
                    <div id="projImg" className="min-[1075px]:max-w-[40%] my-2 flex gap-2">
                        <img src="./html_finalprojimages/billEase2.png" alt="Web Image" className="h-full max-h-[15rem] border-1 border-bgTheme-dark shadow shadow-bgTheme-dark rounded-md"/>
                    </div>
                </div>

                <div className="max-w-[80%] mx-auto my-2 flex flex-wrap-reverse gap-4 justify-around items-center bg-bgTheme-fadedLight text-bgTheme-dark hover:shadow-md hover:shadow-white hover:bg-white rounded-lg py-4 px-2">
                    <div id="textProj" className="min-[1075px]:max-w-[50%] max-[1075px]:text-center my-6 p-2">
                        <h1 className="text-2xl font-semibold text-bgTheme-dark"><a href="https://github.com/mtkinverse/Konnect" target="_blank" className="border border-transparent hover:border-b-bgTheme-dark duration-200">Konnect app</a></h1>
                        <p>A Computer Scientist become more familiar with computing problems and solutions when it gets familiar with different data structures. This app uses different data structures to create an efficient network that connects people to solve problems. Graphs are a key data structure that makes this network work. Users can log in or sign up to use the app and post their problems. They can also help others by responding to their problems.</p>
                    </div>
                    <div id="projImg" className="min-[1075px]:max-w-[40%] my-2">
                        <img src="./html_finalprojimages/konnect.png" alt="Game image" className="h-full max-h-[15rem] border-1 border-bgTheme-dark shadow shadow-bgTheme-dark rounded-md"/>
                    </div>
                </div> */}
                
            </div>

        </section>
    );
}
export default Projects;