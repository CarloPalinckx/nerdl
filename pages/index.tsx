import React, { FC } from 'react';
import Nav from '../src/components/Nav';
import Heading from '../src/components/Heading';
import Post from '../src/components/Post';
import Page from '../src/components/Page';
import { Separated } from '@myonlinestore/bricks';
import { Plus } from 'react-feather';
import Link from 'next/link';

const Home: FC = () => {
    return (
        <Page>
            <Heading>Posts</Heading>
            <Separated before after>
                <Post title="post 1" />
                <Post title="post 2" />
                <Post title="post 3" />
            </Separated>
            <Nav>
                <Link href="/add">
                    <Plus color="#fff" />
                </Link>
            </Nav>
        </Page>
    );
};

export default Home;
