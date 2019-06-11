import React, { FC } from 'react';
import Button from '../src/components/Button';
import Heading from '../src/components/Heading';
import Page from '../src/components/Page';

const Search: FC = () => {
    return (
        <Page>
            <Heading>Search a post</Heading>
            <Button>Click me</Button>
        </Page>
    );
};

export default Search;
