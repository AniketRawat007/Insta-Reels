import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import user from '../assets/avatar.png'
function Profile() {
  return (
    <div>
        <Navbar/>
        <div className='profile-intro'>
            <div style={{height:"8rem", width:"8rem" , borderRadius:"50%"}}>
            <Image src={user}/>
            </div>
            <div>
                <h1>Aniket Rawat</h1>
                <h1>No of Posts-10</h1>
            </div>
            
        </div>
        <div className='profile-posts'>

        </div>
    </div>
  )
}

export default Profile