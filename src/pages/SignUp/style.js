import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.RED};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .back {
    margin-left: 85px;
    color: ${({ theme }) => theme.COLORS.RED};
    margin-top: 60px;
    display: flex;
  }

  .back a {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .back svg {
    font-size: 20px;
    
  }

 
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;

