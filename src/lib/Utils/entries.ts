import entries2022 from '@lib/Assets/SB-Exhibits-2022.json'
import entries2023 from '@lib/Assets/SB-Exhibits-2023.json'
import type { Exhibit } from '@lib/Components'

const entries = [...entries2022, ...entries2023] as Exhibit[]
export { entries }
