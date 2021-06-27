import styled from "styled-components";
import {Colors} from "../../../../styledHelpers/Colors";

const NotificationButtons = styled.a`
  img {
    max-width: 25px;
    height: 25xp;
    margin-right: 0;
  }
  background-color:${Colors.white};
        :hover {
          background-color:${Colors.darkcyan};
  }  
  position: relative;
  display:flex;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export default NotificationButtons;