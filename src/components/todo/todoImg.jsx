import checkList from '../../assets/img/2154438.jpg';
import React from 'react'

const TodoImg = () => {
  return (
    <>
      <div className='todo_img'>
        <img src={checkList} alt="Checklist" />
      </div>
    </>
  );
}

export default TodoImg