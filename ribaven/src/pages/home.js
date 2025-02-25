import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import picture from "../assets/me.png";


export function Home() {
    return (
        <div className="min-h-screen">
            {/* NAME AND PICTURE */}
            <div className="relative bg-pacifica flex flex-col justify-center items-center w-full h-screen bg-cover bg-center z-1 pl-16 pr-16">
                
                {/* Profile Picture */}
                <motion.img 
                    src={picture} 
                    alt="profile" 
                    className="w-80 h-auto rounded-full object-cover border-8 border-white shadow-lg hover:border-blue-500 transition-all duration-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />

                {/* Name */}
                <motion.h1 
                    className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center drop-shadow-2xl mt-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                >
                    Hey, I'm Ricardo Ibaven. Here you can find about me and what I've been up to :)
                </motion.h1>

                {/* White Fade Gradient at the Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-b from-transparent to-black"></div>
            </div>

            {/* CONTENT BELOW WITH BG BLACK */}
            <div className="bg-black pl-24 pr-24 relative z-0">
                {/* ABOUT*/}
                <motion.h2 
                className="text-center text-4xl font-bold text-white"
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    About
                </motion.h2>

                <motion.p 
                className="text-center text-2xl mt-5 text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                    My journey in coding combines a passion for problem-solving, computers, applications, and a drive to learn and grow. Given this drive, when I'm not coding, you'll find me doing <Link to="/interests" className="text-blue-400 hover:text-blue-700 transition-all duration-300">other things</Link>.<br/><br/>

                </motion.p>

                <motion.p 
                className="text-center text-2xl mt-5 text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    This website is a personal project of mine to practice and showcase the progress of my skills in HTML, CSS, JavaScript, version control using Git, frameworks (React, Tailwind CSS), among other skills and tools.<br/><br/>
                </motion.p>

                <motion.p 
                className="text-center text-2xl mt-5 text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                >
                    Take it as a portfolio. As I continue to develop this site, I aim to implement various features, improve its functionality, and make it more fun :)<br/><br/>
                </motion.p>

                <motion.p 
                className="text-center text-2xl mt-5 text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                    Feel free to explore, thank you for visiting!<br/><br/>
                </motion.p>
            </div>

            {/* PROJECTS */}
            <motion.h2 
                className="text-center text-4xl font-bold mt-10 text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
                Projects
            </motion.h2>
            <motion.div 
                className="flex justify-center items-center mt-10 pb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
                <Link to="/projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                    View Projects
                </Link>
            </motion.div>
        </div>
    );
}
