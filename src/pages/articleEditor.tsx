import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Tables } from "../../utils/database.types"
import supabase from "../../utils/supabase"
import Loading from "@/components/loading"
import { Box, Button, Card, Flex, Image, Input, Table, Tag, Text, Textarea, Wrap } from "@chakra-ui/react"
import { FaBrain, FaCross, FaSave } from "react-icons/fa"
import { FaX } from "react-icons/fa6"

export default function ArticleEditor() {
	const { articleID } = useParams()
	const [article, setArticle] = useState<Tables<'articles'>>()
	const [images, setImages] = useState<string[]>()
	const [uploadedFiles, setUploadedFiles] = useState<FileList>()

	useEffect(() => {
		if (!uploadedFiles) return
		const imageUrls = Array.from(uploadedFiles).map(f => URL.createObjectURL(f))
		console.log(imageUrls)
		setImages(imageUrls)
	}, [uploadedFiles])

	useEffect(() => {
		async function fetchArticle() {
			if (!articleID) return
			const { data } = await supabase
				.from('articles')
				.select('*')
				.eq('id', parseInt(articleID))
				.single()
			if (!data) throw new Error("No article found")
			setArticle(data)
		}
		if (articleID === 'new') {
			setArticle({
				read_time: 0,
				tags: '[]',
				summary: '',
				title: '',
				id: 100,
				article_link: '',
				date_added: (new Date()).toString(),
				published: (new Date()).toString(),
			})
		}
		else fetchArticle().catch(console.error)
	}, [])
	if (!article) return (
		<Loading message="Loading Article" />
	)
	return (
		<Flex flexDir='column' p={5} gap={5} flex={1} minH={0}>
			<Button><FaSave /> Save </Button>
			<Flex flexDir='column' gap={5} flex={1} overflowY='scroll'>
				<Text fontWeight={900}>Title:</Text>
				<Input
					fontSize='3xl'
					value={article.title}
					placeholder='Title'
					textWrap='wrap'
					overflowX='unset'
					variant='flushed'
					onChange={(e) => setArticle({
						...article,
						title: e.target.value
					})}
				/>
				<Text fontWeight={900}>Images:</Text>
				<Flex flexDir='row' gap={5}>
					{images ? images.map((i, index) => (
						<Box pos='relative'>
							<Image
								boxSize='sm'
								src={i}
							/>
							<Button
								pos='absolute'
								top={5}
								left={5}
								zIndex={5}
								variant='subtle'
							>
								<FaX />
							</Button>
						</Box>
					)) : (<>WTF</>)}
				</Flex>
				<Input
					type='file'
					multiple
					onChange={(e) => {
						setUploadedFiles(e.target.files)
					}}
				/>
				<Text fontWeight={900}>URL:</Text>
				<Flex flexDir='row' gap={3}>
					<Input
						flex={1}
						value={article.article_link}
						placeholder='url'
						onChange={e => setArticle({
							...article,
							article_link: e.target.value
						})}
					/>
					<Button><FaBrain /> Generate from url </Button>
				</Flex>
				<Text fontWeight={900}>Date Published</Text>
				<Input
					type='date'
					value={article.published}
					onChange={e => setArticle({
						...article,
						published: e.target.value
					})}
				/>
				<Text fontWeight={900}>Read Time:</Text>
				<Input
					type='number'
					value={article.read_time}
					onChange={e => setArticle({
						...article,
						read_time: e.target.value.toString()
					})}
				/>
				<Text fontWeight={900}>Tags:</Text>
				<Wrap>
					{JSON.parse(article.tags!).map(a => (
						<Tag.Root>
							<Tag.Label>
								{a}
							</Tag.Label>
							<Tag.EndElement>
								<Tag.CloseTrigger
									onClick={() => setArticle({
										...article,
										tags: JSON.stringify(
											JSON.parse(article.tags)
												.filter(t => t !== a)
										)
									})}
								/>
							</Tag.EndElement>
						</Tag.Root>
					))}
					<Input
						size='sm'
						placeholder="Add new tag"
					/>
				</Wrap>
				<Text fontWeight={900}>Summary:</Text>
				<Textarea
					rows={50}
					value={article.summary}
					onChange={(e) => setArticle({
						...article,
						summary: e.target.value
					})}
				/>
			</Flex>
		</Flex>
	)
}
