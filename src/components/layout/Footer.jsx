import { useState } from "react";
import { Link } from "react-router-dom";
import { navlinks } from "@/data/layout";


export default function Footer() {



  return (
    <footer className="bg-gray-950 px-6 pt-5 pb-8">
      <div className="flex flex-wrap items-center justify-between gap-8">

      <div>
       <h2 className="text-xl text-white">
        Hemish Patel
      </h2> 
      <p className="text-sm text-gray-500">
        Software Engineering Student
      </p>
      </div>
      <div className="flex flex-wrap items-center gap-6">
        {navlinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-sm text-gray-500 hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      </div>
      <hr className="my-8 border-t-1 border-gray-600" />
      
      <p className=" text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Hemish Patel.
      </p>
    </footer>
  );
}
