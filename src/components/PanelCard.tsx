import { Button, Card, Center, Table, Text } from '@chakra-ui/react'
import { FaBookmark } from 'react-icons/fa'
import { TbEdit } from 'react-icons/tb'
import { useState } from 'react'
import { Tables } from '../../utils/database.types'

type PanelCardProps = {
	panel: Tables<'panels'>
}

const PanelCard: React.FC<PanelCardProps> = ({ panel }) => {
	const [pinned, setPinned] = useState(true)
	return (
		<Card.Root w='xl'>
			<Card.Title>
				<Center gap={2} padding={2}>
					<Button
						padding={1}
						variant={pinned ? 'solid' : 'outline'}
						onClick={() => setPinned(!pinned)}
					>
						<FaBookmark />
					</Button>
					<Text flex={1} textAlign='center'>
						{panel.COMPONENT}
					</Text>
					<Button padding={1} asChild>
						<a href={`forms/${panel.ID}`}>
							<TbEdit />
						</a>
					</Button>
				</Center>
			</Card.Title>
			<Card.Body maxH='30vh' overflowY='scroll'>
				<Table.Root>
					<Table.Body>
						{Object.entries(panel).map(([k, v]) => (
							<Table.Row key={k}>
								<Table.Cell>{k}</Table.Cell>
								<Table.Cell>{v}</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table.Root>
			</Card.Body>
		</Card.Root >
	)
}
export default PanelCard
