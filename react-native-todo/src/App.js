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
	width: ${({ width }) => width - 40}px
	`;


export default function App() {
	const [newTask, setNewTask] = useState('');

	const width = Dimensions.get('window').width;

	/* id: 할 일 항목이 추가되는 시간의 타임스탬프 사용. 
	   text: input컴포넌트에 입력된 값을 지정. 새로 입력되는 항목이기 때문에 completed는 항상 false
	   newTask값을 다시 빈 문자열로 지정해서 input을 컴포넌트를 초기화하고, 기존의 목록을 유지한 상태에서 새로운 항목이 추가되도록 구성.  */
	const _addTask = () => {
		const ID = Date.now().toString();
		const newTaskObject = {
			[ID]: { id: ID, text: newTask, completed: false },
		};
		setNewTask('');
		setTasks({ ...tasks, ...newTaskObject });
	};

	const _handleTextChange = text => {
		setNewTask(text);
	};
	//삭제 기능
	const _deleteTask = id => {
		const currentTasks = Object.assign({}, tasks);
		delete currentTasks[id];
		setTasks(currentTasks);
	};
	// 완료 기능
	const _toggleTask = id =>{
		const currentTasks = Object.assign({}, tasks);
		currentTasks[id]['completed'] = !currentTasks[id]['completed'];
		setTasks(currentTasks);
	};

	//수정 기능
	/* 수정된 항목이 전달되면 할 일 목록에서 해당 항목을 수정하는 함수. */
	const _updateTask = id => {
		const currentTasks =  Object.assign({}, tasks);
		currentTasks[item.id] = item;
		setTasks(currentTasks);
	};
	
	const [tasks, setTasks] = useState({
		'1': { id: '1', text: 'Han', completed: false },
		'2': { id: '2', text: 'rn', completed: true },
		'3': { id: '3', text: 'rn2', completed: false },
		'4': { id: '4', text: 'edit todo ', completed: false },
	})

	return (
		<ThemeProvider theme={theme}>
			<Container>
				<StatusBar
					barStyle="light-content"
					/* statusBar의 backgroundcolor속성은 안드로이드에만 적용된다. 상태 바의 바탕색을 변경가능하다.*/
					backgroundColor={theme.background}
				/>
				<Title>TODO List</Title>
				<Input placeholder="+ Add a Task"
					value={newTask}
					onChangeText={_handleTextChange}
					onSubmitEditing={_addTask} />
				<List width={width}>
					{Object.values(tasks)
						.reverse()
						.map(item => (
							<Task 
							key={item.id} 
							/* key는 리액트에서 컴포넌트 배열을 렌더링했을 때 어떤 아이템이 추가, 수정, 삭제되었는지 식별하는 것을 돕는 고유값으로 리액트에서 특별하게 관리되며 자식 컴포넌트의 props로 전달 되지 않는다. 고유한 아이디를 갖도록 설계했으므로 id를 key값으로 지정한다.  */
							item={item} 
							/* task 컴포넌트에서 생성된 항목 삭제 함수와 함께 항목 내용 전체를 전달해 자식 컴포넌트에서도 항목의 id를 확인할 수 있도록 한다. */
							deleteTask={_deleteTask} 
							toggleTask={_toggleTask}
							/* 수정 버튼을 클릭하면 항목의 현재 내용을 가진 input 컴포넌트가 렌더링되어 사용자가 수정할 수 있다. */
							updateTask={_updateTask}
							/>
						))}
				</List>
			</Container>
		</ThemeProvider>
	);
}

/*5.5.2 delete 기능 구현시
Warning: Failed prop type: Invalid prop `item` of type `object` supplied to `Task`, expected `string`.
이라고 뜸... 뭔지 모르겠음. */