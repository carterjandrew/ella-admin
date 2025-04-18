import { Button, Card, Center, Table, Text } from '@chakra-ui/react';
import { Tables } from '../../utils/database.types';
import { FaEdit } from 'react-icons/fa';
import { TbEdit } from 'react-icons/tb';

export type ArticleCardProps = {
	article: Tables<'articles'>
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
	return (
		<Card.Root w='xl'>
			<Card.Title>
				<Center gap={2} padding={2}>
					<Text flex={1} textAlign='center'>
						{article.title}
					</Text>
					<Button padding={1} asChild>
						<a href={`articles/${article.id}`}>
							<TbEdit />
						</a>
					</Button>
				</Center>
			</Card.Title>
			<Card.Body maxH='30vh' overflowY='scroll'>
				<Table.Root>
					<Table.Body>
						{Object.entries(article).map(([k, v]) => (
							<Table.Row>
								<Table.Cell>{k}</Table.Cell>
								<Table.Cell>{v}</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table.Root>
			</Card.Body>
		</Card.Root>
	)
}

export default ArticleCard
