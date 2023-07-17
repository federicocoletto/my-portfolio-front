import axios from "axios";
import { useState } from "react";

const useFetch = (baseURL) => {
	const [apiInfo, setApiInfo] = useState();

	const getApiInfo = () => {
		const url = baseURL;
		axios.get(url)
		.then(res => setApiInfo(res.data))
		.catch(err => console.log(err))
	}
}