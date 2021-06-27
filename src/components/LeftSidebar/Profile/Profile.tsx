import { FC } from 'react';
import styled from 'styled-components';
import {Colors} from "../../../styledHelpers/Colors";
import {FontSize} from "../../../styledHelpers/FontSize";
import {useSelector} from "react-redux";
import {IUsersReducer} from "../../../reducers/usersReducers";
import {IState} from "../../../reducers";


const Wrapper = styled.div`
    width: 250px;
    height: 400px;
    background:#DCDCDC;
    display: flex;
    border-radius:2%;
    flex-direction: column;
`;

const ProfileWindow = styled.div`
    width:250px;
    height:270px;
    border-radius:2%;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        width:90px;
        height:90px;
        border-radius:50%;
    }
    flex-direction: column;
`;

const Name = styled.div`
    margin-top:10px;
    display:flex;
    color: #2F4F4F;
    font-size: ${FontSize[24]};
    font-weight:bold;
    font-family: Arial;
`;
const Occupation = styled.div`
    display:flex;
    color: #2F4F4F;
    font-size: ${FontSize[16]};
    font-family: Arial ;
    margin-top:20px;
`;
const ProfileButtons = styled.div`
    margin-top:3%;
    font-family: Arial;
    font-size:${FontSize[18]};
    display:flex;
    width:100%;
    flex-direction: row;
    :hover{
        background-color: ${Colors.darkcyan};
`;

const Icon = styled.div`
 img{
        width:30px;
        height:30px;
        margin-left:12px;
    }
    width:25%;
`;

const Text = styled.div`
    width:55%;
    height:30px;
    align-items:center;
    display:flex;

`;
const Button=styled.button`
    top:0;
    width:14%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:15%;
    outline:none;
    img{
        width:20px;
        height:20px;
    }
    :hover{
        cursor: pointer;
    }
`;

const ColoredLine = ({color} : {color: string}) => (
    <hr
        style={{
            height: 1,
            width: '99.6%'
        }}
    />
);

const Profile: FC = () => {

    const { currentUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    return( 
            <Wrapper>      
                <ProfileWindow>
                    
                    <img src={currentUser?.photo.thumbnailUrl} alt='Profil' />
                    <Name>
                        <p>{currentUser?.name}</p>
                    </Name>
                    <Occupation>
                        <p>Job title - Company</p>
                    </Occupation>
                </ProfileWindow>        
                
                <ColoredLine color="black" />

                <ProfileButtons> 
                    <Icon><img src="./icons/network.png" alt='network icon'></img></Icon>
                    <Text>Your Network</Text>
                    <Button><img src="./icons/network.svg" alt='network'></img></Button>
                </ProfileButtons>

                <ProfileButtons>
                        <Icon><img src="./icons/publications.svg" alt='publications icon'></img></Icon>
                        <Text>Your Publications</Text>
                        <Button><img src="./icons/plus.svg" alt='plus'></img></Button>
                </ProfileButtons>

           </Wrapper> 
    );
};
export default Profile;