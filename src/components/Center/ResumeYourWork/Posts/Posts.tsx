import React from 'react';
import styled from 'styled-components';
import {Colors} from "../../../../styledHelpers/Colors";
import { FontSize } from '../../../../styledHelpers/FontSize';
import {IState} from "../../../../reducers";
import { useSelector } from "react-redux";
import { IUsersReducer } from '../../../../reducers/usersReducers';


const Container = styled.div`
    width:100%;
    height:130px;
    background-color: ${Colors.white};
    display:flex;
    flex-direction: column;
    padding-left:20px;
    font-family:Arial;
    margin-bottom: 10px;
    .title{
        margin-top:5px;
        font-size: ${FontSize[22]};
        margin-bottom:10px;
        color:#00008B}
    }
    a{
        text-decoration:none;
        color: #00008B};
    }
    .corpTypeUpdate{
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-top:20px;
    }
    .corpPicture{
        border-radius:50%;
    }
    .corpPicture, .typeIcon{
        width:30px;
        height:25px;
        margin-left:5px;
        margin-right:5px;
    }
    .text{
        font-size: ${FontSize[18]};
    }
    h1{
        font-weight:bold;
        font-size: ${FontSize[22]};
        margin-left: 10px;
        margin-right: 10px;
    }
`;


const Posts =  ({posts, loading} : {posts: any[], loading: boolean}) => 
{   
    const { currentUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    
    if(loading){
        return <h2>Loading ...</h2>
    }
    return (
        <div>
            {posts.map( post => ( 
                <Container key={post.id}>

                    <div className='title'>
                        {post.title}
                    </div>

                    <div className='text'>
                        <p>
                            {post.body}
                        </p>
                    </div>

                    <div className='corpTypeUpdate'>
                        <img className='corpPicture' src="./images/sas.jpg"/> 
                        <p className='corpName'>Susbid. corp.</p>
                        <h1>·</h1> 
                        <img className='typeIcon' src="./icons/entities2.png"/> 
                        <p className="Type">Corporate</p>
                        <h1>·</h1>
                        <p className="lastUpdate">Updated 2 days ago by {currentUser?.name}.</p>
                    </div>
                </Container> 
            ))}
        </div>
    )
};

export default Posts;

