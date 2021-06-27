import {FC, useState} from "react";
import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";
import { FontSize } from "../../../../styledHelpers/FontSize";

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid #${Colors};
  padding: 8px 14px;
  border-radius: 8px;
  button{
    background-color:rgba(255, 255, 255, 0.4); 
    border:none;
    min-width: 30px;
    border-radius: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Title = styled.div`
  margin-bottom: 14px;
  font-size: ${FontSize[20]};
  color: ${Colors.black};
  font-family: Arial;
`;

const Content = styled.div`
  display: flex;
  gap: 10px;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  background: url("./images/sign.jpg");
  padding: 14px;
  border: 1px solid ${Colors.lightGray};
  border-radius: 5px;
  
`;

const CellIcon = styled.div`
  margin-bottom: 10px;
`;

const CellTitle = styled.div`
  font-size: ${FontSize[22]};
  margin-bottom: 10px;
  font-family: Arial;
`;

const CellBody = styled.div``;

const WorkspacesCollapse: FC = () => {
    const [hidden, setHidden] = useState<boolean>(false);
    const handleCollapse = () => setHidden(!hidden);

    return (
        <Wrapper>
            <Header>
                <Title>Start working on corporate matters</Title>
                <button onClick={handleCollapse}> {hidden ? 'Show' : 'X'}</button>
            </Header>
            {!hidden &&
                <Content>
                    <Cell>
                        <CellIcon><img src='./images/entity.png' /></CellIcon>
                        <CellTitle>Explore your <strong>entities</strong></CellTitle>
                        <CellBody>Take a few minutes to look at the most important elements and specificities of your entities</CellBody>
                    </Cell>
                    <Cell>
                        <CellIcon><img src='./images/structure.png' /></CellIcon>
                        <CellTitle>Structure the <strong>ownership</strong></CellTitle>
                        <CellBody>Get a clear view of the ownership by looking at the relations between individuals and entities.</CellBody>
                    </Cell>
                    <Cell>
                        <CellIcon><img src='./images/calendar.png' /></CellIcon>
                        <CellTitle>Define your <strong>calendar</strong></CellTitle>
                        <CellBody>Prepare future events by creating detailed plans around the life of your entity.</CellBody>
                    </Cell>
                </Content>
            }
        </Wrapper>
    );
}

export default WorkspacesCollapse;
