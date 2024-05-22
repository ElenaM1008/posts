import React, { useState } from "react";
import * as SC from './styles'
import { useDispatch } from "react-redux";
import { sortPosts } from "../../redux/slices/postsSlices";

export const SortPosts = () => {
	const [sortValue, setSortValue] = useState('default')
	const dispatch = useDispatch()

	const onSort = (e) => {
		setSortValue(e.target.value)
		dispatch(sortPosts(e.target.value))
	}

	return (
		<>
			<span>Сортировать </span>
			<SC.Sort onChange={onSort} value={sortValue}>
				<option value='default'> по добавлению (from NEW to OLD)</option>
				<option value='name'> по названию (from A to Z)</option>
			</SC.Sort>
		</>
	)
}