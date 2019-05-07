import React from 'react';
import NavBar from '../NavBar/NavBar';

class MainPage extends React.Component {
    render() {
      //<form action = "mydesigner.php" method = "get">
      //        <input type = "submit" value= "Run me now!"></input>
      //      </form>
      //<?php include 'mydesigner.php';?>
        return (
          <div className="app">
          < NavBar/>
          <section className="wrap clear col3">
          <div className="aside">
            <h2 className="h_white">SELECT STYLE</h2>
            <div className="content">
            <p> contents </p>
            </div>
          </div>
          <div className="main">
            <h2 className="h_white">SAMPLE VIEW</h2>
            <div className="content">
            <p> contents </p>
            <form action="mydesigner.php">
            <button/>
            </form>
            </div>
          </div>
          <div className="aside">
            <h2 className="h_black">MY GROUP</h2>
            <div className="content">
            <p>contents</p>
            </div>
          </div>
          </section>
        </div>


        )
    }
}

export default MainPage
