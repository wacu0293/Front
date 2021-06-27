import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../styledHelpers/Colors";
import { FontSize } from '../../styledHelpers/FontSize';
import SliderDiv from './WorkspacesSlider/Slider';
import LatestPublications  from './LatestPublications/LatestPublications';
import BottomContainer from './ResumeYourWork/Posts/BottomContainer';
import Workspaces from './Workspaces/Workspaces';
import Entities from './Entities/Entities';
import Profile from './Profile/Profile';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const Wrapper = styled.div`
    width: 70%;
    height: 1000px;
    margin-left: 60px;
    margin-right: 90px;
    margin-top: 20px;
    font-family: Arial;
    span{
        font-weight: 500;
        font-size: ${FontSize[24]};
        margin-left:15px;
        font-weight: bolder;
    }
`;


const Center: FC = () => {
    return ( 
        <Wrapper>
            <Router>
                 <Switch>

                    <Route exact path="/">
                        <LatestPublications/>
                        <span>Workspaces</span>
                        <SliderDiv/>
                        <span>Resume your work</span>
                        <BottomContainer/>
                    </Route>
                    
                   
                    <Route path="/workspace">
                        <Workspaces/>
                    </Route>

                     <Route path="/profile">
                        <Profile/>
                    </Route>
                    
                    <Route path="/entities">
                        <Entities/>
                    </Route>

                    <Route path="/publication">
                        404
                    </Route>
                    <Route path="/people">
                        404
                    </Route>
                    <Route path="/administration">
                        404
                    </Route>
                    <Route path="/client_contract">
                        404
                    </Route>
                    <Route path="/supplier_contract">
                        404
                    </Route>
                    <Route path="/corporate">
                        404
                    </Route>
                    <Route path="/group_norms">
                        404
                    </Route>
                    <Route path="/real_estate_contracts">
                        404
                    </Route>
                </Switch>    
                
            </Router>
        </Wrapper>
    );
};
export default Center;