import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import speaklishIcon from '../../images/bot-logo.svg'

const SpeakingMock = () => {
  return (
    <div className='p-4'>
        <TopBar/>
        <div className='flex items-center justify-center mt-[130px]'>
            <div className='flex flex-col items-center  w-[80%] p-2 rounded-xl shadow-md'>
                <img src={speaklishIcon} alt="" />
                <h2>This feature will soon be added</h2>
            </div>
        </div>
    </div>
  )
}

export default SpeakingMock