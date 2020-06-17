import React from "react";
import "./chat-card.css";
import store from './Store'


function ChatCard(props) {

    let cardMessage
    let cardTime
    let avatar
    let name
    let cardAction

    if (props.message !== undefined) {

        cardMessage = props.message


        if (props.time) cardTime = new Date(props.time).toString()

        store.Participants.forEach(item => {

            let itemId = item.id
            let participantId = props.participantId

            if (itemId === participantId) {

                avatar = item.avatar
                name = item.name
            }
        })

    } else {

        store.Participants.forEach(item => {

            let itemId = item.id
            let participantId = props.participantId

            if (itemId === participantId) {
                name = item.name
            }
        })
        

        if (props.type === 'thumbs-up') {
            name += 'gave a ' + props.type + ' 👍'
        }
        if (props.type === 'thumbs-down') {
            name += 'gave a ' + props.type
        }
        if (props.type === 'join') {
            name += ' joined'
        }
        if (props.type === 'leave') {
            name += ' left'
        }
        if (props.type === 'join-stage') {
            name += ' joined the stage'
        }
        if (props.type === 'leave-stage') {
            name += ' left the stage'
        }
        if (props.type === 'clap') {
            name += ' clapped'
        }
        if (props.type === 'raise-hand') {
            name += ' raised their hand'
        }
    }

    return (
        <div className="chat-card">
            <img className='chat-avatar' src={avatar} />
            <span>{name}</span>
            <span>{cardMessage}</span>
            <span>{cardTime}</span>
        </div>
      );

}

export default ChatCard;
