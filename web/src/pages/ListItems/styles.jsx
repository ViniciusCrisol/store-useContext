import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LoadFail = styled.div`
  margin-top: 124px;

  h1 {
    color: #ccc;
  }
`;

export const ProdcuctContainer = styled.div`
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

      background-color: rgba(51, 160, 255, 0.1);
      border-radius: 4px;
      border: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: 200ms;

      &:hover {
        background-color: rgba(51, 160, 255, 0.3);
      }
    }
  }
`;
