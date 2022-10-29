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

				try {
					const resp = await fetch('https://3001-kylesk22-backend-v1vfho00s6i.ws-us73.gitpod.io/api/signup', {
						method: "POST", 
						headers: {
						"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"email": email,
							"password": password,
							"first_name": first_name,
							"last_name": last_name
						})

				})
					if (resp.status !== 200) {
					alert("There has been an error")
					return false
				}
				const data = await resp.json();		
				sessionStorage.setItem("token", data.access_token);
				setStore({token: data.access_token});
				setStore({email: email})
				
				}
				catch(err) {
					console.error(err);
				}
			},

			login: async(email, password) => {
				const opts2 = {
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
					const resp = await fetch('https://3001-kylesk22-backend-v1vfho00s6i.ws-us73.gitpod.io/api/login', opts2)
					if (resp.status !== 200) {
						alert("Incorrect Username or Password")
						return false
					}
					
					const data = await resp.json();		
					sessionStorage.setItem("token", data.access_token);
					setStore({token: data.access_token});
					setStore({email: email});
					setStore({loggedIn: true});
					return true
					}
					catch(error) {
						console.error(error)
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
