import React, { useContext } from 'react';
import styled from 'styled-components/native';
// import { UserConsumer } from '../contexts/User';
import UserContext, { UserConsumer } from '../contexts/User';

const StyledText = styled.Text`
	font-size: 24px;
	margin: 10px;
`;

// 7.3 useContext
const User = () => {
	const { user } = useContext(UserContext);
	return (
		<StyledText>Name: {user.name}</StyledText>
	);
};

//7.2.3
/* const User = () => {
	return (
		<UserConsumer>
			{({ user }) => <StyledText>Name: {user.name}</StyledText>}
		</UserConsumer>
	);
}; */

// 7.2.2
/* const User = () => {
	return (
		<UserContext.Provider value={{ name: 'user.js provider' }}>
			<UserContext.Consumer>
				{value => <StyledText>Name: {value.name}</StyledText>}
			</UserContext.Consumer>
		</UserContext.Provider>
	);
};
 */

export default User;