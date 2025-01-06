import {FaPhone,FaEnvelope} from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="bg-bgTheme-dark w-full">
            <nav className="flex max-[430px]:flex-col items-center gap-2 justify-between bg-bgTheme-dark rounded-lg p-2 text-base max-w-[1300px] mx-auto">
                <div id="brand" className="my-auto cursor-pointer mx-1">
                    <h1 className="text-xl font-semibold border border-transparent hover:border-b-white duration-300">Muhammad
                        Taha Khan</h1>
                </div>
                <div id="links" className="m-auto hidden md:block">
                    <ul className="flex gap-4">
                        <li
                            className="cursor-pointer hover:border-b active:rounded-md border border-transparent active:duration-0 active:border-b-transparent active:text-bgTheme-dark hover:me-2 hover:border-b-white duration-300 active:bg-white active:font-semibold p-2">
                            <a href="#hero" className="size-max p-2">About me</a></li>
                        <li
                            className="cursor-pointer hover:border-b active:rounded-md border border-transparent active:duration-0 active:border-b-transparent active:text-bgTheme-dark hover:mx-2 hover:border-b-white duration-300 active:bg-white active:font-semibold p-2">
                            <a href="#skills" className="size-max p-2">Skills</a></li>
                        <li
                            className="cursor-pointer hover:border-b active:rounded-md border border-transparent active:duration-0 active:border-b-transparent active:text-bgTheme-dark hover:ms-2 hover:border-b-white duration-300 active:bg-white active:font-semibold p-2">
                            <a href="#projects" className="size-max p-2">Projects</a></li>
                    </ul>
                </div>
                <div id="emailPhone" className="my-auto cursor-pointer mx-1 max-[430px]:w-full">
                    <ul className="flex max-[430px]:items-center justify-between flex-col text-sm">
                        <li className='text-md flex my-auto'>
                            <FaPhone className='px-2 size-6 min-w-8 h-auto'/>
                            <p className='my-auto'>+923062992398</p>
                        </li>
                        <li className='text-md flex my-auto'>
                            <FaEnvelope className='px-2 size-6 min-w-8 h-auto'/>
                            <p className='my-auto'>mtkinverse@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;