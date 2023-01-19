import React,{useState} from 'react'
import './Messages.css'
import SendIcon from '@mui/icons-material/Send';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import{useDispatch} from'react-redux'
import MessageModal from '../../../../../Modals/MessageModals';
import { newMessage } from '../../../../../redux/message-reducer';
import SideBar from '../../SideBar';

import InputEmoji from 'react-input-emoji'



function Chat() {
  const dispatch = useDispatch()
    const[message,setMessage]=useState(new MessageModal("",))
    
    return (
  <>
    
    <div className='chat-page'>
    <SideBar/>
    <div className='chat-page'>
    <div className="Left-side-chat">
    
        
        <div className="Chat-container">
        <div className="Search">
          <input type="text" placeholder="#Explore"/>
          <div className="s-icon">
          <ManageSearchIcon />
          </div>
      </div>
          <div className="Chat-list">
           
              <div>
                
                  
              </div>
            
          </div>
        </div>
      </div>
      <div className="ChatBox-container">
        
          <>
            {/* chat-header */}
            <div className="chat-header" style={{backgroundColor:"black",color:"white"}}>
              <div className="follower">
                <div classname="header-name" style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"3rem"}}>
                  <img
                    src="DSC_2342.jpg"
                    alt="Profile"
                    className="followerImage"
                    style={{ width: "50px", height: "50px",borderRadius:"50%" }}
                  />
                  <div className="name" style={{ fontSize: "1.5rem",fontWeight:"bold" }}>
                    <span style={{font:"Bold"}}>
                      hicham
                    </span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "95%",
                  border: "0.1px solid #ececec",
                  marginTop: "20px",
                }}
              />
            </div>
            {/* chat-body */}
            <div className="chat-body" >
              
                <>
                  <div 
                    className={""}
                  >
                    <span></span>{" "}
                    <span></span>
                  </div>
                </>
              
            </div>
            {/* chat-sender */}
            <div className="chat-sender">
              <div >+</div>
              <InputEmoji
               /* onChange={(e) => setMessage({...message, text : e.target.value})}*/
              />
              <SendIcon style={{color:"white"}} onClick={() =>dispatch(newMessage())}/>
              <AttachFileIcon style={{color:"white"}}
                type="file"
                name=""
                id=""
                
                
              />
            </div>{" "}
          </>
         
        
      </div>
      </div>
      </div>
    </>
    )
}

export default Chat