import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { images } from '../images';

//아이콘의 색은 입력된 텍스트오 ㅏ동일한 색을 사용. 
// 마진을 두어 사람이 정확하게 클릭하지 못하더라도 인식할 수 있도록 한다.
const Icon = styled.Image`
  tint-color: ${({ theme, completed }) => theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

//원하는 이미지 종류를 props에 type으로 전달하도록 함. 
const IconButton = ({ type, onPressOut}) => {
 return (
    <TouchableOpacity onPressOut={onPressOut}>
      <Icon source={type} />
    </TouchableOpacity>
  );
};

IconButton.propTypes = {
  type: PropTypes.oneOf(Object.values(images)).isRequired,
  onPressOut: PropTypes.func,
};

export default IconButton;