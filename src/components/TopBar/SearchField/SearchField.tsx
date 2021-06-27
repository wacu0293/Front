import {FC} from 'react';
import styled from 'styled-components';
import {FontSize} from "../../../styledHelpers/FontSize";

const Wrapper = styled.fieldset`
  position: relative;
  width: 45%;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 2px solid lightgrey;
  text-align: center;
  font-family: Arial;
  font-size: ${FontSize[16]};
`;

const SearchIcon = styled.button`
  background: url('./icons/search.svg') no-repeat;
  display: block;
  margin: auto auto;
  top:0;
  bottom:0;
  width: 25px;
  right: 10px;
  height: 25px;
  border: none;
  position: absolute;
  background-size: cover;
  outline: none;
  :hover {
    cursor: pointer;
  }  
`;
const SearchField: FC = () => {
    return (
        <>
            <Wrapper>
                <Input placeholder='Search Legalcluster...' />
                <SearchIcon />
            </Wrapper>
        </>
    );
};

export default SearchField;
