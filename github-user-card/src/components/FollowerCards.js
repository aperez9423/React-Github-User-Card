import React from 'react';

import styled from 'styled-components';

const FollowerCards = ({ img, followers, bio }) => {
    return (
        <Card>
            <CardImg src={img}/>
            <h2>{followers}</h2>
            <p>{bio}</p>
        </Card>
    );
};

export default FollowerCards

const Card = styled.div`
`

const CardImg = styled.div`
`