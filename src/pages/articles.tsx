import Loading from "@/components/loading";
import { InputGroup } from "@/components/ui/input-group";
import { Button, Flex, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import supabase from "../../utils/supabase";
import { Tables } from '../../utils/database.types'
import ArticleCard from "@/components/articleCard";

export default function Articles() {
	const [recentArticles, setRecentArticles] = useState<Tables<'articles'>[]>()
	useEffect(() => {
		async function fetchRecentArticles() {
			const { data } = await supabase.from('articles').select('*')
			setRecentArticles(data)
		}
		fetchRecentArticles().catch(console.error)
	}, [])
	useEffect(() => {
		console.log("Recent Articles", recentArticles)
	}, [recentArticles])
	if (!recentArticles) return (
		<Flex flexDir='column' p={5} gap={5} alignItems='center' flex={1}>
			{recentArticles ? (
				<></>
			) : (
				<Loading message='Loading recent articles' />
			)}
		</Flex>
	)
	return (
		<Flex flexDir='column' p={5} gap={5} alignItems='center' flex={1} minH={0}>
			<InputGroup startElement={<FaSearch />}>
				<Input
					placeholder='Search Articles'
				/>
			</InputGroup>
			<Flex flex={1} flexDir='column' gap={5} overflowY='scroll' w='100%' alignItems='center'>
				{recentArticles.map(a => (
					<ArticleCard article={a} />
				))}
			</Flex>
			<Button colorPalette='green' variant='subtle' asChild>
				<a href='/articles/new'>
					<FaPlus />
					Create New Article
				</a>
			</Button>
		</Flex>
	)
}
