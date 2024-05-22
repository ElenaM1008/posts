import React from 'react'
import * as SC from './styles'

export const Pagination = ({ currentPage, totalPages, handleCurrentPage }) => {

	const pagination = []

	for (let i = 0; i < totalPages; i++) {
		pagination.push(i + 1)
	}

	return (
		<SC.Pagination>
			{
				pagination.map((page) => (<SC.Page key={page}
					$isCurrent={currentPage === page}
					onClick={() => handleCurrentPage(page)}>
					{page}
				</SC.Page>))
			}
		</SC.Pagination>
	)
}