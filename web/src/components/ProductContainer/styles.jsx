import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: relative;

  min-width: 360px;
  width: fit-content;
  height: 160px;

  padding: 15px 45px 15px 0px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

  display: flex;
  align-items: center;

  img {
    height: 100%;
  }

  main {
    height: 60%;

    margin-left: 40px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h4 {
      font-size: 14px;
      font-weight: bold;
      line-height: 1;

      height: 28px;

      overflow: hidden;
      text-overflow: ellipsis;
    }

    span {
      display: flex;
      align-items: flex-end;

      svg {
        margin-left: 5px;
      }
    }

    p {
      color: #888;
      font-size: 16px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        background-color: #33a0ff;
        border: 0;

        width: 62px;
        height: 26px;

        transition: 200ms;

        display: flex;
        align-items: center;
        justify-content: center;

        & + button {
          margin-left: 0px;
        }

        &:hover {
          background-color: ${darken(0.06, '#33a0ff')};
        }
      }
    }
  }
`;
