import React from 'react';
import store from './Store';
import ChatCard from './Chat-card'
import participants from './Store'
import './chat-list.css';


function ChatList() {
  
  return (
    
      <div className="chat-list">

        {store.chatEvents.map( listItem => (
            
            <ChatCard message={listItem.message} type={listItem.type} time={listItem.time} participantId={listItem.participantId}/>

          ))

        }

      </div>

  );

}

export default ChatList;