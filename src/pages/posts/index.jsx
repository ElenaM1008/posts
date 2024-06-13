import React, { useEffect } from "react";
import { Posts } from '../../components/Posts'
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/slices/postsSlices";
import { LoaderSpinner } from '../../components/ui/LoaderSpinner'
import { Pagination } from "../../components/Pagination";
import { Search } from "../../components/Search";
import { SortPosts } from "../../components/SortPosts";

export const PostsPage = () => {
	const { list, loading, currentPage, perPage } = useSelector((state) => state.posts.posts)
	const dispatch = useDispatch()

	useEffect(() => {
		if (!list) {
			dispatch(getPosts())
		}
	}, [list, dispatch])

	if (!list && loading) {
		return <LoaderSpinner />
	}

	if (!list) {
		return <>404</>
	}

	const lastIndex = currentPage * perPage
	const firstIndex = lastIndex - perPage
	const slicedPosts = list.slice(firstIndex, lastIndex)

	return (
		<Container>
			<Typo>Публикации</Typo>
			<Search />
			<SortPosts />
			<Posts posts={slicedPosts} />
			<Pagination />
		</Container>
	)
}