import {FC} from "react";
import styled from "styled-components";
import { Colors } from "../../../../styledHelpers/Colors";
import { FontSize } from "../../../../styledHelpers/FontSize";

const Wrapper = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  background-color: ${Colors.white};
  margin-bottom: 30px;
`;

const InnerWrapper = styled.div`
  display:flex;
  flex-direction: row;
`;

const Header = styled.div`
  background: url("./images/sign2.jpg");
  background-size: cover;
  background-position-y: center;
  width:100%;
  height: 220px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: ${FontSize[18]};
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 13px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  padding-left: 14px;
`;

const WorkspacesHeader: FC = () => {
  return (
      <Wrapper>
          <Header/>
          <InnerWrapper>
              <img src="./icons/contract.jpg"/>
              <Main>
                  <ContentWrapper>
                      <Title>Client contract</Title>
                  </ContentWrapper>
                  <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam pariatur fuga quam.
                  </Text>
              </Main>
          </InnerWrapper>
      </Wrapper>
  );
}
export default WorkspacesHeader;