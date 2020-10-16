import React, { useEffect,useState } from 'react';
import Pusher from 'pusher-js'
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import axios from './axios'

function App() {

  const [messages,setMesages]=useState([])
  useEffect(()=>{
    axios.get("/messages/sync").then((respose)=>{
      setMesages(respose.data)
    })
  },[])
  


  useEffect(()=>{
    const pusher = new Pusher('f0e0d11ac894c66d20be', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessages)=> {
      // alert(JSON.stringify(newMessages));
      setMesages([...messages,newMessages])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe()
    }
  },[messages])

 console.log(messages)


  return (
    <div className="app">
      <div className="app_body">
      
     <Sidebar/>
     <Chat messageslist={messages}/>
      </div>
     
    </div>
  );
}

export default App;
