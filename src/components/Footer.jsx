const Footer = ({footerRef}) => {
    return (
        <div className="bg-bgTheme-dark w-full" ref={footerRef}>
            <footer className="max-w-[1300px] mx-auto">
                <div className="flex flex-wrap space-y-0 justify-between">
                    <div id="footerLeft" className="flex p-2 my-auto mx-2 max-[1000px]:w-full max-[1000px]:text-center">
                        <ul className="flex flex-col mx-auto max-[404px]:space-y-2 justify-around">
                            <li className="text-3xl font-semibold">Muhammad Taha Khan</li>
                            <li className="text-3xl font-semibold">CS Junior @ FAST</li>
                        </ul>
                    </div>
                    <div id="footerRight" className="flex p-2 my-auto mx-2 max-[1000px]:w-full max-[1000px]:text-center">
                        <ul className="mx-auto my-auto">
                            <li className="text-2xl max-[1000px]:my-2 font-semibold">Contact:</li>
                            <ul className="flex max-[596px]:flex-col gap-2 min-[596px]:gap-6 text-xl">
                                <li>mtkinverse@gmail.com</li>
                                <li>+92 3062992398</li>
                                <li><a href="https://www.linkedin.com/in/taha-khan-259106257/" target="_blank">Linkedin</a></li>
                                <li><a href="https://github.com/mtkinverse/" target="_blank">Github</a></li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Footer;