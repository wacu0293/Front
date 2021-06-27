import {FC, useState} from "react";
import styled from "styled-components";
import { Colors } from "../../../../../styledHelpers/Colors";
import { FontSize } from "../../../../../styledHelpers/FontSize";

import { IState } from '../../../../../reducers';
import { IUsersReducer } from '../../../../../reducers/usersReducers';
import { useSelector } from "react-redux";

const Wrapper = styled.div`
    width:100%;
    height:152px;
    display: flex;
    flex-direction: column;
    font-family: Arial;
    #Account{
        margin-left:10px;
        margin-top:8px;
        font-size: ${FontSize[16]};
    }
`;
const Profile = styled.div` 
    margin-left: 10px;
    margin-top: 5px;
    margin-right: 12px;
    display:flex;
    flex-direction:row;
    align-items:center;
    img{
        margin-top: 5px;
        height:30px;
        width:auto;
        margin-right: 10px;
        border-radius:50px;
    }
    p{
        font-size: ${FontSize[18]};
        margin-bottom:5px;
    }
    a{
        text-decoration:none;
        font-weight: bold;
    }
    #NameAndLink{
        margin-left:15px;
    }
    div{
        display:flex;
        flex-direction:column;
    }
`;
const PrivacyAndSettings = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:150px;
    #Privacy,#Settings{
        display:flex;
        align-items:center;
        margin-top: 10px;
        margin-left: 15px;
        img{
            height:25px;
            margin-right:20px;
        }
        a{
            text-decoration:none;
            color: ${Colors.black};
        }
    }
`;

const Account: FC = () => {
    const { currentUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

	return (
        
        <Wrapper>
            <p id="Account">Account</p>
            <Profile>
                <img src={currentUser?.photo.thumbnailUrl} alt='Profile picture' />
                <div id="NameAndLink">
                    <p>{currentUser?.name}</p>
                    <a href="/profile">See profile</a>
                </div>
            </Profile>

            <PrivacyAndSettings>
                <div id="Privacy">
                    <img src="./icons/privacy.png"></img>
                    <a href="privacy">Privacy</a>
                </div>
                <div id="Settings">
                    <img src="./icons/settings.png"></img>
                    <a href="settings">Settings</a>
                </div>
            </PrivacyAndSettings>

        </Wrapper>
	)
}

export default Account;