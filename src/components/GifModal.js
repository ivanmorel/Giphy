import React, { Component } from "react"
import styled from 'styled-components';
import { find } from 'lodash';
import ArrowLeft from '../assets/svg/left-arrow.svg';
import ArrowRight from '../assets/svg/right-arrow.svg';
import colors from '../utils/colors';

class GifModal extends Component {
  state = { selectedGif: 0 }

  componentDidMount = () => {
    const { selectedGif } = this.props;
    this.setState({ selectedGif });
  }

  preventDefault = (e) => {
    e.stopPropagation();
  }

  findGif = () => {
    const { selectedGif } = this.state;
    const { searchResults } = this.props;
    const gif = find(searchResults, { id: selectedGif });
    return gif.original.url;
  }

  handleLeftClick = (e) => {
    e.stopPropagation();
    const { selectedGif } = this.state;
    const { searchResults } = this.props;
    let previousGif;
    if(selectedGif === 0) previousGif = searchResults.length -1;
    else previousGif = selectedGif - 1;
    this.setState(({ selectedGif: previousGif}))
  }

  handleRightClick = (e) => {
    e.stopPropagation();
    const { selectedGif } = this.state;
    const { searchResults } = this.props;
    let nextGif;
    if(selectedGif === searchResults.length -1) nextGif = 0;
    else nextGif = selectedGif + 1;
   
    this.setState(({ selectedGif: nextGif}))
  }

  render = () => {
    const { onRequestClose } = this.props;
    return (
    <Overlay onClick={onRequestClose}>
      <Content onClick={this.preventDefault}>
        <GifMedia src={this.findGif()}/>
      </Content>
      <LeftArrowWrapper onClick={this.handleLeftClick}>
        <StyledArrowLeft />
      </LeftArrowWrapper>
      <RightArrowWrapper onClick={this.handleRightClick}>
        <StyledArrowRight />
      </RightArrowWrapper>
    </Overlay>)
  }
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.5);
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  user-select: none;
`

const GifMedia = styled.img`
  border-radius: 10px;
  box-shadow: 0 1px 5px -2px black;
`

const LeftArrowWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 16%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 40px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  background-color: ${colors.purple};
  cursor: pointer;
`

const StyledArrowLeft = styled(ArrowLeft)`
  width: 50px;
`

const RightArrowWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 85%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 40px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  background-color: ${colors.purple};
  cursor: pointer;
`

const StyledArrowRight = styled(ArrowRight)`
  width: 40px;
`

export default GifModal;