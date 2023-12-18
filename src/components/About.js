import React from "react";
import Links from "./Links";
import user from "../data/user";

function isBio(value){
  if(value){
    return <p>{value}</p>
  }
  else{
    return;
  }
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {isBio(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {props.linkG} linkedin = {props.linkI} />
    </div>
  );
}

export default About;