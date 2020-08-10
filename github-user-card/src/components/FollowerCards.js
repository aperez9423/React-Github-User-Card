import React from 'react';

import styled from 'styled-components';

const FollowerCards = ({ img, followers, location }) => {
    return (
        <Card>
            <CardImg src={img} alt = 'image' />
            <h3>{followers}</h3>
            <p>{location}</p>
        </Card>
    );
};

export default FollowerCards

const Card = styled.div`
    background-color: slategray;
    padding: 1rem;
    margin: 1rem;
    text-align: center;

    h2 {
        text-decoration: underline;
    }

    h3 {
        font-size: 1.4rem;
    }
`

const CardImg = styled.div`


`