import { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	// const [showNav, setShowNav] = useState(false);

	const setClick = () => {
		setShowCart(!showCart);
	};
	// const navClick = () => setShowNav(!showNav);

	return (
		<AppContext.Provider
			value={{
				showCart,
				setShowCart,
				// showNav,
				setClick,
				// navClick,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;