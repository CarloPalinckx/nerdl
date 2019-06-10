import React, { FC } from 'react';
import Button from '../src/components/Button';
import Heading from '../src/components/Heading';
import Page from '../src/components/Page';

const Add: FC = () => {
    return (
        <Page>
            <Heading>Add a post</Heading>
            <Button>Click me</Button>
        </Page>
    );
};

export default Add;
