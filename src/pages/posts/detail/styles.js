import styled from "styled-components";

export const Text = styled.div`
   font-size:15px;
`
export const Image = styled.img`
   max-width: 200px;
	float: left;
	margin-right: 15px;
`

export const LinkWrapper = styled.div`
	margin: 15px 0 0 0;
	display: flex;
	gap: 15px;
	justify-content:center;
	width: 100%;
	align-items:center;
`

export const DeleteButton = styled.button`
	border: 1px solid black;
	background:white;
	padding: 5px 15px;
	color: black;
	border-radius: 10px;
	cursor: pointer;

	&:hover{
		background:red;
		color: white;
		border: 1px solid red;
	}
`