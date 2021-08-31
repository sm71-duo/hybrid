 import React from 'react';
 import 'react-native';
 
 import renderer from 'react-test-renderer';
 import {Text} from 'react-native';
 
 it('renders correctly', () => {
   const tree = renderer.create(
     <Text>tree</Text>
     ).toJSON();
   expect(tree).toMatchSnapshot();
 });