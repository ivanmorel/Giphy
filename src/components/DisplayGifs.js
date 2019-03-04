import React, { Component } from "react"
import styled from 'styled-components';

class DisplayGifs extends Component {
  displayThumbnails = () => {
    const { data, onThumbnailClick } = this.props;
    return data.map(gif => (
      <Thumbnail
        src={gif.thumbnail}
        onClick={() => onThumbnailClick(gif.id)}
      />
    ));
  }

  render = () => {
    const { className } = this.props;
    return (
      <Layout className={className}>
        {this.displayThumbnails()}
      </Layout >
    );
  }
}

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  user-select: none;
`

const Thumbnail = styled.img`
  width: 200px;
  margin: 20px;
  cursor: pointer;
  box-shadow: 0 1px 5px -2px black;
  border-radius: 5px;
  max-height: 200px;
`

export default DisplayGifs;