import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
// 리액트 네이티브에서 상태바를 제어할 수 있는 컴포넌트이다. 상태바의 스타일을 변경할 수 있고, 안드로이드 기기에서 상태 바가 컴포넌트를 가리는 문제를 해결 할 수 있음.
import { StatusBar, Dimensions } from 'react-native';
import Input from './components/Input';
import IconButton from './components/IconButton';
import { images } from './images';
import Task from './components/Task';

//SafeAreaView : 노치 디자인이 있을 경우, 자동으로 패딩 값이 계산되어서 노치 디자인 문제를 해결할 수 있는 컴포넌트. 
const Container = styled.SafeAreaView` 
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
	font-size: 40px;
	font-weight: 600;
	color: ${({ theme }) => theme.main};
	align-self: flex-start;
	margin: 0px 20px;
`;

const List = styled.ScrollView`
	flex: 1;
	width: ${({width}) => width - 40 }px
	`;


export default function App() {
	const [newTask, setNewTask] = useState('');

	const _addTask = () => {
		alert(`Add: ${newTask}`);
		setNewTask('');
		/*
		const ID = Date.now().toString();
		const newTaskObject = {
		  [ID]: { id: ID, text: newTask, completed: false },
		};
		setNewTask('');
		_saveTasks({ ...tasks, ...newTaskObject });
		*/
	  };
	const _handleTextChange = text => {
		setNewTask(text);
	  };
	const width = Dimensions.get('window').width;
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<StatusBar
					barStyle="light-content"
					/* statusBar의 backgroundcolor속성은 안드로이드에만 적용된다. 
				  상태 바의 바탕색을 변경가능하다.*/
					backgroundColor={theme.background}
				/>
				<Title>TODO List</Title>
				<Input placeholder="+ Add a Task"
					value={newTask}
					onChangeText={_handleTextChange}
					onSubmitEditing={_addTask}/>
				<List width={width}>
					<Task text="hanbit"/>
					<Task text="rn"/>
					<Task text="rn sample"/>
					<Task text="todo"/>
				</List>
			</Container>
		</ThemeProvider>
	);
}