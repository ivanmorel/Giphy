import React, { Component } from "react"
import styled from 'styled-components';
import colors from '../utils/colors';
import Search from '../assets/svg/search-icon.svg';
import breakpoints from '../utils/breakpoints';

class Header extends Component {
  state = { search: '' }

  handleInput = (e) => this.setState({ search: e.target.value })

  handleLimitChange = (e) => {
    const { onLimitChange } = this.props;
    onLimitChange(e.target.value);
  }

  handleKeyPress = (event) => {
    const { onSearch } = this.props;
    const { search } = this.state;
    if(event.key == 'Enter'){
      onSearch(search);
    }
  }

  render = () => {
    const { search } = this.state;
    const { onSearch, className, limit } = this.props;
    return (
      <Layout className={className}>
        <Title>GiphyBrowser</Title>
        <InputWrapper>
          <SearchWrapper>
            <SearchInput onChange={this.handleInput} value={search} onKeyPress={this.handleKeyPress}/>
            <SearchButton onClick={() => onSearch(search)}>
              <StyledSearch />
            </SearchButton>
          </SearchWrapper>
          <LimitWrapper>
            <LimitInput onChange={this.handleLimitChange} value={limit} type="number"/>
            <LimitLabel>
              limit (max 1000)
            </LimitLabel>
          </LimitWrapper>
        </InputWrapper>
        <Author>By Ivan Morel</Author>
      </Layout>);
  }
}

const Layout = styled.div`
  width: 100%;
  min-height: 70px;
  background-color: ${colors.purple};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;
  box-shadow: 0 1px 5px -2px black;
  font-family: Tahoma;
`

const Title = styled.div`
  color: white;
  margin-left: 20px;
  font-size: 25px;
  font-family: Tahoma;
  position: absolute;
  top: 20px;
  left: 15px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.md.min}px) {
    flex-direction: column;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.md.min}px) {
    margin-top: 60px;
    margin-bottom: 20px;
  }
`;

const SearchInput = styled.input`
  border: none;
  height: 30px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 5px 10px;
`;

const SearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.search};
  height: 30px;
  width: 30px;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  &:hover {
    background-color: silver;
  }
`;

const StyledSearch = styled(Search)`
  width: 14px;
`;

const LimitWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.md.min}px) {
    margin-bottom: 20px;
  }
`;

const LimitLabel = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.search};
  height: 30px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0 10px;
`;

const LimitInput = styled.input`
  border: none;
  height: 30px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 5px 10px;
  margin-left: 40px;
  width: 60px;

  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }

  @media (max-width: ${breakpoints.md.min}px) {
    margin-left: 0;
  }
`;

const Author = styled.div`
  position: absolute;
  right: 20px;
  color: white;
  font-size: 14px;
  font-style: italic;
  top: 20px;
`;

export default Header;