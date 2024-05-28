import React, { useEffect, useState } from "react";
import { Posts } from '../../components/Posts'
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, onClickCurrentPage } from "../../redux/slices/postsSlices";
import { LoaderSpinner } from '../../components/ui/LoaderSpinner'
import { Pagination } from "../../components/ui/Pagination";
import { Search } from "../../components/Search";
import { SortPosts } from "../../components/SortPosts";

export const PostsPage = () => {
	const [searchTerm, setSearchTerm] = useState('')
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

	const filteredList = () => {
		return list.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
	}

	const totalPages = Math.ceil(filteredList().length / perPage)

	const lastIndex = currentPage * perPage
	const firstIndex = lastIndex - perPage
	const slicedPosts = filteredList().slice(firstIndex, lastIndex)

	const handleCurrentPage = (page) => {
		dispatch(onClickCurrentPage(page))
	}

	return (
		<Container>
			<Typo>Публикации</Typo>
			<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<SortPosts />
			<Posts posts={slicedPosts} />
			<Pagination currentPage={currentPage} totalPages={totalPages} handleCurrentPage={handleCurrentPage} />
		</Container>
	)
}