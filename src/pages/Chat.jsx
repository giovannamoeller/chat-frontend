import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../hooks/UserContext';
import SendMessageIcon from '../assets/send-message.svg';
import socket from '../services/socket';
import { v4 as uuidv4 } from 'uuid';

const Container = styled.main`
  height: 100vh;
  aside {
    background: #8353E9;
    position: absolute;
    right: 0;
    height: 100vh;
    color: #FFF;
    width: 18%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    h1 {
      font-weight: 500;
      margin: 3rem 0;
      text-align: center;
    }
    
    ul {
      padding-left: 1rem;
    }

    li {
      list-style: none;
      display: flex;
      align-items: center;
      margin: 24px 0;
      font-size: 90%;
      
      .icon {
        width: 24px;
        font-size: 80%;
        height: 24px;
        border-radius: 50%;
        background: #AA84FC;

        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
      }
    }
  }

  section {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 82%;
    align-items: center;

    .messages {
      background: #F9F6FE;
      width: 90%;
      height: 80%;
      margin-top: 3rem;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      padding: 2rem;
      overflow: auto;

      p {
        margin: 0.5rem 0;
        
        font-size: 85%;
        display: flex;
        flex-direction: column;
        
        span {
          &.msg {
            color: #5e5e5e;
            background: #FFF;
            padding: 0.3rem 1rem;
            border-radius: 4rem;
            display: inline;
            margin-top: 0.4rem;
          }
        }
      }
      
      & .atualUser {
        align-self: flex-end;
      }
      
      & .otherUser {
        align-self: flex-start;
      }
    }

    form {
      width: 90%;
      display: flex;
      border-bottom: 1px solid #8353E9;
      margin-top: 2rem;
      padding-bottom: 0.5rem;

      input {
        width: 100%;
        outline: none;
        color: #797979;

        &::placeholder {
          color: #C2C2C2;
        }
      }

      button {
        background: none;
        cursor: pointer;

        img {
          width: 1.8rem;
        }
      }
    }

  }
`;

export function Chat() {
  const { user } = useContext(UserContext);
  const history = useHistory();

  const [atualMessage, setAtualMessage] = useState(''); // message sent now
  const [messages, setMessages] = useState([]); // all messages
  const [atualUser, setAtualUser] = useState(''); // atual user logged in
  const [activeUsers, setActiveUsers] = useState([]); // array of active users

  if(!user) history.push('/');

  useEffect(() => {

    socket.on('activeUsers', users => {
      setActiveUsers(users);
    });

    const findUser = activeUsers.find(user => user.id === socket.id);
    console.log(findUser);
    setAtualUser(findUser);

    /*return () => {
      socket.off('activeUsers');
    }*/

    socket.on('receivedMessages', allMessages => {
      //setMessages([...messages, message]);
      setMessages(allMessages);
    });

  }, [activeUsers]);

  function sendMessage(e) {
    e.preventDefault();

    const message = {
      messageId: uuidv4(),
      userId: socket.id,
      message: atualMessage
    }
    
    setMessages([...messages, message]);

    socket.emit('sendMessage', message);

    setAtualMessage('');    
  }

  function getCurrentUser(id) {
    const findUser = activeUsers.find(user => user.id === id);
    return findUser;
  }


  return (
    <Container>
      <aside>
        <div>
          <h1>Usuários ativos</h1>
          <ul>
            {activeUsers.map(({id, userName}) => {
              return (
                <li key={id}>
                  <div className="icon">{userName[0].toUpperCase()}</div>
                  {userName}
                </li>
              )
            })}
          </ul>
        </div>
      </aside>

      <section>
        <div className="messages">
          {messages.length !== 0 && messages.map(({messageId, userId, message}) => {
            return atualUser.id === userId ? 
              (
                <p className="atualUser" key={messageId}><span>{atualUser.userName}</span><span class="msg">{message}</span></p>
              ) 
              : 
              (
                <p className="otherUser" key={messageId}><span>{getCurrentUser(userId).userName}</span><span class="msg">{message}</span></p>
              )
          })}
        </div>
        <form action="" onSubmit={sendMessage}>
          <input type="text" name="message" placeholder="Digite aqui sua mensagem" onChange={(e) => setAtualMessage(e.target.value)} value={atualMessage} />
          <button type="submit">
            <img src={SendMessageIcon} alt="Send Message" />
          </button>
        </form>
      </section>
    </Container>
  )
}