import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex bg-purple-300 justify-between px-[200px] py-[20px]">
      <h1>Navbar</h1>
      <div className="flex">
        <h1 className="mx-20 cursor-pointer">
          <Link href="/">Crud</Link>
        </h1>
        <h1 className="cursor-pointer">
          <Link href="/S3Bucket">S3Bucket </Link>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
