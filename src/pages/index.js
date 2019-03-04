import React, { Component } from "react"
import styled from 'styled-components';
import Header from '../components/TopHeader';
import DisplayGifs from '../components/DisplayGifs';
import GifModal from '../components/GifModal';
import gifs from '../services/gifs'
import { map } from 'lodash';
import "../components/layout.css"

class IndexPage extends Component {
  state = { 
    showModal: false, 
    searchResults: [], 
    selectedGif: {},
    limit: 25,
  }

  handleSearch = (search) => {
    const { limit } = this.state;
    gifs.fetchGifs(search, limit > 1000 ? 1000 : limit).then(response => {
      const { data } = response.data;
      const mappedData = map(data, (gif, index) => ({
        id: index,
        thumbnail: gif.images.fixed_width_still.url,
        original: {
          url: gif.images.original.url,
          height: gif.images.original.height,
          width: gif.images.original.width,
        },
      }))
      this.setState({ searchResults: mappedData });
    });
  }

  handleThumbnailClick = (gif) => this.setState({ selectedGif: gif, showModal: true });

  handleLimitChange = (limit) => this.setState({ limit })

  onModalClose = () => this.setState({ showModal: false })

  render = () => {
    const { showModal, searchResults, selectedGif, limit } = this.state;
    return (
      <Layout>
        <Header
          onSearch={this.handleSearch}
          className={showModal && 'blur'}
          limit={limit}
          onLimitChange={this.handleLimitChange}
        />
        <DisplayGifs
          data={searchResults}
          onThumbnailClick={this.handleThumbnailClick}
          className={showModal && 'blur'}
        />
        {showModal && <GifModal selectedGif={selectedGif} onRequestClose={this.onModalClose} searchResults={searchResults} />}
      </Layout>
    );
  }
}

const Layout = styled.div``;

export default IndexPage
