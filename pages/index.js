import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
 
  return (
    <div className="mt-52 max-w-5xl mx-auto ">
      <div className="flex flex-col items-start  space-y-4">
        <p className="text-5xl font-semibold">Hi, I am Mukhtar Amin</p>
        <p className="text-3xl font-light">Full-Stack Web Developer</p>
        <p className="text-lg font-extralight"><span className=" border-b-2 border-pink-600"><Link  href="/contact" >Contact me </Link></span>
         or read <span className="border-b-2 border-blue-600"><Link  href="/about" > About me</Link></span></p>
      </div>
     
       
    </div>
  );
}
