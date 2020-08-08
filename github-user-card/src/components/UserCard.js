import React from 'react';

import styled from 'styled-components';

const UserCard = props => {
    return (
        <Card>
            <CardImg src={props.user.avatar_url} alt='user image'/>
            <h1>{props.user.login}</h1>
            <p>{props.user.bio}</p>
        </Card>
    );
};

const Card = styled.div`
`

const CardImg = styled.img`
`

export default UserCard;