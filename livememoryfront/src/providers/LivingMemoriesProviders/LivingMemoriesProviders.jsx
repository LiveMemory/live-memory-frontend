
import { FilterMemoriesProvider } from '../../context/FilterMemoriesContext/FilterMemoriesContext'
import { LivingMemoriesProvider } from '../../context/LivingMemoriesContext/LivingMemoriesContext'

export default function LivingMemoriesProviders({ children }) {
  return (
    <FilterMemoriesProvider>
      <LivingMemoriesProvider>
        {children}
      </LivingMemoriesProvider>
    </FilterMemoriesProvider>

  )
}
