

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			userPosts: "",
			token: null,
			email: "",
			loggedIn: false,
			sunday: "",
			monday: "",
			tuesday: "",
			wednesday: "",
			thursday: "",
			friday: "",
			saturday: "",
			firstName: "",
			lastName: "",
		
			
			
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			setDays: (sunday, monday, tuesday, wednesday, thursday, friday, saturday) => {
				setStore(
					{sunday: sunday},
					{monday: monday},
					{tuesday: tuesday},
					{wednesday: wednesday},
					{thursday: thursday},
					{friday: friday},
					{satuday: saturday}
				)
			},
			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				const email = sessionStorage.getItem("email");
				const firstName = sessionStorage.getItem("firstName");
				const lastName = sessionStorage.getItem("lastName")
				if (token && token != "" && token != undefined) setStore({token: token})
				if (email && email != "" && email != undefined) setStore({email: email})
				if (firstName && firstName != "" && firstName != undefined) setStore({firstName: firstName})
				if (lastName && lastName != "" && lastName != undefined) setStore({lastName: lastName})
			},

			logout: () => {
				sessionStorage.removeItem("token");
				sessionStorage.removeItem("email");
				sessionStorage.removeItem("firstName");
				sessionStorage.removeItem("lastName");
				sessionStorage.removeItem("gym");
				setStore({token: null});
				setStore({email: null});
				setStore({loggedIn: false});
			},

			post: async (title, content, email) => {
				try {
					const resp = await fetch(`https://3001-kylesk22-backend-xrigaksu76j.ws-us74.gitpod.io/api/post/${email}`, {
						method: "POST", 
						headers: {
						"Content-Type": "application/json",

						},
						body: JSON.stringify({
							"title": title,
							"content": content
						})
					})
				}
				catch(err) {
					alert("Post did not submit correctly check requirements");
					console.error(err)
				}
			},
			getUserPosts: async (email) => {
				let resp = await fetch(`https://3001-kylesk22-backend-xrigaksu76j.ws-us74.gitpod.io/api/post/${email}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				});
				let data = await resp.json();
				console.log(data)
				const store = getStore();
				setStore({"userPosts": data})
				console.log(store.userPosts)
			},
				
			
			


			signup: async (email, password, first_name, last_name, gym2) => {

				try {
					const resp = await fetch('https://3001-kylesk22-backend-xrigaksu76j.ws-us74.gitpod.io/api/signup', {
						method: "POST", 
						headers: {
						"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"email": email,
							"password": password,
							"first_name": first_name,
							"last_name": last_name,
							"gym": gym2
						})

					})
					
					
				const data = await resp.json();		
				sessionStorage.setItem("token", data.access_token);
				sessionStorage.setItem("email", email);
				sessionStorage.setItem("firstName", first_name);
				sessionStorage.setItem("lastName", last_name);
				sessionStorage.setItem("gym", gym2);
				setStore({token: data.access_token});
				setStore({email: email})
				setStore({loggedIn: true})
				
				}
				catch(err) {
					alert("Email already in use, try another email!");
				}
			},

			login: async(email, password) => {
				const actions = getActions();
				const store = getStore();
			
				try{
					const resp = await fetch('https://3001-kylesk22-backend-xrigaksu76j.ws-us74.gitpod.io/api/login', {
						method: "POST",
						headers: {
						"Content-Type": "application/json"
						},
						body: JSON.stringify({
						"email": email,
						"password": password
					})
				})
					if (resp.status !== 200) {
						alert("Incorrect Username or Password")
						return false
					}
					if (resp.status === 200) {
						actions.getUserPosts(email)
					}
					
					const data = await resp.json();		
					console.log(data);
					sessionStorage.setItem("token", data.access_token);
					sessionStorage.setItem("email", email);
					sessionStorage.setItem("firstName", data.user.first_name);
					sessionStorage.setItem("lastName", data.user.last_name);
					let gym = data.gym
					let gym1 = gym.replace(/</g , "").replace(/>/g, "")
					console.log(gym1)
					sessionStorage.setItem("gym", gym1);
					setStore({token: data.access_token});
					setStore({email: email});
					setStore({loggedIn: true});
					setStore({firstName: data.user.first_name});
					setStore({lastName: data.user.last_name});
					setStore({gym: gym1});
					setStore({friends: data.user.friends});
					setStore({sunday: data.user.sunday});
					setStore({monday: data.user.monday})
					setStore({tuesday: data.user.tuesday})
					setStore({wednesday: data.user.wednesday})
					setStore({thursday: data.user.thursday})
					setStore({friday: data.user.friday})
					setStore({saturday: data.user.satuday})

					
				
					
					return true
					}
					catch(error) {
						console.error(error)
					}
				},



			setEmail: (e) => {
				setStore({email: e})
			},

			setCalendar: async(sunday, monday, tuesday, wednesday, thursday, friday, saturday, email, token) => {
				try{
					const resp = await fetch(`https://3001-kylesk22-backend-xrigaksu76j.ws-us74.gitpod.io/api/user/workouts/${email}` , {
						method: ("POST"),
						headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${token}`,
						},
						body: JSON.stringify({
						"email": email,
						"sunday": sunday,
						"monday": monday,
						"tuesday": tuesday,
						"wednesday": wednesday,
						"thursday": thursday,
						"friday": friday,
						"saturday": saturday

					})
				})
				if (resp.status !== 200) {
					alert("ERROR")
					return false
				}
				return true
				}
				catch(error) {
					console.error(error)
				}
			
			},


			followGym: async(email, gymName) => {
				try {
					const resp = await fetch(`https://3001-kylesk22-backend-xrigaksu76j.ws-us74.gitpod.io/api/follow/gym/${email}`, {
						method: "POST", 
						headers: {
						"Content-Type": "application/json",

						},
						body: JSON.stringify({
							"gym": gymName
						})
					})
				} catch(err) {
					return err
				}
			},

			allGymFollowers: async(gymName) => {
				try {
					const resp = await fetch(`https://3001-kylesk22-backend-xrigaksu76j.ws-us74.gitpod.io/api/gym/followers${gymName}`, {
						method: "GET", 
						headers: {
						"Content-Type": "application/json",
						}
					})
				} catch(err) {
					return err
				}
			},
			
			

			
			
			getCalendar: async() => {
				const store = getStore();
				const token = sessionStorage.getItem("token")
				const email = sessionStorage.getItem("email");
				
				try{
					const resp = await fetch(`https://3001-kylesk22-backend-xrigaksu76j.ws-us74.gitpod.io/api/user/workouts/${email}`, {
						method: "GET",
						headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${token}`
						},
						
				})
					if (resp.status !== 200) {
						alert("Not Authorized")
						return false
					}
					
					const data = await resp.json();	
					console.log(data);
					let workout = [];
					let removeBracket = data.replace(/}/g,"");
					let removeBracket2 = removeBracket.replace(/{/g,"");
					let dataBreak = removeBracket2.split(",")
					console.log(dataBreak)
					for (let i = 0; i < dataBreak.length; i++) {
	
						workout.push(dataBreak[i]);
					}
					setStore({sunday: workout[0]});
					setStore({monday: workout[1]});
					console.log(store.sunday);
					console.log(store.monday);


					
					return true
					}
					catch(error) {
						console.error(error)
					}
				},
				
			// setStore({sunday: sunday});
			// setStore({monday: monday});
			// setStore({tuesday: tuesday});
			// setStore({wednesday: wednesday});
			// setStore({thursday: thursday});
			// setStore({friday: friday});
			// setStore({satuday: saturday});
			// return true

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
