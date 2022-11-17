

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
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
			
			signup: async (email, password, first_name, last_name, gym2) => {

				try {
					const resp = await fetch('https://spotter1.herokuapp.com/api/signup', {
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
					const resp = await fetch('https://spotter1.herokuapp.com/api/login', {
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
					
					const data = await resp.json();		
					console.log(data);
					sessionStorage.setItem("token", data.access_token);
					sessionStorage.setItem("email", email);
					sessionStorage.setItem("firstName", data.user.first_name);
					sessionStorage.setItem("lastName", data.user.last_name);
					let gym = data.gym
					let gym1 = gym.replace(/</g , "").replace(/>/g, "")
					let sunArr = "";
					let monArr = "";
					let tueArr = "";
					let wedArr = "";
					let thuArr = "";
					let friArr = "";
					let satArr = "";
					
					sessionStorage.setItem("gym", gym1);
					if (data.user.sunday !== "") {
					let sun = data.user.sunday.replace(/{/g, "").replace(/}/g, "");
					sunArr = sun.split(",")
					}
					if (data.user.monday !== "") {
					let mon = data.user.monday.replace(/{/g, "").replace(/}/g, "");
					monArr = mon.split(",")
					}
					if (data.user.tuesday !== "") {
					let tue = data.user.tuesday.replace(/{/g, "").replace(/}/g, "");
					tueArr = tue.split(",")
					}
					if (data.user.wednesday !== "") {
					let wed = data.user.wednesday.replace(/{/g, "").replace(/}/g, "");
					wedArr = wed.split(",")
					}
					if (data.user.thursday !== "") {
					let thu = data.user.thursday.replace(/{/g, "").replace(/}/g, "");
					thuArr = thu.split(",")
					}
					if (data.user.friday !== "") {
					let fri = data.user.friday.replace(/{/g, "").replace(/}/g, "");
					friArr = fri.split(",")
					}
					if (data.user.saturday !== "") {
					let sat = data.user.satuday.replace(/{/g, "").replace(/}/g, "")
					satArr = sat.split(",")
					}


					console.log(sunArr)
					
					
					setStore({token: data.access_token});
					setStore({email: email});
					setStore({loggedIn: true});
					setStore({firstName: data.user.first_name});
					setStore({lastName: data.user.last_name});
					setStore({gym: gym1});
					setStore({friends: data.user.friends});
					setStore({sunday: sunArr});
					setStore({monday: monArr});
					setStore({tuesday: tueArr});
					setStore({wednesday: wedArr});
					setStore({thursday: thuArr});
					setStore({friday: friArr});
					setStore({saturday: satArr});

					
				
					
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
					const resp= await fetch(`https://spotter1.herokuapp.com/api/user/workouts/${email}` , {
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
				setStore({monday: monday});
				setStore({tuesday: tuesday});
				setStore({wednesday: wednesday});
				setStore({thursday: thursday});
				setStore({friday: friday});
				setStore({saturday: saturday});
				return true
				}
				catch(error) {
					console.error(error)
				}
			
			},



			
			
			getCalendar: async() => {
				const store = getStore();
				const token = sessionStorage.getItem("token")
				const email = sessionStorage.getItem("email");
				
				try{
					const resp = await fetch(`https://spotter1.herokuapp.com/api/user/workouts/${email}`, {
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
