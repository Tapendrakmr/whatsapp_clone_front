import React from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat'
import {DonutLarge,MoreVert,Chat, SearchOutlined} from "@material-ui/icons"
import {Avatar,IconButton} from "@material-ui/core"
import profilePic from "./images/profile.jpg"
function Sidebar() {
    return (
        <div className='sidebar'>
             
             <div className="sidebar__header">
                {/* Avatar */}
                <Avatar src={profilePic}/>
                 <div className="sidebar__headerRight">

                    {/* firstIcoen */}
                    <IconButton>
                    <DonutLarge/>
                    </IconButton>
                    {/* ChatIcon */}

                    <IconButton>
                        <Chat/>
                    </IconButton>
                    {/* MoreVerticon */}
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                 </div>
             </div>
             <div className="sidebar__search">
                  <div className="sidebar__searchContainer">
                <SearchOutlined/>  
                 <input placeholder="Search or start new chat" type="text"/>
                  </div>
             </div>


             <div className="sidebar__chats">
                 <SidebarChat/>
                 <SidebarChat/>
                 <SidebarChat/>

             </div>
        </div>
    )
}

export default Sidebar
