import {FC, useEffect} from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar/TopBar';
import LeftMenu from "../components/LeftSidebar/LeftSidebar";
import Center from '../components/Center/Center';
import {Colors} from "../styledHelpers/Colors";
import { getUsers } from '../api/usersAPI';
import { getWorks } from "../api/worksAPI";
import { getLatestPublications } from "../actions/publicationsActions";
import { useDispatch } from "react-redux";



const Wrapper = styled.section`
    background-color: ${Colors.gray};
`;
const Content = styled.div`
    display:flex;
    max-width: 100%;
    min-height:1800px;
    justify-content:center;
    height: fit-content;
    
`;
const MainPage: FC = () => {
    const dispatch = useDispatch();
    type GetUsers = ReturnType<typeof getUsers>;
    type GetLatestPublications = ReturnType<typeof getLatestPublications>;
    type GetWorks = ReturnType<typeof getWorks>;

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetLatestPublications>(getLatestPublications());
        dispatch<GetWorks>(getWorks());
    });
    
    return ( 
        <Wrapper>
            <TopBar/>
            <Content>
                <LeftMenu/>
                <Center/>
            </Content>
        </Wrapper>
    );
};

export default MainPage;

