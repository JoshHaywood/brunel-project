import React from "react";

const Queue = ({ queueNumber }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-10">
      <h1 className="text-center">
        You are number <span className="font-bold">{queueNumber}</span> in the
        queue
      </h1>
    </div>
  );
};

export default Queue;
