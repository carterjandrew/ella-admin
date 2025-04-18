import { Box, Button, Flex, Input, Drawer, Portal, Textarea, CloseButton, Text } from '@chakra-ui/react'
import { Tables } from '../../utils/database.types'
import { FaBookmark, FaEyeSlash, FaPlus, FaQuestion, FaUndo } from 'react-icons/fa'
import { useEffect, useMemo, useState } from 'react'
import supabase from '../../utils/supabase'
import Loading from './loading'
import { usePinnedPanels } from '@/layouts/form'
import { FaTrashCan } from 'react-icons/fa6'

export type PanelWithChildren = {
	panel: Tables<'panels'>,
	children: Tables<'panels'>[]
}

type EditableFormCardProps = {
	panel: Tables<'panels'>,
	isSaving: boolean,
	parentPanel: undefined | number
}

const EditableFormCard: React.FC<EditableFormCardProps> = ({ panel, isSaving, parentPanel }) => {
	const [editPanel, setEditPanel] = useState(panel)
	const [childPanels, setChildPanels] = useState<Tables<'panels'>[]>()
	const [drawerOpen, setDrawerOpen] = useState(false)
	const [isDeleted, setIsDeleted] = useState(false)
	const [innerParentPanel, setInnerParentPanel] = useState<number>()
	const pinnedPanels = usePinnedPanels()
	const isPinned = useMemo(() => {
		return pinnedPanels.find(p => p.ID === panel.ID)
	}, [pinnedPanels])
	useEffect(() => {
	}, [parentPanel])
	async function savePanel() {
		const session = await supabase.auth.getSession()
		if(!session) return
		console.log(session)
		const { error, data, status } = await supabase
			.from('panels')
			.update(editPanel)
			.eq(`"ID"`, editPanel.ID)
		console.log(status)
		if (error) console.error(error)
	}
	async function createSection() {
		const { ID, ...omitedEP } = editPanel
		const { data, error } = await supabase
			.from('panels')
			.insert(omitedEP)
			.select()
			.single()
		if (error) throw new Error(error.message)
		setEditPanel(data)
		setInnerParentPanel(data.ParentId)
	}
	async function createPanel() {
		const { ID, ...omitedEP } = editPanel
		const { data, error } = await supabase
			.from('panels')
			.insert({
				...omitedEP,
				ParentId: parentPanel
			})
			.select()
			.single()
		if (error) throw new Error(error.message)
		setEditPanel(data)
		setInnerParentPanel(data.ParentId)
	}
	async function deletePanel() {
		const { error } = await supabase
			.from('panels')
			.delete()
			.eq(`"ID"`, editPanel.ID)
		if (error) throw new Error(error.message)
	}
	useEffect(() => {
		if (editPanel.ID === 'new' && parentPanel) {
			createPanel().catch(console.error)
			return
		}
		if (!isSaving) return
		if (isDeleted) deletePanel().catch(console.error)
		else if (editPanel.ID == 'newParent') createSection().catch(console.error)
		else savePanel().catch(console.error)
	}, [isSaving, parentPanel])
	useEffect(() => {
		async function fetchChildForms() {
			const { data, error } = await supabase
				.from('panels')
				.select('*')
				.eq('ParentId', panel.ID)
			if (error) console.error(error)
			if (!data) {
				console.error("No panels found")
				setChildPanels([])
				return
			}
			setChildPanels(data.filter(p => p.ID !== editPanel.ID))
		}
		fetchChildForms().catch(console.error)
	}, [])
	const renderDrawer: () => React.ReactNode = () => {
		return (
			<Drawer.Root
				open={drawerOpen}
				onOpenChange={(e) => setDrawerOpen(e.open)}
			>
				<Drawer.Trigger asChild>
					<Button variant='subtle'>
						<FaQuestion />
					</Button>
				</Drawer.Trigger>
				<Portal>
					<Drawer.Backdrop />
					<Drawer.Positioner>
						<Drawer.Content>
							<Drawer.Header>
								Edit {panel.COMPONENT}s description
							</Drawer.Header>
							<Drawer.Body>
								<Textarea
									h='full'
									value={editPanel.description}
									onChange={(e) => {
										setEditPanel({
											...editPanel,
											description: e.target.value
										})
									}}
								/>
							</Drawer.Body>
							<Drawer.CloseTrigger asChild>
								<CloseButton size='sm' />
							</Drawer.CloseTrigger>
						</Drawer.Content>
					</Drawer.Positioner>
				</Portal>
			</Drawer.Root>
		)
	}
	const renderPinnedButton: () => React.ReactNode = () => {
		if (isPinned) return (
			<Button variant='subtle'><FaBookmark /> Pinned</Button>
		)
		else return (
			<Button variant='subtle'><FaBookmark /> Not Pinned</Button>
		)
	}
	if (childPanels === undefined) return (
		<Loading message="Loading children" />
	)
	if (isDeleted) return (
		<Flex flexDir='row' gap={3} borderLeft='solid' alignItems='center'>
			<Box w='20px' h='3px' backgroundColor='bg.inverted' />
			<Flex
				flexDir='row'
				gap={3}
				alignItems='center'
				flex={1}
				padding={2}
				bg='tomato'
				color='white'
			>
				<Text fontWeight={900}> {editPanel.COMPONENT} deleted </Text>
				<Button
					colorPalette='red'
					variant='subtle'
					onClick={() => setIsDeleted(false)}
				> Undo <FaUndo /> </Button>
			</Flex>
		</Flex>
	)
	if (childPanels.length === 0 && panel.ID !== 'newParent') return (
		<Flex flexDir='column' gap={3} w='100%' opacity={editPanel.hidden ? .5 : 1}>
			<Flex flexDir='row' gap={3} borderLeft='solid' alignItems='center'>
				<Box w='20px' h='3px' backgroundColor='bg.inverted' />
				<Flex flexDir='row' gap={3} alignItems='center' flex={1} padding={2}>
					<Input
						flex={1}
						value={editPanel.COMPONENT}
						onChange={(e) => {
							setEditPanel({
								...editPanel,
								COMPONENT: e.target.value
							})
						}}
						variant='flushed'
					/>
					<Input
						flex={1}
						value={editPanel.EXAMPLE_UNITS}
						onChange={(e) => {
							setEditPanel({
								...editPanel,
								EXAMPLE_UNITS: e.target.value
							})
						}}
						variant='flushed'
					/>
					{renderPinnedButton()}
					{renderDrawer()}
					<Button variant='subtle' colorPalette='red'
						onClick={() => {
							setEditPanel({
								...editPanel,
								hidden: !editPanel.hidden
							})
						}}
					><FaEyeSlash /></Button>
					<Button variant='subtle' colorPalette='red'
						onClick={() => setIsDeleted(true)}
					>
						<FaTrashCan /> </Button>
				</Flex>
			</Flex>
		</Flex>
	)
	return (
		<Flex flexDir='column' w='100%' opacity={panel.hidden ? .5 : 1}>
			<Flex flexDir='row' gap={3} borderLeft='solid' alignItems='center' >
				{panel.ID !== panel.ParentId && (
					<Box w='20px' h='3px' backgroundColor='bg.inverted' />
				)}
				<Flex flexDir='row' gap={3} alignItems='center' flex={1} padding={2} backgroundColor='bg.info' borderRadius={5} margin={1} colorPalette='blue'>
					<Input
						flex={1}
						value={editPanel.COMPONENT}
						onChange={(e) => {
							setEditPanel({
								...editPanel,
								COMPONENT: e.target.value
							})
						}}
						variant='flushed'
					/>
					{renderPinnedButton()}
					{renderDrawer()}
					<Button variant='subtle'
						onClick={() => {
							setChildPanels([
								...childPanels,
								{
									ID: 'new',
									ParentId: panel.ID
								}
							])
						}}
					><FaPlus /> Add Question</Button>
					<Button variant='subtle'
						onClick={() => {
							setChildPanels([
								...childPanels,
								{
									ID: 'newParent',
									ParentId: panel.ID
								}
							])
						}}
					><FaPlus /> Add Section</Button>
					{panel.ID !== panel.ParentId && (
						<>
							<Button variant='subtle' colorPalette='red'
								onClick={() => setEditPanel({
									...editPanel,
									hidden: !editPanel.hidden
								})}
							><FaEyeSlash /></Button>
							<Button variant='subtle' colorPalette='red'
								onClick={() => setIsDeleted(true)}
							>
								<FaTrashCan /> </Button>
						</>
					)}
				</Flex>
			</Flex>
			<Flex flexDir='column' marginLeft='50px'>
				{childPanels.map(p => (
					<EditableFormCard
						key={p.ID}
						panel={p}
						isSaving={isSaving}
						parentPanel={innerParentPanel}
					/>
				))}
			</Flex>
		</Flex>
	)
}

export default EditableFormCard
