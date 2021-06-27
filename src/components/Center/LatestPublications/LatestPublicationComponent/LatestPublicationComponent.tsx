import {FC} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {IPublication} from "../../../../interfaces/IPublication";
import {FontSize} from '../../../../styledHelpers/FontSize';
import {Colors} from '../../../../styledHelpers/Colors'

const Wrapper = styled.div`
  display:flex;
  height:85px;
  margin-bottom: 1px;
`;

const PublicationImage = styled.div`
  height: 90%;
  margin-left:20px;
  width: 100px;
  background: url("${(props: {thumbnailSrc: string}) => props.thumbnailSrc}");
  background-size: cover;
  
`;

const PublicationContent = styled.div`
`;

const Title = styled.h3`
  font-size: ${FontSize[20]};
  padding-bottom: 3px;
  margin-left:20px;
  color:${Colors.white};
  text-decoration: none;
  font-family: Arial;

`;

const WhoAndWhen = styled.div`
  display: flex;
  margin-left:20px;
  font-size: ${FontSize[16]};
  align-items: center;
  height: fit-content;
  font-family: Arial;
`;

const CreationDate = styled.div`
  color: ${Colors.black};
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left:3px;
`;

const ProfileImage = styled.img`
  height: 20px;
  margin-left:20px;
  border-radius: 50%;
  margin-right: 10px;
`;

interface PublicationProps {
    className?: string;
    publication: IPublication
}

const Publication: FC<PublicationProps> = (props) => {

  return (
      <Wrapper>

          <div>
              <Link to="#">
                  <PublicationImage thumbnailSrc={props.publication?.thumbnailUrl} />
              </Link>
          </div>
          <PublicationContent>
              <Title>
                  <Link to='#' style={{ color: 'black', textDecoration: 'none'}}>
                      {props.publication?.title}
                  </Link>
              </Title>
              <WhoAndWhen>
                  <CreationDate>
                      {props.publication?.creationDate}
                  </CreationDate>
                  <Profile>
                      <ProfileImage src={props.publication?.author.photo.thumbnailUrl} />
                      {props.publication?.author.name}
                  </Profile>
              </WhoAndWhen>
          </PublicationContent>
      </Wrapper>
  );
}

export default Publication;
