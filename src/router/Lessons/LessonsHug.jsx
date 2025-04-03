import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import LessonTab from '../../components/singleLessonTab/LessonTab'

const LessonsHug = () => {
    const lessons = [
        { id: '1', status: 'unlocked'},
        { id: '2', status: 'locked'},
        { id: '3', status: 'locked'},
        { id: '4', status: 'locked'},
        { id: '5', status: 'locked'},
        { id: '6', status: 'locked'},
        { id: '7', status: 'locked'},
        { id: '8', status: 'locked'},
    ]


  return (
    <div className='p-[16px]'>
        <TopBar/>
        <div className="lessonsHug flex flex-col gap-5">
            <h2 className='text-center text-[20px] font-[600] tracking-wider text-[#181D25] mt-5'>General English</h2>
            {
                lessons.map((lesson) => (
                    <LessonTab key={lesson.id} lessonNumber={lesson.id} status={lesson.status}/>
                ))
            }
        </div>
    </div>
  )
}

export default LessonsHug