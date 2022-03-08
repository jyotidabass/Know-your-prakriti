import React from 'react';
import renderer from 'react-test-renderer';

import result from '..\src\component\result.js';

describe('<result />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<result />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });