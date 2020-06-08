import styled from 'styled-components';

export const Container = styled.div`
  footer {
    max-width: 400px;
    margin-top: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      margin-top: 30px;

      background-color: rgba(51, 160, 255, 0.1);
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;

      color: #33a0ff;
      font-weight: bold;
      text-transform: uppercase;

      transition: 200ms;

      &:hover {
        background-color: rgba(51, 160, 255, 0.3);
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: 500;
    color: #999;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 2px solid #33a0ff;
      border-radius: 4px;
      color: #666;
      padding: 6px;

      margin: 0 5px;

      width: 50px;
      height: 30px;
    }
  }

  button {
    background-color: rgba(51, 160, 255, 0.1);
    border-radius: 4px;
    border: 0;
    color: #33a0ff;

    height: 30px;
    width: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 4px;

    transition: 200ms ease;

    &:hover {
      background-color: rgba(51, 160, 255, 0.3);
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  span {
    font-weight: 400;
    font-size: 22px;
  }

  strong {
    color: #999;
    font-weight: 400;
    font-size: 22px;
  }
`;
