import { FC } from "react";
import useDropdown from 'react-dropdown-hook';
import styled from "styled-components";
import {FontSize} from "../../../styledHelpers/FontSize";
import ToggledMenu from "./ToggledMenu/ToggledMenu";

const Wrapper = styled.div`
    width:15%;
    margin-right:8%;
    height:50px;
    margin-top:0.4%;
    z-index: 2;
`;

const MenuToTogge = styled.div`
    width:320px;
    height:50px;
    display: flex;
`;

const Icon = styled.div`
    width:12%;
    height:100%;
    img {
        width: 100%;
        height: 100%;
    }
    :hover {
        cursor: pointer;
    }
`;

const Text = styled.div`
    width:80%;
    height: 100%;
    margin-top:0.9%;
    font-size: ${FontSize[24]};
    align-items: center;
    padding-left:5%;
    display:flex;
    font-family: Arial;
`;

const Arrow = styled.div`
    width:15%;
    height:100%;
    margin-top:0.8%;

    img {
        width: 60%;
        height: 100%;
        left:0;
        :hover {
            cursor: pointer;
        }  
    }
`;

 const DropDownMenu: FC = () => {
	const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
	return (
        <Wrapper ref={wrapperRef}  >
            <MenuToTogge onClick={toggleDropdown} className='zxcz'>
                <Icon>               
                     <img src='./icons/house2.svg' alt="Home page" />
                </Icon>
                <Text>
                    Home
                </Text>
                <Arrow>
                    <img src='./icons/arrow-down.svg' alt="Drop down menu arrow"></img>
                </Arrow>
            </MenuToTogge>
            {dropdownOpen &&
                <>
                    <ToggledMenu/>
                </> 
            }
        </Wrapper>
	)
}
export default DropDownMenu;
