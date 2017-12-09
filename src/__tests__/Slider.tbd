import React from 'react';
import { shallow } from 'enzyme';
import { Slider } from '../components/Slider';
import { showRightArrowState, showLeftArrowState } from '../__data__/searchPhotosData';

const firstPageFirstImage = {
  slider: {
    mainImageIndex: 0,
    pageNum: 1,
    perPage: 4,
  },
};

const firstPageSecondImage = {
  slider: {
    mainImageIndex: 1,
    pageNum: 1,
    perPage: 4,
  },
};

describe('Slider', () => {
  it('should render without crashing', () => {
    shallow(<Slider {...firstPageFirstImage} />);
  });
  it('should show left arrow when not first [0] image on 1st page of results', () => {
    const wrapper = shallow(<Slider {...firstPageSecondImage} />);
    expect(wrapper.find('#leftArrow').exists()).toEqual(true);
  });
  it('should NOT show left arrow when on first [0] image on 1st page of results', () => {
    const wrapper = shallow(<Slider {...firstPageFirstImage} />);
    expect(wrapper.find('#leftArrow').exists()).toEqual(false);
  });
  it('should show search instructions', () => {
    const wrapper = shallow(<Slider {...firstPageFirstImage} />);
    expect(wrapper.find('#instructions').exists()).toEqual(true);
  });
  it('should show right arrow', () => {
    const wrapper = shallow(<Slider {...showRightArrowState} />);
    expect(wrapper.find('#rightArrow').exists()).toEqual(true);
  });
  it('should NOT show left arrow', () => {
    const wrapper = shallow(<Slider {...showRightArrowState} />);
    expect(wrapper.find('#leftArrow').exists()).toEqual(false);
  });
  it('should show left arrow', () => {
    const wrapper = shallow(<Slider {...showLeftArrowState} />);
    expect(wrapper.find('#leftArrow').exists()).toEqual(true);
  });
});

/*
    console.log(wrapper.debug());

  slider: {
    mainImageIndex: 0,
    pageNum: 1,
    perPage: 4,
  },
  form: {
    searchForm: {
      registeredFields: {
        search: {
          name: 'search',
          type: 'field',
          count: 1,
        },
      },
    },
  },
*/

