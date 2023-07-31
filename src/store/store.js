import { configureStore } from "@reduxjs/toolkit";
import testimonies from './slices/testimonies.slice'

export default configureStore({
	reducer: {
		testimonies,
	},
});
