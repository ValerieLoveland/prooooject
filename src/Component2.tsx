import * as React from "react";

export const Component2: React.FC = () => {
  const handleClick = () => {
    alert("Unsolved Mysteries");
  };

  return <button onClick={handleClick}>Click for important message</button>;
};
