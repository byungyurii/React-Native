import React, { createContext, useState } from 'react';

const UserContext = createContext({
  user: { name: '' },
  dispatch: () => {},
});

//provider zjavhsjsxmdml value에 전역적으로 관리할 상태 변수와 상태를 변경하는 함수를 함께 전달하는 UserProvider 컴포넌트를 생성했다. 
// 기존의 Provider 컴포넌트와 사용법이 동일하지만 하위에 있는 Consumer 컴포넌트의 자식 함수의 파라미터로 데이터뿐만 아니라 데이터를 변경할 수 있는 함수도 함께 전달한다. 
const UserProvider = ({ children }) => {
  const [name, setName] = useState('Beomjun Kim');

  const value = { user: { name }, dispatch: setName };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;


/*
// 7.2.1. Consumer
import { createContext } from 'react';

const UserContext = createContext({ name: 'Beomjun Kim' });

export default UserContext;
*/