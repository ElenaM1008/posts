export const postsAPI = {
	async fetchPosts() {
		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc`)
			const post = await response.json()
			return post
		}
		catch (ex) {
			console.log(ex)
		}
	},
	async fetchFreshPosts(limit = 3) {
		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_sort=id&_order=desc`)
			const post = await response.json()
			return post
		}
		catch (ex) {
			console.log(ex)
		}
	},
	async fetchById(id) {
		try {
			if (!id) {
				throw new Error('Id is broken')
			}
			const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			const post = await response.json()
			return post
		}
		catch (ex) {
			console.log(ex)
		}
	}
}