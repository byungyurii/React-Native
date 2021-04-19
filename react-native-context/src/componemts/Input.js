import React, { useState, useContext } from 'react';
import styled from 'styled-components/native';
//import { UserConsumer } from '../contexts/User';
import UserContext from '../contexts/User';

const StyledInput = styled.TextInput`
	border: 1px solid #606060;
	width: 250px;
	padding: 10px 15px;
	margin: 10px;
	font-size: 24px;
`;

// 7.3 useContext
const Input = () => {
	const [name, setName] = useState('');
	const { dispatch } = useContext(UserContext);

	return (
		<StyledInput
			value={name}
			onChangeText={text => setName(text)}
			onSubmitEditing={() => {
				dispatch(name);
				setName('');
			}}
			placeholder="Enter a name ..."
			autoCapitalize="none"
			autoCorrect={false}
			returnKeyType="done"
		/>
	);
};

// 7.2
/* const Input = () => {
	const [name, setName] = useState('');

	return (
		<UserConsumer>
			{({ dispatch }) => {
				return(
					<StyledInput
					value={name}
					onChangeText={text => setName(text)}
					onSubmitEditing={()=>{
						dispatch(name);
						setName('');
					}}
					placeholder="Enter a name ..."
					autoCapitalize="none"
					autoCorrect={false}
					returnKeyType="done"
					/>
				);
			}}
		</UserConsumer>
	);
}; */

export default Input;