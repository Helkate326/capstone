import React, { Component } from "react";
import Header from "../components/Header.js";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Categories from "./Categories";
import Featured from "./Featured";
import Desktop from "./Desktop";
import Intro from "./Intro";

export default function Home(props) {
  return (
    <div>
      <Intro />
      <Sidebar open={props.open} click={props.click} />
      <Header open={props.open} click={props.click} />
      <Hero />
      <Categories />
      <Featured />
      <Desktop />
    </div>
  );
}
