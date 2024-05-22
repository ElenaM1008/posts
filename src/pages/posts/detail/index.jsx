import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typo } from "../../../components/ui/Typo";
import { Container } from "../../../components/ui/Container";
import * as SC from './styles'
import { Link } from "../../../components/ui/Link";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, showPost, deletePost } from "../../../redux/slices/postsSlices";
import { Button } from "../../../components/ui/Button";
import { Modal } from "../../../components/ui/Modal";
import {LoaderSpinner} from '../../../components/ui/LoaderSpinner'

export const DetailPostPage = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { list } = useSelector((state) => state.posts.posts)
	const postForView = useSelector((state) => state.posts.postForView)
	const { user } = useSelector((state) => state.auth)

	const showEditAndDeleteBtn = list && user

	const [postForDelete, setPostForDelete] = useState(null)

	const onDeletePost = () => {
		dispatch(deletePost(postForDelete))

		setPostForDelete(null)

		return navigate('/posts')
	}

	useEffect(() => {
		const intId = Number(id)
		const findedPost = list ? list.find((item) => item.id === intId) : undefined
		if (findedPost) {
			dispatch(showPost(findedPost))
		} else {
			dispatch(getPostById(intId))
		}
	}, [id, list, dispatch])

	if (postForView.loading) {
		return <LoaderSpinner/>
	}

	if (!postForView.post || !postForView.post.hasOwnProperty('id')) {
		return <>Пост не найден</>
	}

	const { post } = postForView

	const image = post.image || 'https://cs13.pikabu.ru/post_img/2023/09/15/0/1694727355178294790.jpg'

	return (
		<Container>
			{postForDelete &&
				<Modal
					text={`Вы точно уверены, что хотите удалить публикацию с ID - ${postForDelete.id}?`}
				>
					<Button onClick={onDeletePost}> Да</Button>
					<Button onClick={() => setPostForDelete(null)}>Нет</Button>
				</Modal>
			}
			<Typo>{post.title}</Typo>
			<SC.Image src={image} alt={post.title} />
			<SC.Text>{post.body}</SC.Text>
			<div style={{ clear: 'both' }} />
			<SC.LinkWrapper>
				<Link to='/posts/'>Обратно к публикациям</Link>
				{showEditAndDeleteBtn && <Link to={`/posts/${post.id}/edit`}>Редактировать пост</Link>}
				{showEditAndDeleteBtn && <SC.DeleteButton onClick={() => setPostForDelete(post)} >Удалить пост</SC.DeleteButton>}
			</SC.LinkWrapper>
		</Container>
	)
} 