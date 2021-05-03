import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { images } from '../images';

//아이콘의 색은 입력된 텍스트와 동일한 색을 사용. 
// 마진을 두어 사람이 정확하게 클릭하지 못하더라도 인식할 수 있도록 한다.
// 아이콘 색을 completed여부에 따라 바뀌도록 한다.
const Icon = styled.Image`
  tint-color: ${({ theme, completed }) => 
    completed ? theme.done : theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

//원하는 이미지 종류를 props에 type으로 전달하도록 함. 
const IconButton = ({ type, onPressOut, id, completed}) => {
  const _onPressOut = () =>{
    onPressOut(id);
  };

 return (
    <TouchableOpacity onPressOut={_onPressOut}>
      <Icon source={type} completed={completed}/>
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  onPressOut: () => {},
};

IconButton.propTypes = {
  type: PropTypes.oneOf(Object.values(images)).isRequired,
  onPressOut: PropTypes.func,
  id: PropTypes.string,
  completed: PropTypes.bool,
};

export default IconButton;