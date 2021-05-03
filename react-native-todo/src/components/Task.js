import React, { useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { images } from '../images';
import Input from './Input';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0px;
`;

/* color, text-decoration-line: 미완료 항목과 명확하게 구분되도록 디자인 수정 */
const Contents = styled.Text`
  flex: 1;
  font-size: 24px;
  color: ${({ theme, completed }) => (completed ? theme.done : theme.text)};
  text-decoration-line: ${({ completed}) =>
    completed ? 'line-through' : 'none'};
`;

const Task = ({ item, deleteTask, toggleTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);

  const _handleUpdateButtonPress = () => {
    setIsEditing(true);
  };
  const _onSubmitEditing = () => {
    if (isEditing) {
      const editedTask = Object.assign({}, item, { text });
      setIsEditing(false);
      updateTask(editedTask);
    }
  };

  return isEditing ? (
    <Input
      value={text}
      onChangeText={text => setText(text)}
      onSubmitEditing={_onSubmitEditing}
    />
  ) : (
    <Container>
      <IconButton 
      type={item.completed ? images.completed : images.uncompleted}
      id={item.id}
      onPressOut={toggleTask} //완료 버튼
      completed = {item.completed} //완료 여부
      />
      <Contents completed = {item.completed}>{item.text}</Contents>
      {/* item이 완료상태일 경우, update 버튼이 나타나지 않도록 한다. */}
      {item.completed || 
        (<IconButton type={images.update} onPressOut={_handleUpdateButtonPress}/>)} 
      <IconButton
        type={images.delete}
        id={item.id} 
        onPressOut={deleteTask}
        completed={item.completed}
      />
    </Container>
  );
};

Task.propTypes = {
  item: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default Task;