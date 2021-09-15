import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const HomeOverview = () => {
    return (
        <DisplayWrapper>
            <Text>FM: 102.6</Text>
        </DisplayWrapper>
    );
};

const DisplayWrapper = styled.View`
    background-color: #a2bea0;
    padding: 16px;
    border-radius: 12px;
    height: 150px;
`;

export default HomeOverview;
