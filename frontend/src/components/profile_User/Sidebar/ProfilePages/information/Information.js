/*import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import SideBar from '../SideBar';
import './InformationStyle.css'

function Information() {
  return (
    <div className="container mx-auto">
        

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className= "" style={{ width: "45%", paddingTop: '3em'}}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Profile</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                You can update the details.
            </span>
          </div>

          <form className='py-1' >
              <div className='profile flex justify-center py-4'>
                  <label htmlFor="profile">
                    <img src=""className="" alt="avatar" />
                  </label>
                  
                  <input  type="file" id='profile' name='profile' />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                <div className="name flex w-3/4 gap-10">
                  <input  className="" type="text" placeholder='FirstName' />
                  <input  className="" type="text" placeholder='LastName' />
                </div>

                <div className="name flex w-3/4 gap-10">
                  <input  className="" type="text" placeholder='Mobile No.' />
                  <input className="" type="text" placeholder='Email*' />
                </div>

               
                  <input className="" type="text" placeholder='Address' />
                  <button className="" type='submit'>Update</button>
               
                  
              </div>

              <div className="text-center py-4">
                <span className='text-gray-500'>come back later? <button  className='text-red-500' to="/">Logout</button></span>
              </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Information*/