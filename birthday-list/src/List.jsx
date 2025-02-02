import React from 'react'
import Person from './Person';

const List = ({ dataList }) => {
  return (
    <section>
        {dataList.map((person) =>{
          return <Person key={person.id} {...person} />
        })}
    </section>
  )
}

export default List;