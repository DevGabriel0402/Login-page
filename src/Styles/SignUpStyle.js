import styled from "styled-components";
import Background from "../assets/bg-image.png";

export const Container = styled.div`
  position: relative;
  width: 414px;
  height: 896px;
  background-color: #fff;
  background: url(${Background}),
    white 50% / cover no-repeat;
  display: flex;
  background-blend-mode: multiply;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 36px;

  .composicaoImg {
    position: absolute;
    top: 70px;
    right: 0;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;

  .logo {
    width: 100px;
    margin-top: 10px;
  }
`;

export const Title = styled.h1`
  color: #000;
  font-size: 28px;
  font-weight: 700px;
  line-height: normal;
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 42px;

  input {
    display: flex;
    align-items: center;
    height: 74px;
    padding: 40px 28px;
    border-radius: 10px;
    background: #e8e8e8;
    border: 2px solid transparent;
    &:focus {
      outline: none;
      border: 2px solid #3ab091;
    }
  }

  p {
    color: rgba(60, 60, 67, 0.6);
    font-weight: 500;
    cursor: pointer;
    text-align: left;
    font-family: Roboto;
    font-size: 13px;
    margin-bottom: 10px;
  }

  button {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;
    border: none;
    background: #3ab091;
    margin-bottom: 10px;
    font-size: 20px;
    color: #fff;
    &:hover {
      background: linear-gradient(
        135deg,
        #fda085 -50.25%,
        #f6d365 123.75%
      );
    }
  }
`;

export const BarOption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  color: rgba(60, 60, 67, 0.6);
  font-size: 12px;
  .bar {
    width: 99px;
    height: 1px;
    background: rgba(37, 50, 116, 0.15);
  }
`;

export const SocialButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-items: flex-start;
  gap: 12px;

  .btnSocial {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    padding: 20px;
    gap: 12px;
    align-items: center;
    text-decoration: none;
    margin-bottom: 20px;
    cursor: pointer;
    margin-top: 10px;
  }

  .btn-facebook {
    border-radius: 8px;
    background: #039be5;
    box-shadow: 0px 3px 25px 0px
      rgba(0, 0, 0, 0.06);
    color: #fff;
  }

  .btn-google {
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 3px 25px 0px
      rgba(0, 0, 0, 0.06);
    color: #000;
  }
`;

export const Footer = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;

  .bold {
    color: #3ab091;
    font-weight: 700;
    text-decoration: none;
    padding-left: 5px;
    cursor: pointer;
    &:hover {
      color: #3ab09195;
    }
  }
`;
