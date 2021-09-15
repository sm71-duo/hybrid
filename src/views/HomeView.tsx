import HomeOverview from 'components/home/HomeOverview';
import React from 'react';
import { spacing } from 'shared/styling';
import styled from 'styled-components/native';

const HomeView = () => {
    return (
        <Wrapper>
            <HomeOverview />
        </Wrapper>
    );
};

const Wrapper = styled.View`
    padding: ${spacing.s6}px;
    background-color: grey;
    flex: 1;
`;

export default HomeView;
