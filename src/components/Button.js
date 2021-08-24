import styled from 'styled-components';

export const Button = styled.button`
  width: 72%;
  height: 56px;
  font-size: 16px;
  background: linear-gradient(89.88deg, #7B61FF 0.1%, #CE4FA3 99.9%);
  text-align: center;
  line-height: 50px;
  color: #FFF;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  transition: box-shadow .5s;
  margin-top: 80px;
  
  &:hover {
    box-shadow: 0px 114px 203px rgba(123, 97, 255, 0.2), 0px 52.7057px 93.8531px rgba(123, 97, 255, 0.148335), 0px 30.157px 53.7006px rgba(123, 97, 255, 0.125356), 0px 18.3051px 32.5959px rgba(123, 97, 255, 0.10799), 0px 11.0296px 19.6404px rgba(123, 97, 255, 0.0920104), 0px 6.142px 10.9371px rgba(123, 97, 255, 0.0746438), 0px 2.64163px 4.70396px rgba(123, 97, 255, 0.0516649);
  }
`;
