import React from 'react';
import './../index.css';


function Heading(props: any){

  return (
    <h1 className="heading">
    {props.heading}
    </h1>
  )
}
export default Heading;
