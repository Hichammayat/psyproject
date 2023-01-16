import React from 'react'
import"./PsyList.css"
import Footer from '../../../Footer/Footer'
const PsyList = () => {
  return (
    <>
    <div className="List-profile">
      <div className="Profils">
        
          <div className="Profile" >
            <div className="img">
              <img src="DSC_2342.jpg" alt="" />
            </div>
            <div className="Profile-content">
              
                <h1>hicham mayat</h1>
              
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!</p>
              
              <button>choisir ce psychologue</button>
              
            </div>
          </div>
        
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default PsyList