import React from 'react';
import styled from 'styled-components/native';
import User from './componemts/User';
import {UserProvider} from './contexts/User';
import Input from './componemts/Input';

const Container = styled.View`
	flex: 1;
	background-color: #ffffff;
	justify-content: center;
	align-items: center;
`;
const App = () => {
	return (
	<UserProvider>
		<Container>
			<User />
			<Input />
		</Container>
	</UserProvider>
	);
};

// 7.2.2
/* const App = () => {
	return (
		// app 컴포넌트를 provider컴포넌트로 감샀기 때문에 user컴포넌트에서 사용된 consumer컴포넌트는 더이상 context의 기본값을 사용하지 않고 상위 컴포넌트인 provider 컴포넌트가 전달하는 데이터를 사용하도록 변경되었다. value로 provider 컴포넌트에서 consumer 컴포넌트의 자식으로 지정된 함수의 파라미터에 값을 전달. 
		// 그러니까 ... provider컴포넌트에서 value 값을 지정 -> consumer component -> child function의 parameter = value
	<UserContext.Provider value={{name: 'kimm' }}>
		<Container>
			<User />
		</Container>
	</UserContext.Provider>
	);
}; */

export default App;