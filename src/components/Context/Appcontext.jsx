import { createContext, useReducer } from 'react';
import appReducer from './appReducer';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const initialState = {
		showCart: false,
		products: []		
	};
	const [state, dispatch] = useReducer(appReducer, initialState)

	return (
		<AppContext.Provider
			value={{
				...state,
				dispatch	
			}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;