import React from 'react';


function Article(props: any){
  return (
    <article className="viewer">
    <p>{props.postDetails.body}</p>
    </article>
  )

}
export default Article;
