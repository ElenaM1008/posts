import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	list: [
		{
			id: 6,
			title: 'Post 6',
			image: 'https://img51994.kanal-o.ru/img/2023-10-02/fmt_81_24_joshua-j-cotten-c1bjxqcqba0-unsplash.jpg',
			text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, assumenda!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, assumenda!'
		},
		{
			id: 5,
			title: 'Post 5',
			image: 'https://img51994.kanal-o.ru/img/2023-10-02/fmt_81_24_joshua-j-cotten-c1bjxqcqba0-unsplash.jpg',
			text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, assumenda!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, assumenda!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, assumenda!'
		},
		{
			id: 4,
			title: 'Post 4',
			image: 'https://img51994.kanal-o.ru/img/2023-10-02/fmt_81_24_joshua-j-cotten-c1bjxqcqba0-unsplash.jpg',
			text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, assumenda!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, assumenda!'
		},
		{
			id: 3,
			title: 'Post 3',
			image: 'https://img51994.kanal-o.ru/img/2023-10-02/fmt_81_24_joshua-j-cotten-c1bjxqcqba0-unsplash.jpg',
			text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, assumenda!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, assumenda!'
		},
		{
			id: 2,
			title: 'Post 2',
			image: 'https://img51994.kanal-o.ru/img/2023-10-02/fmt_81_24_joshua-j-cotten-c1bjxqcqba0-unsplash.jpg',
			text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, assumenda!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, assumenda!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, assumenda!'
		},
		{
			id: 1,
			title: 'Post 1',
			image: 'https://img51994.kanal-o.ru/img/2023-10-02/fmt_81_24_joshua-j-cotten-c1bjxqcqba0-unsplash.jpg',
			text: 'Lorem ipsum dolor sit amet ipsum dolor, sit amet consectetur adipisicing elit. Animi, assumenda!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, assumenda!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, assumenda!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, assumenda!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, assumenda!'
		},
	],
	postForView: null,
	freshPosts: null,
}

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setPosts: (state, action) => {
			state.list = action.payload
		},
		editPost: (state, action) => {

		},
		getPost: (state, action) => {
			state.postForView = state.list.find((item) => item.id === action.payload)
		},
		getFreshPosts: (state) => {
			state.freshPosts = state.list.slice(0, 3)
		},
		addPost: (state, action) => {

		},
	},
})

export const { setPosts, editPost, getPost, addPost, getFreshPosts } = postsSlice.actions

export default postsSlice.reducer