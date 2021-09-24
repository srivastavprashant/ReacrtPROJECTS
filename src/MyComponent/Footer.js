import React from "react";

export const Footer = () => {
  let footercss = {
    position: "absolute",
    top: "90vh",
    width: "100%",
    borderTop:"3px solid red"
  };
  return (
    <footer className="bg-dark text-light py-3" style={ footercss }>
      <p className="text-center ">Copyright &copy; MyToDoList.com</p>
    </footer>
  );
};
