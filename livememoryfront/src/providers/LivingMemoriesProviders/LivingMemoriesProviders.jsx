
import { LivingMemoriesProvider } from '../../context/LivingMemoriesContext/LivingMemoriesContext'

export default function LivingMemoriesProviders({children}) {
  return (
    <LivingMemoriesProvider>
        {children}
    </LivingMemoriesProvider>

  )
}
