import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center">
      <span className="animate-bounce-slow text-7xl">L</span>
      <span className="animate-bounce-delay-1 text-7xl">o</span>
      <span className="animate-bounce-delay-2 text-7xl">a</span>
      <span className="animate-bounce-delay-3 text-7xl">d</span>
      <span className="animate-bounce-delay-4 text-7xl">i</span>
      <span className="animate-bounce-delay-5 text-7xl">n</span>
      <span className="animate-bounce-delay-6 text-7xl">g</span>
      <span className="animate-bounce-delay-7 text-7xl">.</span>
      <span className="animate-bounce-delay-1 text-7xl">.</span>
      <span className="animate-bounce-delay-2 text-7xl">.</span>
    </div>
  );
};

export default LoadingAnimation;
