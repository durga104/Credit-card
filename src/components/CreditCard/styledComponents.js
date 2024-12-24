// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3b4b69;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const CardImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 282px;
  height: 200px;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 4px 33px #344e7a;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    width: 375px;
    height: 295px;
    border-radius: 42px;
    padding: 32px;
  }
  @media screen and (min-width: 992px) {
    width: 475px;
    height: 325px;
    padding: 48px;
  }
`

export const ImageContainer = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px;
    flex-grow: 1;
  }
`
export const CardHeading = styled.h1`
  color: #fff;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 600;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #ffd773;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-top: 96px;
    margin-bottom: 12px;
    line-height: 1.3;
  }
`

export const HolderName = styled.p`
  color: #c3cad9;
  font-size: 14px;
  font-family: 'Roboto';
  padding-left: 20px;
`
export const CardNumber = styled.p`
  color: #fff;
  font-size: 20px;
  font-family: 'Roboto';
  padding-left: 20px;
  font-weight: 600;
  margin: 0px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.33;
  }
  @media screen and (min-width: 992px) {
    font-size: 42px;
  }
`
export const Name = styled.p`
  color: #fff;
  font-size: 18px;
  font-family: 'Roboto';
  padding-left: 20px;
  font-weight: 600;
  margin: 0px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-top: 52px;
    line-height: 1.33;
  }
  @media screen and (min-width: 992px) {
    font-size: 18px;
  }
`
export const PaymentHeading = styled.h1`
  color: #3b4b69;
  font-size: 18px;
  font-weight: 600;
  font-family; 'Roboto';
  text-align: center;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputEl = styled.input`
  height: 40px;
  outline: none;
  color: #475569;
  margin-bottom: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  border-radius: 4px;
  padding: 12px 24px;

  @media screen and (min-width: 768px) {
    padding: 16px 24px;
  }
  border: 1px solid #c3cad9;
`
export const PaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 90%;
  max-width: 350px;
  border-radius: 8px;
  margin-top: 32px;
  padding: 32px 24px;
  box-shadow: 0px 4px 18px #d3d9e0;
  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 48px;
    max-width: 400px;
  }
`
