import React from "react";
import { Input } from "../ui/Input";
import * as SC from './styles'

export const Search = ({ searchTerm, setSearchTerm }) => {

	const changeSearchTerm = (e) => {
		setSearchTerm(e.target.value)
	}

	return (
		<SC.Search>
			<Input
				placeholder="Search"
				onChange={changeSearchTerm}
				value={searchTerm} />
		</SC.Search>
	)
}