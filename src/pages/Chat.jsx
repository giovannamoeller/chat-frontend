import { useContext } from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { UserContext } from '../hooks/UserContext';


const Container = styled.main`

  background: #8353E9;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  section {
    background: #FFF;
    width: 32rem; 
    height: 60vh;
    border-radius: 8px;
    box-shadow: 0px 100px 84px rgba(37, 37, 37, 0.08), 0px 43.7031px 47.9572px rgba(37, 37, 37, 0.0541992), 0px 27.1359px 36.1644px rgba(37, 37, 37, 0.0427155), 0px 18.6139px 29.0028px rgba(37, 37, 37, 0.0341925), 0px 12.7537px 22.7903px rgba(37, 37, 37, 0.0264222), 0px 8.04144px 16.2178px rgba(37, 37, 37, 0.0184648), 0px 3.88326px 8.71226px rgba(37, 37, 37, 0.00978188);
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  h1 {
    color: #8061FC;
    font-weight: 500;
  }

  input {
    height: 56px;
    width: 72%;
    margin: 32px 0;
    padding-left: 16px;
    border: 1px solid #8061FC;
    border-radius: 8px;
    outline: none;
    color: #444444;

    &::placeholder {
      color: rgba(188, 188, 188, 1);
    }
  }
`;


export function Chat() {

  const { user } = useContext(UserContext);
  console.log(user);

  return (

    <Container>
      oi chat
    </Container>
  )
}