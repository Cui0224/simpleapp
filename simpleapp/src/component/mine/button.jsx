import React, { Component } from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  height: 1.25333rem;
  width: 100%;
  padding: 0 0.4rem;
  box-sizing: border-box;
  position: absolute;
  bottom: 0.4rem;
  left: 0;
  button {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(#ff6742, #ff6742),
      linear-gradient(#ffde00, #ffde00);
    background-blend-mode: normal, normal;
    border-radius: 0.62667rem;
    overflow: hidden;
    font-size: 0.48rem;
    color: #fefefe;
  }
`
export default class button extends Component {
  render() {
    return <ButtonContainer>{this.props.children}</ButtonContainer>
  }
}
