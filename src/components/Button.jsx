"use client";

const Button = ({dataFn}) => {
  return (
    <button
      onClick={() => dataFn()}
      id="new-quote"
      className="text-4xl"
    >
      New quote
    </button>
  );
};

export default Button;
