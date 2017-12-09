import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedApp, { App } from '../components/App';
import Slider from '../components/Slider';
import Error from '../components/Error';

const mockStore = configureStore();
const dispatchMock = jest.fn();
const initialState = {};

const store = mockStore(initialState);

describe('App', () => {
  it('should render without crashing', () => {
    shallow(<ConnectedApp store={store} />);
  });
  it('should have class name App', () => {
    const wrapper = shallow(<App dispatch={dispatchMock} store={store} />);
    expect(wrapper.hasClass('App')).toBe(true);
  });
  it('renders Slider when fetchError is empty', () => {
    const wrapper = shallow(<App dispatch={dispatchMock} store={store} fetchError="" />);
    expect(wrapper.containsMatchingElement(<Slider />)).toEqual(true);
  });
  it('renders Error when fetchError has a message', () => {
    const wrapper = shallow(<App dispatch={dispatchMock} store={store} fetchError="Failed" />);
    expect(wrapper.containsMatchingElement(<Error />)).toEqual(true);
  });
});
