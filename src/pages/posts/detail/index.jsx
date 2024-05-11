import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/Container";
import * as SC from './styles'
import { Link } from "../../../components/Link";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../../../redux/slices/postsSlices";

export const DetailPostPage = () => {
	const { id } = useParams()

	const postForView = useSelector((state) => state.posts.postForView)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPostById(Number(id)))
	}, [id])

	if(postForView.loading){
		return <Container>Loading...</Container>
	}

	if (!postForView.post || !postForView.post.hasOwnProperty('id') ) {
		return <>Пост не найден</>
	}

	const { post } = postForView

	const image = post.image || 'https://cs13.pikabu.ru/post_img/2023/09/15/0/1694727355178294790.jpg'

	return (
		<Container>
			<Typo>{post.title}</Typo>
			<SC.Image src={image} alt={post.title} />
			<SC.Text>{post.body}</SC.Text>
			<div style={{ clear: 'both' }} />
			<SC.LinkWrapper>
				<Link to='/posts/'>Обратно к публикациям</Link>
			</SC.LinkWrapper>
		</Container>
	)
} 