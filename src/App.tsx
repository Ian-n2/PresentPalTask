import React, { useState, useEffect } from 'react';
import AccordionItem from "./components/AccordionItem";
import Heading from "./components/Heading";
import './index.css';



function App(props: any) {

  const [state, setState] = useState(props.initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      const result:{id: number, title: string, body: string, userID: number}[] = [];

      json.forEach((record:{id: number, title: string, body: string, userID: number}) => result.push(record));

      setState({heading: state.heading, posts: result})

    })
  })

  return (
    <div className="App">
    <Heading heading={state.heading} />
    <div className="content">
    <ul className="posts">
    {state.posts.map((post: any, index: number) => {
      return (
        <ul role="listitem" className="post-card" key={index}>
        <AccordionItem title={post.title} id={post.id} />
        </ul>)
      })}
      </ul>
      </div>
      </div>
    );
  }

  export default App;
