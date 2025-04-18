import { InputGroup } from "@/components/ui/input-group";
import { Center, Flex, Heading, Input, Spinner } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import PanelCard from "@/components/PanelCard";
import { createContext, useContext, useEffect, useState } from "react";
import supabase from '../../utils/supabase'
import { Tables } from '../../utils/database.types'
import Loading from "@/components/loading";


export default function Forms() {
	const [pinnedPanels, setPinnedPanels] = useState<Tables<'pinned'>[]>()
	useEffect(() => {
		async function fetchPinnedPanels() {
			const { data: pinnedIds, error: idError } = await supabase.from('pinned').select(`"ID"`)
			if (!pinnedIds) {
				console.error(idError)
				return
			}
			const { data: pinnedPanels, error: panelsError } = await supabase
				.from('panels')
				.select('*')
				.in(`"ID"`, pinnedIds.map(p => p.ID))
			if (!pinnedPanels) {
				console.error(panelsError)
				return
			}
			setPinnedPanels(pinnedPanels)
		}
		fetchPinnedPanels().catch(console.error)
	}, [])
	useEffect(() => {
		console.log(pinnedPanels)
	}, [pinnedPanels])
	if (pinnedPanels === undefined) return (
		<Loading message="Loading Pinned Panels" />
	)
	return (
		<Center gap={4} padding={4} flexDir='column' w='100%' flex={1} minH={0}>
			<InputGroup startElement={<FaSearch />}>
				<Input placeholder='Search Panels' />
			</InputGroup>
			<Flex gap={4} flex={1} flexDir='column' overflowY='scroll' w='100%' alignItems='center'>
				{pinnedPanels.map(p => (
					<PanelCard key={p.ID} panel={p} />
				))}
			</Flex>
		</Center>
	)
}
