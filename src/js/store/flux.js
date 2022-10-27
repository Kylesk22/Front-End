import { Navigate } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			email: "",
			loggedIn: false,
			
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				if (token && token != "" && token != undefined) setStore({token: token})
			},

			logout: () => {
				sessionStorage.removeItem("token");
				setStore({token: null})
				setStore({email: null})
			},
			
			signup: async (email, password, first_name, last_name) => {
				const ops = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"email": email,
						"password": password,
						"first-name": first_name,
						"last_name": last_name
					})

				}

				try {
				const resp = await fetch('https://3001-kylesk22-backend-v1vfho00s6i.ws-us71.gitpod.io/api/signup', {ops})
				if (resp.status !== 200) {
				alert("There has been an error")
				return false
				}
				const data = await resp.json();		
				sessionStorage.setItem("token", data.access_token)
				setStore({token: data.access_token})
				actions.setStore({email: email})
					
				}
				catch (err) {
					console.error(err);
				}
			},

			login: async(email, password) => {
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"email": email,
						"password": password
					})
					}

					try{
					const resp = await fetch('https://3001-kylesk22-backend-v1vfho00s6i.ws-us72.gitpod.io/api/login', opts)
					if (resp.status !== 200) {
						alert("There has been an error")
						return false
					}
					
					const data = await resp.json();		
					sessionStorage.setItem("token", data.access_token)
					setStore({token: data.access_token})
					actions.setStore({email: email})
					actions.setStore({loggedIn: true})
					console.log(store.loggedIn)
					return true
					}
					catch(error) {
						console.error("There has been an error")
					}
				},



			setEmail: (e) => {
				setStore({email: e})
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
