import React from "react";
import { Link } from "react-router";

const AuthHeader = () => {
  return (
    <div className=" font-comic pt-6 ">
      <Link to="/" className="cursor-pointer flex w-fit items-center">
        <img
          src="/images/fresh_table_logo-removebg-preview.png"
          alt=""
          className="w-14 "
        />
        {/* <span className="text-xl font-bold">Fresh Table</span> */}
      </Link>
    </div>
  );
};

export default AuthHeader;
