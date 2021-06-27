import {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import PublicationComponent from "./LatestPublicationComponent/LatestPublicationComponent";
import MainPublication from "./MainPublication/MainPublication";
import {FontSize} from '../../../styledHelpers/FontSize';
import {Colors} from '../../../styledHelpers/Colors'
import {useSelector} from "react-redux";
import {IState} from "../../../reducers";
import {IPublicationsReducer} from "../../../reducers/publicationsReducers";

const Wrapper = styled.div`
  display:flex;
  background: ${Colors.white};
  width: 100%;
  height: 320px;
  font-family: Arial;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  margin-bottom: 20px;
  
`;

const MainPublicationWrapper = styled.div`
  height: 320px;
  
`;

const Publications = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  font-family: Arial;
  
  h2{
      font-size: ${FontSize[22]};
      margin-left:20px;
      margin-bottom:5px;
      font-weight: bolder;
  }
  
`;

const LatestPublications: FC = () => {
    const { latestPublications } = useSelector<IState, IPublicationsReducer>(state => ({
        ...state.publications
    }));

    return (
        <Wrapper id='latest-publications-wrapper'>
            <MainPublicationWrapper>
                <MainPublication publication={latestPublications[0]}/>
            </MainPublicationWrapper>
            <Publications>
                <h2>Latest publications</h2>
                <div>
                    {latestPublications.slice(1, 4).map((publication) => {
                        return (
                            <PublicationComponent publication={publication}/>
                        );
                    })}
                </div>
                <Link to="/publications" id="link" style={{ color: 'black', textDecoration: 'none'}}>See more publications</Link>
            </Publications>
        </Wrapper>
    );
}

export default LatestPublications;
