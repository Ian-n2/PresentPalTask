import React, {useState} from 'react';
import Article from './Article';
import './../index.css';

interface AccordionItemProps {
  title: string,
  id: number,
}


const AccordionItem : React.FC<AccordionItemProps> = (props: any): React.ReactElement => {
  const [postDetails, setPostDetails] = useState<any>()
  const [postOpen, setPostOpen] = useState<boolean>(false)
  const onClickHandler = () => {
    if ( !postDetails){
      fetch('https://jsonplaceholder.typicode.com/posts/' + props.id)
      .then(response => response.json())
      .then(json => {
        setPostDetails(json)
        setPostOpen(true)
      })
    }else{
      setPostOpen(!postOpen)
    }

  }

  return (
    <>
    <button className="items" role="button"  onClick={onClickHandler}><span role="heading">{props.title}</span></button>
    {postDetails && postOpen && (
      <Article postDetails={postDetails} />
    )}
    </>
  )

}


export default AccordionItem;
