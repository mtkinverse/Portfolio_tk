const Hero = () => {
    return(
        <section id="hero">
            <div
                className="flex flex-col min-[875px]:flex-row items-center justify-around bg-bgTheme-dark text-white my-10 mx-2 py-5 min-[875px]:py-2 rounded-md shadow-2xl shadow-white">
                <div id="leftHero" className="m-4">
                    <img src="/myPic.jpg" alt="Profile picture"
                        className="max-h-[20rem] h-[18rem] min-[875px]:h-auto min-[875px]:rounded-sm rounded-full border border-white" style={{'boxShadow' : 'rgba(255, 255, 255, 0.5) 0px 2px 5px 2px'}} />
                </div>
                <div id="rightHero" className="min-[875px]:max-w-[70%] max-w-[80%] my-4 min-[875px]:my-auto text-center min-[875px]:text-start mx-2 p-2">
                    <h1 className="text-4xl my-4">Hi, I'm Taha !</h1>
                    <p className="text-center min-[875px]:text-start">
                        Highly motivated Computer Science student at NUCES-FAST Karachi. Currently I’ve completed my 4th semester with a strong academic record. I'm passionate about technology and possess a strong foundation in computer science principles. I've actively participated in various <a href="#projects" className="font-semibold"><i>projects</i></a> that allowed me to gain practical experience and hone my problem-solving skills. Eager to learn and grow in a fast-paced environment. I'm a sincere and dedicated individual who thrives in collaborative settings.
                    </p>
                </div>
            </div>
        </section>
    );
}
export default Hero;