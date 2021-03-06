
import React, { useState } from 'react'
import './Chat.css'
import axios from './axios'

import {Avatar,IconButton} from "@material-ui/core"
import { SearchOutlined,AttachFile,MoreVert ,InsertEmoticon,Mic } from '@material-ui/icons'


function Chat({messageslist}) {
    const [msg,setInput]=useState('')


    const sendMessage=async e=>{
        e.preventDefault()
       
        await axios.post("/messages/new",{
        message:msg,
        name:"Tapendra",
        timestamp:new Date().toLocaleTimeString(),
        received:false
       })

       setInput('')
    }
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar/>
            <div className="chat__headerInfo">
                <h3>Room name</h3>
                <p>Last seen at...</p>
            </div>
            <div className="chat__headerRight">
                  {/* firstIcoen */}
                  <IconButton>
                    <SearchOutlined/>
                    </IconButton>
                    {/* ChatIcon */}

                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    {/* MoreVerticon */}
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
            </div>
            </div>



            <div className="chat__body">
              {messageslist.map((message)=>{
                  return( 
                   
                  
                  <p key={ message._id} className={`chat__message ${message.received && "chat__reciever"}`}>
                      <span className="chat__name">{message.name}</span>
                      <span>{message.message}</span>
                      <span className="chat__timestamp">{message.timestamp}</span>
                  </p>)
              })}






               
               
            </div>
            <div className="chat__footer">
                  <InsertEmoticon/>
                  <form>
                      <input value={msg} onChange={e=>{setInput(e.target.value)}} placeholder="Type a message" type="text"/>
                      <button onClick={sendMessage} type="submit" >Send a message</button>
                  </form>
                  <Mic/>
            </div>

        </div>
  )
}

export default Chat
