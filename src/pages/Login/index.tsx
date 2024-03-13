import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex w-full h-screen items-center flex-col">
      <Link to={"/"}>
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
          Dev
          <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
            Link
          </span>
        </h1>
      </Link>
    </div>
  );
};

export default Login;
