import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  main {
    img {
      max-width: 370px;

      object-fit: cover;
      object-position: center;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 50%;

    margin-left: 45px;

    h2 {
      font-size: 24px;
      margin-bottom: 45px;
    }

    p {
      font-size: 24px;
      color: #888;

      margin-bottom: 15px;
    }

    section {
      display: flex;

      button {
        height: 40px;

        margin-top: 15px;
        padding: 5px 25px;

        background-color: rgba(51, 160, 255, 0.1);
        border-radius: 4px;
        border: 0;

        color: #33a0ff;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: 200ms ease;

        &:first-child {
          margin-right: 15px;
          svg {
            margin-right: 15px;
          }
        }

        &:hover {
          background-color: rgba(51, 160, 255, 0.3);
        }
      }
    }
  }
`;
