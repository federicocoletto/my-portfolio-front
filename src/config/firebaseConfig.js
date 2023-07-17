import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyAbl90RFU8UjQ_DTpZ9IuVhSTE2JDTskPA",
	authDomain: "myportfolio-21807.firebaseapp.com",
	projectId: "myportfolio-21807",
	storageBucket: "myportfolio-21807.appspot.com",
	messagingSenderId: "908226384572",
	appId: "1:908226384572:web:ad33697bba26bf93f836b9",
	measurementId: "G-YT2GXE4K9C",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
