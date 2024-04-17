import React, { useState } from "react";

interface Props {
  children: string;
  maxChars?: number; //The ?: indicates an optional value.
}

const Expandablebutton = ({ children, maxChars = 100 }: Props) => {
  const [isExpand, setIsExpand] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpand ? children : children.substring(0, maxChars); //Summerized the text! It means it will start from 0 to the maxChars.
  return (
    <p>
      {text}...
      <button onClick={() => setIsExpand(!isExpand)}>
        {isExpand ? "Less" : "More"}
      </button>
    </p>
  );
};

export default Expandablebutton;

//To determine whether the string component is summerized or not, we have to check its state. So, we will use 'useStates'
