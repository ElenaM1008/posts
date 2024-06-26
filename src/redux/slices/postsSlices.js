import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postsAPI } from '../../api/postsAPI'

const initialState = {
	posts: {
		list: null,
		loading: false,
		currentPage: 1,
		perPage: 10,
		sortValue: 'default',
		search: null,
	},
	postForView: {
		post: null,
		loading: false,
	},
	freshPosts: {
		posts: null,
		loading: false,
	},
}

export const getPostById = createAsyncThunk(
	'posts/fetchById',
	async (postId) => {
		return await postsAPI.fetchById(postId)
	},
)

export const getPosts = createAsyncThunk(
	'posts/fetchPosts',
	async () => {
		return await postsAPI.fetchPosts()
	},
)

export const getFreshPosts = createAsyncThunk(
	'posts/fetchFreshPosts',
	async (limit) => {
		return await postsAPI.fetchFreshPosts(limit)
	},
)

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		editPost: (state, action) => {
			state.posts.list = state.posts.list.map((post) => {
				if (post.id === action.payload.id) {
					return action.payload
				}
				return post
			})
		},
		addPost: (state, action) => {
			const newPost = { ...action.payload }
			newPost.id = new Date().getTime()
			state.posts.list = state.posts.list ? [newPost, ...state.posts.list] : [newPost]
		},
		onClickCurrentPage: (state, action) => {
			state.posts.currentPage = action.payload
		},
		filteredSearch: (state, action) => {
			const filteredPosts = state.posts.search.filter((post) => post.title.toLowerCase().includes(action.payload.toLowerCase()))
			if (state.posts.sortValue !== 'default') {
				filteredPosts.sort((a, b) => a.title > b.title ? 1 : -1)
			}
			state.posts.list = filteredPosts
			state.posts.currentPage = 1
		},
		sortPosts: (state, action) => {
			state.posts.sortValue = action.payload
			state.posts.list = action.payload === 'name' ? state.posts.list.sort((a, b) => a.title > b.title ? 1 : -1) : state.posts.list.sort((a, b) => a.id < b.id ? 1 : -1)
		},
		deletePost: (state, action) => {
			state.posts.list = state.posts.list.filter((post) => post.id !== action.payload.id)
			state.freshPosts.posts = state.freshPosts.posts.filter((post) => post.id !== action.payload.id)
			state.postForView = {
				post: null,
				loading: false,
			}
		},
		showPost: (state, action) => {
			state.postForView = {
				post: action.payload,
				loading: false,
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getPostById.pending, (state) => {
				state.postForView = {
					post: null,
					loading: true,
				}
			})
			.addCase(getPostById.fulfilled, (state, action) => {
				state.postForView = {
					post: action.payload,
					loading: false,
				}
			})
			.addCase(getPosts.pending, (state) => {
				state.posts = {
					list: null,
					loading: true,
				}
			})
			.addCase(getPosts.fulfilled, (state, action) => {
				state.posts = {
					list: action.payload,
					loading: false,
					currentPage: 1,
					perPage: 10,
					sortValue: 'default',
					search: [...action.payload],
				}
			})
			.addCase(getFreshPosts.pending, (state) => {
				state.freshPosts = {
					posts: null,
					loading: true,
				}
			})
			.addCase(getFreshPosts.fulfilled, (state, action) => {
				state.freshPosts = {
					posts: action.payload,
					loading: false,
				}
			})
	},
})

export const { editPost, addPost, showPost, deletePost, onClickCurrentPage, sortPosts, filteredSearch } = postsSlice.actions

export default postsSlice.reducer