import React, { useEffect } from "react";
import FormDemo from "../components/Form";

const About = ({ darkMode }) => {
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="h-screen dark:bg-gray-900 mx-auto flex justify-center">
      <FormDemo />
    </div>
  );
};

export default About;
