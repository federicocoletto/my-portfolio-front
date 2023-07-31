import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const testimoniesSlice = createSlice({
	name: "testimonies",
	initialState: null,
	reducers: {
		setTestimoniesG: (state, action) => action.payload,
		createTestimonyG: (state, action) => [...state, action.payload],
		deleteTestimonyG: (state, action) => {
			return state.filter(
				(testimony) => testimony.id !== action.payload.id
			);
		},
		updateTestimonyG: (state, action) => {
			return state.map((testimony) => {
				if (testimony.id === action.payload.id) {
					return action.payload;
				} else {
					return testimony;
				}
			});
		},
	},
});

export const {
	setTestimoniesG,
	createTestimonyG,
	deleteTestimonyG,
	updateTestimonyG,
} = testimoniesSlice.actions;

export default testimoniesSlice.reducer;

// thunks
const base_url = "https://my-portfolio-testimonies-fck.onrender.com/api/v1/testimonies";

export const getAllTestimoniesThunk = () => (dispatch) => {
	const url = base_url;
	axios
		.get(url)
		.then((res) => dispatch(setTestimoniesG(res.data)))
		.catch((err) => console.log(err));
};

export const createTestimonyThunk = (newTestimony) => (dispatch) => {
	const url = base_url;
	axios
		.post(url, newTestimony)
		.then((res) => dispatch(createTestimonyG(res.data)))
		.catch((err) => console.log(err));
};

export const deleteTestimonyThunk = (destroyTestimony) => (dispatch) => {
	const testimonyId = destroyTestimony.id;
	const url = `${base_url}/${testimonyId}`;
	axios
		.delete(url, testimonyId)
		.then(() => dispatch(deleteTestimonyG(testimonyId)))
		.catch((err) => console.log(err));
};

export const updateTestimonyThunk = (updateTestimony) => (dispatch) => {
	const testimonyId = updateTestimony.id;
	const url = `${base_url}/${testimonyId}`;
	axios
		.put(url, updateTestimony) // todo put o patch
		.then(() => dispatch(updateTestimonyG(updateTestimony)))
		.catch((err) => console.log(err));
};
