import React, { FC } from 'react';
import Button from '../src/components/Button';
import Heading from '../src/components/Heading';
import Post from '../src/components/Post';
import Page from '../src/components/Page';
import Link from 'next/link';
import { Separated } from '@myonlinestore/bricks';

const Home: FC = () => {
    return (
        <Page>
            <Heading>Posts</Heading>
            <Separated before after>
                <Post title="post 1" />
                <Post title="post 2" />
                <Post title="post 3" />
            </Separated>
            <Link href="/add">
                <Button>Add a post</Button>
            </Link>
        </Page>
    );
};

export default Home;
