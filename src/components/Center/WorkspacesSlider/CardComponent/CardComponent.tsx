import {FC} from "react";
import styled from "styled-components";
import {IWorkspace} from "../../../../interfaces/IWorkspace";
import {Colors} from "../../../../styledHelpers/Colors";
import { FontSize } from '../../../../styledHelpers/FontSize';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  width: 340px;
  height:200px; 
  flex-direction: column;
  background-color: ${Colors.white};
  position: relative;
  font-family: Tahoma;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 80px;
  position:absolute;
  width: 100%;
  height: 80px;
  background: url(${(props: {bannerUrl: string}) => props.bannerUrl}) no-repeat;
  background-size: cover;
`;


const TypeImage = styled.img`
  width:90px;
  height:90px;
  position:absolute;
  border: 1px solid ${Colors.gray};
  margin-left: 15px;
  margin-top: 50px;
  border-radius: 10px;
  background-color: ${Colors.white};
`;

const Title = styled.div`
  position:absolute;
  margin-top:90px;
  margin-left: 120px;
  font-size: ${FontSize[24]};
  font-family: Arial;
`;

const Information = styled.div`
  display: flex;
  position:absolute;
  flex-direction: column;
  margin-top: 150px;
  margin-left:14px;
`;

const Data = styled.div`
  display: flex;
  align-items: center;
  font-size: ${FontSize[16]};
  font-family: Arial;
`;

const LastUpdated = styled.div`
  margin-left:5px;
`;

const InformationIcon = styled.img`
  width: 30px;
  height:30px;
`;

interface ICardComponent {
  className?: string;
  workspaceData: IWorkspace;
}

const CardComponent: FC<ICardComponent> = (props) => {
    const handleCardClick = () => {
        window.location.href = `/workspace`;
    }

    return (
        <Wrapper onClick={handleCardClick}>
          <BackgroundImage bannerUrl={props.workspaceData.bannerUrl}/>
          <TypeImage src={`./icons/${props.workspaceData.icon}.jpg`} />
          <Title>{props.workspaceData.title}</Title>
          <Information>
              <Data>
                  <InformationIcon src={`./icons/${props.workspaceData.icon}.jpg`} />
                  {props.workspaceData.type} • 
                  <img src='./icons/people.png'/>
                  {props.workspaceData.users} users
              </Data>
              <LastUpdated>
                  Last update {props.workspaceData.lastUpdated}
              </LastUpdated>
          </Information>
      </Wrapper>
    );
}
export default CardComponent;
