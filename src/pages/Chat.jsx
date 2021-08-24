import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../hooks/UserContext';

const Container = styled.main`

  min-height: 100vh;

  aside {
    background: #8353E9;
    position: absolute;
    right: 0;
    height: 100vh;
    padding: 4rem;
    color: #FFF;
    
    display: flex;
    flex-direction: column;


    h1 {
      font-weight: 500;
      margin-bottom: 16px;
    }

    ul {
        padding: 0;
        display: inline;
    }

    li {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
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
    background: #FFF;
    width: 32rem; 
    height: 60vh;
    border-radius: 8px;
    box-shadow: 0px 100px 84px rgba(37, 37, 37, 0.08), 0px 43.7031px 47.9572px rgba(37, 37, 37, 0.0541992), 0px 27.1359px 36.1644px rgba(37, 37, 37, 0.0427155), 0px 18.6139px 29.0028px rgba(37, 37, 37, 0.0341925), 0px 12.7537px 22.7903px rgba(37, 37, 37, 0.0264222), 0px 8.04144px 16.2178px rgba(37, 37, 37, 0.0184648), 0px 3.88326px 8.71226px rgba(37, 37, 37, 0.00978188);
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
      </aside>
    </Container>
  )
}