import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 220px;
  height: 320px;

  margin: 10px;

  padding: 5px;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100%;
  }

  section {
    flex: 1;
    width: 100%;
    padding: 0 10px;
    text-align: center;

    h2 {
      width: 100%;

      font-size: 14px;

      padding-top: 10px;
      margin-top: 10px;
      border-top: 1px solid #eee;
    }

    p {
      color: #888;
      font-size: 16px;
    }
  }

  footer {
    width: 100%;

    padding: 0 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 95px;
      height: 30px;

      background-color: #33a0ff;
      border-radius: 4px;
      border: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: 200ms;

      &:hover {
        background-color: ${darken(0.08, '#33a0ff')};
      }
    }
  }
`;
