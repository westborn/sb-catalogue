import type { LayoutLoad } from './$types'
import entries2022 from '@lib/Assets/SB-Exhibits-2022.json'
import entries2023 from '@lib/Assets/SB-Exhibits-2023.json'
import entries2024 from '@lib/Assets/SB-Exhibits-2024.json'
import type { Exhibit } from '@lib/Components'

export const load = (async ({ url }) => {
	// just load and return the data for the year we were asked for
	const paramYear = url.searchParams.get('year')
	const year = paramYear ? paramYear : new Date().getFullYear().toString()
	const exhibits = [...entries2022, ...entries2023, ...entries2024].filter((exhibit) => {
		return exhibit.exhibitionYear === year ? true : false
	}) as Exhibit[]

	return { year, exhibits }
}) satisfies LayoutLoad
