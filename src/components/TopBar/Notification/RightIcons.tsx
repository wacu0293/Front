import styled from "styled-components";
import {Colors} from "../../../styledHelpers/Colors";
import {FontSize} from "../../../styledHelpers/FontSize";
import NotificationButtons from "./NotificationButtons/NotificationButtons";

function Notification() {

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;  
    width: 28%;
    display: flex;
    justify-content:flex-end;
  `;

  const NotificationIcon = styled(NotificationButtons)`
    margin-right: 20px;
  `;

  const NotifyBadge = styled.div`
    width: 15px;
    height: 20px;
    top: 0;
    right: 0;
    border-radius: 50%;
    background-color: ${Colors.black};
    color: ${Colors.white};
    font-size: ${FontSize[16]};
    line-height: normal;
    position: absolute;
    text-align: center;
    font-family: Arial;
  `;
  return (
      <Wrapper>
          <NotificationButtons href="/">
              <img src="./icons/house.png" alt="Home page"/>
          </NotificationButtons>

          <NotificationIcon href="/comments">
              <img src="./icons/comments.png" alt="Comments"/>
              <NotifyBadge>1</NotifyBadge>
          </NotificationIcon>

          <NotificationIcon href="/notifications">
              <img src="./icons/bell.png" alt="Notifications"/>
              <NotifyBadge>3</NotifyBadge>
          </NotificationIcon>
      </Wrapper>
  );
}
export default Notification;