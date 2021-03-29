import React, { useState } from 'react';
import styled from 'styled-components/native';
import Button from './Button';

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const Counter = () => {
	//count : 숫자의 상태를 나타냄. 
	const [count, setCount] = useState(0);

	return (
		<>
			<StyledText>count: {count}</StyledText>
			{/* 버튼이 클릭될 때 마다 세터함수를 이용해 상태를 변경한다. */}
			<Button
				title="+"
				onPress={() => {
					/* 증가 버튼 -> 세터함수 2번 호출, 콘솔에는 현재 상태값 출력
					세터함수가 비동기로 동작하기 때문에 세터함수를 호출해도 바로 상태가 변경되지 않는다는 점에서 발생하는 문제이다. 이렇게 상태에 대해 여러 업데이트가 함께 발생할 경우, 세터함수에 함수를 인자로 전달해서 이전 상태값을 이용하면 문제를 해결할 수 있다. 

					setCount(count + 1);
					setCount(count + 1);
					console.log(`count: ${count}`);

					*/
					// 이전 상태의 값에 의존하여 상태를 변경할 경우, 세터함수에 인자로 전달하여 이전 값을 이용하도록 작성해야한다. 
					setCount(prevCount => prevCount + 1);
					setCount(prevCount => prevCount + 1);
				}}
			/>
			<Button
				title="-"
				onPress={() => {
					setCount(count - 1);
				}}
			/>
		</>
	);
};

export default Counter;