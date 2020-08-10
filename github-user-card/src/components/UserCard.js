import React from 'react';

import styled from 'styled-components';
import {AiFillGithub} from 'react-icons/ai';

const UserCard = props => {
    return (
        <Card>
            <CardImg src={props.user.avatar_url} alt='user image'/>
            <Info>
            <h3>{props.user.login}</h3>
            <a href = {props.user.url}><AiFillGithub/></a>
            <p>{props.user.location}</p>
            </Info>
        </Card>
    );
};

const Card = styled.div`
    padding: 1rem;
    background-color: olive;
    width: 90vw;
    margin: 3vw;
    display: flex;
    justify-content: center;
    align-items: center; 

    @media (max-width: 550px) {
        margin: 0;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    
        h3 {
            font-size: 2rem;
            text-decoration: none;
        }

        p {
            font-size: 1.4rem;
        }

        a {
            color: black;
            font-size: 2rem;
        }
`

const CardImg = styled.img`
    height: 11rem;
    border-radius: 6rem;
    padding-right: 1rem;
`

export default UserCard;