import React from 'react';
import { useState } from 'react';

class Clock extends React.Component{
  state = {date: new Date(), locale: 'bn-BD', timeZone: 'Asia/Dhaka'};
  componentDidMount(){
    this.clockTimer = setInterval(()=> this.tick(), 1000)
  }
  // componentWillUnmount(){
  //   clearInterval(this.clockTimer)
  // }
  handleClick = ()=>{
    this.setState({
      locale: 'en-US',
      timeZone: 'Asia/Kolkata',
    })
  }
  handleClickBD = ()=>{
    this.setState({
      locale: 'bn-BD',
      timeZone:'Asia/Dhaka',
    })
  }
  handleClickPK=()=>{
    this.setState({
      locale: "en-US",
      timeZone: 'Asia/Karachi',
    })
  }
  tick(){
    this.setState({
      date: new Date(),
    });
  }
  render() {
    const {date, locale, timeZone} = this.state;
    return (
      <>
        <h1 className='heading'>
          <span>
            {date.toLocaleTimeString(locale, {timeZone})}
          </span>
        </h1>
        <button onClick={this.handleClick}>show INDIA Time</button>
        <button onClick={this.handleClickBD}>Click To show Bangla Time</button>
        <button onClick={this.handleClickPK}>Pakistani Time</button>
      </>
    );
  }
  
}
export default Clock;
