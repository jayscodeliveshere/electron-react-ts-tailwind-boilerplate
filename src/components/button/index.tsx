import React from "react";

const Button: React.FC = () => {
  const handleClick = () => {
    window.api.send("Hello from Renderer Process!");
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      Send Message
    </button>
  );
};

export default Button;
