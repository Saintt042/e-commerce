const appReducer = (state, action) => {
	switch (action.type) {
		case 'SHOW_CART':
			return {
				...state,
				showCart: state.showCart ? false : true,
			};

		case 'GET_ITEMS':
			return {
				...state,
				products: action.payload
			};

		case 'GET_BANNER':
			return {
				...state,
				banner: action.payload
			}

		
		default:
			return state;
	}
};

export default appReducer