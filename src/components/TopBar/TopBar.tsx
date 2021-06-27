import { FC } from 'React';
import styled from 'styled-components';
import SearchField from './SearchField/SearchField';
import {Colors} from "../../styledHelpers/Colors";
import RightIcons from "./Notification/RightIcons";
import DropDownMenu from "./DropDownMenu/DropDownMenu";

const Wrapper = styled.div`
  width: 100%;
  background:${Colors.lightGray};
  height: 65px;
  box-shadow: 1px 1px 10px ${Colors.black};
  display: flex;
  align-items: flex-start;
  z-index: 3;
`;
const Logo = styled.div`
  margin-left:2%;
  display: flex;
  height: 40px;
  width: 5%;
  margin-top:0.8%;
`;

const TopBar: FC = () => {
    return( 
        <Wrapper>
            <Logo>
                <img src='./logo.png' alt='Logo'/>
            </Logo>
            <DropDownMenu />
            <SearchField />
            <RightIcons />
        </Wrapper>
    );
};
export default TopBar;
 