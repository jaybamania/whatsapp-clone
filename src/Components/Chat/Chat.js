import React, { useEffect, useState } from 'react'
import {
    Avatar , 
    IconButton
} from '@material-ui/core';
import './Chat.css'


import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchOutlined from '@material-ui/icons/SearchOutlined'

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[])

    const sendMessage = (e) =>{
        e.preventDefault()
        console.log("You typed>> ", input)
        setInput("")
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton >
                        <SearchOutlined />
                    </IconButton>
                    <IconButton >
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && "chat__receiver"}`}>
                <span className="chat__name">
                        Jaykumar H.
                    </span>
                    Hey Guys
                    <span className="chat__timestamp">
                        1:00am
                    </span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    type="text" placeholder="Type a message" />
                    <button 
                    onClick={sendMessage}
                    type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat