import {FC,useEffect} from "react";
import styled from "styled-components";
import WorkspacesHeader from "./WorkspacesHeader/WorkspacesHeader";
import WorkspacesCollapse from "./WorkspacesCollapse/WorkspacesCollapse"
import WorkspacesLatestUpdates from "./WorkspacesLatestUpdates/WorkspacesLatestUpdates";
import {useDispatch} from "react-redux";
import {getWorkspacesUpdates} from "../../../api/workspacesAPI";

const Wrapper = styled.div``;

const Workspaces: FC = () => {
    const dispatch = useDispatch();

    type GetWorkspacesUpdates = ReturnType<typeof getWorkspacesUpdates>;

    useEffect(() => {
        dispatch<GetWorkspacesUpdates>(getWorkspacesUpdates());
    });

    return (
        <Wrapper>
            <WorkspacesHeader/>
            <WorkspacesCollapse/>
            <WorkspacesLatestUpdates/>
        </Wrapper>
    );
}
export default Workspaces;

