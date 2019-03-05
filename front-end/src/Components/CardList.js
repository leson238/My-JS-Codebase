import React from 'react';
import Card from './Card';

const CardList = ({students, tagChange, tagList, tagSubmit}) => {
    return (
        <div>
          {
            students.map((student, i) => {
              return (
                <>
                <Card
                    key={i}
                    pic={student.pic}
                    email={student.email}
                    firstName={student.firstName}
                    lastName={student.lastName}
                    company = {student.company} 
                    skill = {student.skill}   
                    grades = {student.grades}
                    tagChange = {tagChange}
                    tagSubmit = {tagSubmit}
                    tagList = {tagList}
                  />
                </>
              );
            })
          }
        </div>
      );
}
export default CardList;