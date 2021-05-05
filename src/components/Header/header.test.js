import { shallow } from 'enzyme';
import React from 'react';
import Header from './header';
import { createSerializer } from 'enzyme-to-json'; 
import toJson from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));



it('expect to render Card component', () => {
    expect(toJson(shallow(<Header/>))).toMatchSnapshot();
})