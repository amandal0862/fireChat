import React, {useState, useEffect} from 'react'
// import { db } from '../firebase'
import SignOut from './SignOut'

function Chat() {
  // const [messages,setMessages] = useState([])
  // useEffect(() => {
  //   db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
  //     setMessages(snapshot.docs.map(doc => doc.data()))
  //   })
  // }, [])
  return (
    <div>
      <SignOut/>
      <h1>You are signed In</h1>
      {/* {messages.map()} */}
    </div>
  )
}

export default Chat
