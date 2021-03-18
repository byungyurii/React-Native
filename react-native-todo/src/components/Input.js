import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, useWindowDimensions } from 'react-native';
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
	placeholderTextColor: theme.main,
  }))`
  width: ${({ width }) => width - 40}px;
  /* useWindowDimens를 사용해도 width는 위와 같음. 어차피 밑 input에서 width 선언부만 달라짐. */
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.itemBackground};
  font-size: 25px;
  color: ${({ theme }) => theme.text};
`;

const Input = ({ placeholder, value, onChangeText, onSubmitEditing }) => {
	const width = Dimensions.get('window').width;
	// const width = useWindowDimensions().width;

	return (
		<StyledInput
		width={width}
		placeholder={placeholder}
		maxLength={50}
		autoCapitalize="none"
		autoCorrect={false}
		returnKeyType="done"
		value={value}
		onChangeText={onChangeText}
		onSubmitEditing={onSubmitEditing}
		/>
	);
};

Input.propTypes = {
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChangeText: PropTypes.func.isRequired,
	onSubmitEditing: PropTypes.func.isRequired,
};

export default Input;

/* Dimensions, useWindowDimensions : RN에서 제공하는 현재 화면의 크기를 알 수 있음. 
- dimensions: 처음 값을 받아왔을 때의 크기로 고정되기 때문에 기기를 회전해서 화면이 전환되면 화면의 크기와 일치하지 않을 수 있다. 이런 상황을 위해 event listener을 등록하여 호면의 크기변화에 대응할 수 있도록 기능을 제공.. 
- useWindowDimensions: rn에서 제공하는 hooks중 하나로, 화면의 크기가 변경되면 화면의 크기, 너비, 높이를 자동으로 업데이트. 
*/