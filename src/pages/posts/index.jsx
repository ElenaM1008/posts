import React from "react";
import {Posts} from '../../components/Posts'
import { Container } from "../../components/Container";
import { Typo } from "../../components/Typo";

const INITIAL_POSTS = [
	{
		id: 1,
		title: 'Post 1',
		image: 'https://img51994.kanal-o.ru/img/2023-10-02/fmt_81_24_joshua-j-cotten-c1bjxqcqba0-unsplash.jpg'
	},
	{
		id: 2,
		title: 'Post 2',
		image: 'https://img51994.kanal-o.ru/img/2023-10-02/fmt_81_24_joshua-j-cotten-c1bjxqcqba0-unsplash.jpg'
	},
	{
		id: 3,
		title: 'Post 3',
		image: 'https://img51994.kanal-o.ru/img/2023-10-02/fmt_81_24_joshua-j-cotten-c1bjxqcqba0-unsplash.jpg'
	},
	{
		id: 4,
		title: 'Post 4',
		image: 'https://img51994.kanal-o.ru/img/2023-10-02/fmt_81_24_joshua-j-cotten-c1bjxqcqba0-unsplash.jpg'
	},
	{
		id: 5,
		title: 'Post 5',
		image: 'https://img51994.kanal-o.ru/img/2023-10-02/fmt_81_24_joshua-j-cotten-c1bjxqcqba0-unsplash.jpg'
	},
	{
		id: 6,
		title: 'Post 6',
		image: 'https://img51994.kanal-o.ru/img/2023-10-02/fmt_81_24_joshua-j-cotten-c1bjxqcqba0-unsplash.jpg'
	},
]

export const PostsPage = () => <>
<Container>
	<Typo>Публикации</Typo>
	<Posts posts={INITIAL_POSTS}/>
</Container>
</>