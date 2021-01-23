import Vue from 'vue'
import axios from "axios"
const Axios = axios.create({
	baseURL: process.env.VUE_APP_BASE_URL,
	headers: {
		Authorization:
			"Bearer " + process.env.VUE_APP_TOKEN
	},
})

Vue.prototype.$axios = Axios
