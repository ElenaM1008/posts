import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postsAPI } from '../../api/postsAPI'

const initialState = {
	posts: {
		list: null,
		loading: false,
		currentPage: 1,
		perPage: 10,
		value: 'default',
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
		searchByTitle: (state, action) => {
			const newList = [...state.posts.list]
			state.posts.list = action.payload.length === 0 ? null : newList.filter((post) => post.title.toLowerCase().includes(action.payload.toLowerCase()))
		},
		sortPosts: (state, action) => {
			const newList = [...state.posts.list]
			state.posts = {
				list: action.payload === 'name'? newList.sort((a, b) => a.title > b.title ? 1 : -1) : newList.sort((a, b) => a.id < b.id ? 1 : -1),
				loading: false,
				currentPage: 1,
				perPage: 10,
				value: action.payload,
			}
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
					value: 'default',
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

export const { editPost, addPost, showPost, deletePost, onClickCurrentPage, searchByTitle, sortPosts } = postsSlice.actions

export default postsSlice.reducer