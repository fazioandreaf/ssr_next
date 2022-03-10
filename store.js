import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import data from "./pages/api/data.json";

// initial state
const startState = {
	cards: [],
};

// action
export const initialCards = () => {
	return {
		type: "INITIALCARDS",
		cards: data,
	};
};

export const addItem = (item) => {
	return {
		type: "ADDCARD",
		item,
	};
};

// reducer
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "INITIALCARDS":
			return { cards: action.cards };

		case "ADDCARD":
			return {
				...state,
				cards: [...state.cards, action.item],
			};
		default:
			return state;
	}
};

//create store
const store = (initialState = startState) => {
	return createStore(reducer, initialState);
};

export const initStore = createWrapper(store);
