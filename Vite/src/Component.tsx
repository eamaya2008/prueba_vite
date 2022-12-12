import React, { useState } from "react";
type AppProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Component: React.FC<AppProps> = ({onClick}) => {

  const styles: React.CSSProperties = {
    display: "flex",
    marginTop: "100px",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  }


  return (
    <div style={styles}>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default Component;
