import React from 'react';
import renderer from 'react-test-renderer';

import header from '..\src\component\header.js';

describe('<header />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<header />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });