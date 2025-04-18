import { createContext, useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { Tables } from '../../utils/database.types';
import supabase from '../../utils/supabase';
import Loading from '@/components/loading';

const PinnedPanelContext = createContext<Tables<'pinned'>[]>([])

export const usePinnedPanels = () => useContext(PinnedPanelContext)

export default function Form() {
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
	if (pinnedPanels === undefined) return (
		<Loading message="Loading Pinned Panels" />
	)
	return (
		<PinnedPanelContext.Provider value={pinnedPanels}>
			<Outlet />
		</PinnedPanelContext.Provider>
	)
}
