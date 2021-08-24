import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../hooks/UserContext';

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
    align-items: center;


    h1 {
      font-weight: 500;
      margin: 3rem 0;
    }

    ul {
        padding: 0;
        display: inline;
    }

    li {
      list-style: none;
      display: flex;
      align-items: center;
      margin: 24px 0;

      .icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #AA84FC;

        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
      }
    }
  }

  section {
    display: flex;
    height: 100%;
    width: 82%;

    align-items: center;
    justify-content: center;

    .messages {
      background: #efe9fa;
      width: 90%;
      height: 90%;
      border-radius: 8px;
    }

  }
`;

export function Chat() {
  const history = useHistory();
  const { user } = useContext(UserContext);

  const [activeUsers, setActiveUsers] = useState(['Giovanna', 'Leonardo']); // array of active users

  if(!user) history.push('/');

  return (
    <Container>
      <aside>
        <div>
          <h1>Usuários ativos</h1>
          <ul>
            {activeUsers.map(user => {
              return (
                <li>
                  <div className="icon">{user[0]}</div>
                  {user}
                </li>
              )
            })}
          </ul>
        </div>
      </aside>

      <section>
        <div className="messages"></div>
      </section>
    </Container>
  )
}