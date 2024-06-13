import styled from "styled-components";

export const Pagination = styled.div`
   display: flex;
	margin-top: 60px;
	margin-bottom: 60px;
	justify-content: center;
	align-items: center;
	gap: 20px;
	cursor: pointer;
`
export const Page = styled.div`
   font-size: 16px;
	font-weight: 400;
	line-height: 16px;
	margin-right: 10px;
	color: ${props => props.$isCurrent ? 'red' : 'black'};

	&:hover{
		font-size:${props => props.$isCurrent ? '16px' : '20px'};
		color: ${props => props.$isCurrent ? 'black' : 'red'};
	}
`