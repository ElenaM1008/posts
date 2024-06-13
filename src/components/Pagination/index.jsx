import React, { useEffect, useState } from 'react'
import * as SC from './styles'
import { useDispatch, useSelector } from "react-redux"
import { onClickCurrentPage } from "../../redux/slices/postsSlices"

export const Pagination = () => {
	const { list, currentPage, perPage } = useSelector((state) => state.posts.posts)
	const dispatch = useDispatch()
	const [pagination, setPagination] = useState([])

	const totalPages = Math.ceil(list.length / perPage)

	useEffect(() => {
		setPagination(new Array(totalPages).fill(0))
	}, [totalPages])

	const handleCurrentPage = (index) => {
		dispatch(onClickCurrentPage(index))
	}
	
	return (
		<SC.Pagination>
			{
				pagination.map((page, index) => (<SC.Page key={index}
					$isCurrent={currentPage === index + 1}
					onClick={() => handleCurrentPage(index + 1)}>
					{index + 1}
				</SC.Page>))
			}
		</SC.Pagination>
	)
}