// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  CardContainer,
  PaymentContainer,
  CardImage,
  ImageContainer,
  CardHeading,
  HolderName,
  CardNumber,
  Name,
  PaymentHeading,
  InputContainer,
  InputEl,
  PaymentMethod,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolder, setCardHolder] = useState('')

  const changeNumber = event => {
    setCardNumber(event.target.value)
  }

  const changeName = event => {
    setCardHolder(event.target.value)
  }

  return (
    <AppContainer>
      <CardContainer>
        <CardHeading>Credit Card</CardHeading>
        <ImageContainer>
          <CardImage data-testid="creditCard">
            <CardNumber>{cardNumber}</CardNumber>
            <HolderName>CARDHOLDER NAME</HolderName>
            <Name>{cardHolder.toUpperCase()}</Name>
          </CardImage>
        </ImageContainer>
      </CardContainer>
      <PaymentContainer>
        <PaymentMethod>
          <PaymentHeading>Payment Method</PaymentHeading>
          <InputContainer>
            <InputEl
              type="text"
              placeholder="Card Number"
              onChange={changeNumber}
            />
            <InputEl
              type="text"
              placeholder="Cardholder Name"
              onChange={changeName}
            />
          </InputContainer>
        </PaymentMethod>
      </PaymentContainer>
    </AppContainer>
  )
}

export default CreditCard
