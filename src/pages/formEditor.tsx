import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Tables } from "../../utils/database.types";
import supabase from "../../utils/supabase";
import Loading from "@/components/loading";
import { FaSave } from "react-icons/fa";
import EditableFormCard from "@/components/editableFormCard";

export default function FormEditor() {
	const { panelID } = useParams()
	const [parentPanel, setParentPanel] = useState<Tables<'panels'>>()
	const [childPanels, setChildPanels] = useState<Tables<'panels'>[]>()
	const [isSaving, setIsSaving] = useState(false)


	useEffect(() => {
		if (isSaving) setIsSaving(false)
	}, [isSaving])

	useEffect(() => {
		async function fetchParentPanel() {
			const { data } = await supabase
				.from('panels')
				.select('*')
				.eq('ID', parseInt(panelID!))
				.single()
			setParentPanel(data!)
		}
		fetchParentPanel()
	}, [])
	if (!parentPanel) return (
		<Loading message="Loading Pannel" />
	)
	return (
		<Flex padding={3} gap={3} flexDir='column' minH={0}>
			<Button
				position='sticky'
				zIndex={10}
				onClick={() => setIsSaving(true)}
			> <FaSave /> Save </Button>
			<Flex
				flex={1}
				overflowY='scroll'
				padding={2}
				gap={2}
				flexDir='column'
			>
				<Flex flexDir='row' gap={2} justifyContent='center' >
					<EditableFormCard
						panel={parentPanel}
						isSaving={isSaving}
					/>
				</Flex>
			</Flex>
		</Flex>
	)
}
