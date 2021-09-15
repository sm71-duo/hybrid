import React from 'react';
import { View, Text } from 'react-native';
import { spacing } from 'shared/styling';
import styled from 'styled-components/native';

const HomeOverview = () => {
    return (
        <Wrapper>
            <DisplayWrapper></DisplayWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.View`
    padding: ${spacing.s6}px;
    background-color: grey;
    flex: 1;
`;

const DisplayWrapper = styled.View`
    background-color: #a2bea0;
    padding: 16px;
    border-radius: 12px;
    height: 150px;
`;

export default HomeOverview;
