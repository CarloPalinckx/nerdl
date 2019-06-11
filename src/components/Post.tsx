import React, { FC } from 'react';
import Subheading from './Subheading';
import styled from 'styled-components';

type Props = {
    title: string;
};

const Container = styled.div`
    width: 100%;
    background: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.05);
    border-radius: 24px;
    padding: 24px;
`;

const Post: FC<Props> = () => {
    return (
        <Container>
            <Subheading>Post</Subheading>
        </Container>
    );
};

export default Post;
