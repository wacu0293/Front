import { FC } from 'React';
import styled from 'styled-components';
import {FontSize} from "../../../styledHelpers/FontSize";
import {Colors} from "../../../styledHelpers/Colors";

const Links = styled.div`
    display:flex;
    flex-direction: column;
`;

const LinkIcon = styled.div`
    margin-top:10px;
    display:flex;
    align-items:center;
    width:25%;
    display:flex;
    text-decoration:none;
    img{
        width:30px;
        height:30px;
        margin-left:12px;
    }
    button{
    }
    span{
        margin-top: 10px;
        margin-left:15px;
        font-size: ${FontSize[20]};
        font-family: Arial;
    }
    span:hover{
            background-color: ${Colors.darkcyan};
    }
    a{
        text-decoration:none;
        color:${Colors.black};
    }
`;
const LinksUnderProfile: FC = () => {
    return( 
        <Links>
            <LinkIcon>
                    <img src='./icons/publications.svg' alt='Publications'></img>
                    <a href="/publications"><span>Publications</span></a>
            </LinkIcon>

            <LinkIcon>
                    <img src='./icons/ecosystem.svg' alt='Ecosystem'></img>
                    <a href="/ecosystem"><span>Ecosystem</span></a>
            </LinkIcon>

            <LinkIcon>
                    <img src='./icons/entities.svg' alt='Entities'></img>
                    <a href="/entities"><span>Entities</span></a>
            </LinkIcon>
        </Links>
    );
};
export default LinksUnderProfile;
