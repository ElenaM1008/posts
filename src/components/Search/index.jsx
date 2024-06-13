import React, { useState } from "react"
import { Input } from "../ui/Input"
import { Button } from "../ui/Button"
import * as SC from './styles'
import { useDispatch } from "react-redux"
import { filteredSearch } from '../../redux/slices/postsSlices'

export const Search = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const dispatch = useDispatch()

	const changeSearchTerm = (e) => {
		setSearchTerm(e.target.value)
	}

	const handleSearch = () => {
		dispatch(filteredSearch(searchTerm))
	}

	return (
		<>
			<SC.Search>
				<Input
					placeholder="Search"
					onChange={changeSearchTerm}
					value={searchTerm} />
				<Button onClick={handleSearch}>Найти</Button>
			</SC.Search>
		</>
	)
}