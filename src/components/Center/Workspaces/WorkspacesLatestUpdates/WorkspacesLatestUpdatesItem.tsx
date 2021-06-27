import {FC} from "react";
import styled from "styled-components";
import {IWorkspacesUpdate} from "../../../../interfaces/IWorkspaces-update";
import { Colors } from "../../../../styledHelpers/Colors";
import { FontSize } from "../../../../styledHelpers/FontSize";

const Wrapper = styled.div`
  background: ${Colors.white};
  border-radius: 5px;
  border: 1px solid lightgrey;
  padding: 8px 10px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: ${FontSize[24]};
  margin-bottom: 5px;
  color: ${Colors.blue}
  font-family: Arial;
`;

const Content = styled.div`
  font-size: ${FontSize[16]};
  margin-bottom: 10px;
  font-family: Arial;
`;

const Information = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  font-size: ${FontSize[14]};
  font-family: Arial;
`;
const Company = styled.div``;
const Updated = styled.div``;

interface WorkspacesLatestUpdatesItemProps {
    update: IWorkspacesUpdate;
    className?: string;
}

const WorkspacesLatestUpdatesItem: FC<WorkspacesLatestUpdatesItemProps> = (props) => {
    return (
        <Wrapper >
            <Title >{props.update?.name}</Title>
            <Content >{props.update?.body}</Content>
            <Information >
                <Company>{props.update?.type}</Company>
                 • 
                <Updated>Updated 2 days ago by Glenna Reichert</Updated>
            </Information>
        </Wrapper>
    );
}

export default WorkspacesLatestUpdatesItem;
