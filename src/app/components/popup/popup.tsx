import React from "react";

function Popup(props: any) {
  return (
    <div className="absolute bottom-0 left-0 w-[100vw] h-[100vh] bg-black-transparent flex justify-center items-center">
      {props.children}
    </div>
  );
}

export default Popup;
