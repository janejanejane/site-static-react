import React from 'react';
import { shallow } from 'enzyme';

import Main from 'Components/Main';

describe('app.js', () => {
    it('should load <Main />', () => {
        const wrapper = shallow(<Main />)
        expect(wrapper.find('#main')).toHaveLength(1)
    })
})