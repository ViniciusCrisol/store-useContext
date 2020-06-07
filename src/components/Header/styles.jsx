import styled from 'styled-components';

export const Container = styled.header`
  background-color: #33a0ff;

  main {
    height: 70px;
    max-width: 1200px;
    margin: 0 auto;

    padding: 0 12px;

    color: white;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > a {
      color: white;
      font-weight: 500;
      text-transform: uppercase;
      font-size: 18px;

      display: flex;
      align-items: flex-end;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        color: white;

        p {
          font-weight: 500;
          margin-left: 5px;
        }

        & + a {
          margin-left: 25px;
        }
      }
    }
  }
`;
