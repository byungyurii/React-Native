import React, { createContext, useState } from 'react';

// 2.2.3 context 수정하기

const UserContext = createContext({
	user: { name: ''},
	dispatch: () => {},
});

const UserProvider = ({ children }) => {
	const [name, setName] = useState('Kim');

	const value = { user: { name }, dispatch: setName };
	return (
		<UserContext.Provider value={value}>
			{children}
		</UserContext.Provider>
	);
}

const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};

// 2.2.1

// const UserContext = createContext({ name: 'Kim' });

export default UserContext;