import React, { useState } from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

const SingleQuestion = ({id, title, info, activeId, toggleQuestion}) => {
//  const [showInfo, setShowInfo] = useState(false);
const isActive = id === activeId
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={()=>
          toggleQuestion(id)}  // {setShowInfo(!showInfo)}
          >
          {isActive ? <AiOutlineMinus/>: <AiOutlinePlus/>} {/* showInfo if the useState used */}
        </button>
      </header>
     {isActive && <p>{info}</p>} {/* showInfo if the useState used */}
    </article>
  )
}

export default SingleQuestion;