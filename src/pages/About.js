import React, { useEffect } from "react";

const About = ({ darkMode}) => {
    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
      }, [darkMode]);
    
    return (
        <div className="h-screen dark:bg-gray-900">
            <h1 className="text-4xl dark:text-white">About</h1>
        </div>
    );
}

export default About;