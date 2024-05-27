import React,{useState} from 'react'
import Card from "./Card"

export default function Cards(props) {
    let courses=props.courses;
    let category=props.category;
    const[likedCourses,setLikedCourses]=useState([]);

    function getcources(){
        if(category==="All"){
        let allCources=[]; 
        Object.values(courses).forEach(array=>{
            array.forEach(CourseData=>{
                allCources.push(CourseData);
            })
        })
        // console.log(allCources);
        return allCources;
    }
    else{
        return courses[category];
    }
    }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getcources().map((course)=>(
            <Card key={course.key} likedCourses={likedCourses} setLikedCourses={setLikedCourses} course={course}/>
        ))
      }
    </div>
  )
}
