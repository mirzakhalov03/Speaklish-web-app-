import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import GreetingMock from '../../components/greetingMock/GreetingMock'
import Calendar from '../../components/calendar/Calendar'
import NavBar from '../../components/Navbar/NavBar'

const Home = () => {
  return (
    <div className='p-[16px]'>
        <TopBar/>
        <GreetingMock/>
        <Calendar/>
    </div>
  )
}

export default Home