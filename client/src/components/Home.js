import React, { Component } from "react";
import Header from "../components/Header.js";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Categories from "./Categories";

export default function Home(props) {
  return (
    <div>
      <Sidebar open={props.open} click={props.click} />
      <Header open={props.open} click={props.click} />
      <Hero />
      <Categories />
    </div>
  );
}
