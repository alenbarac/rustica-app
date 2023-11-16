import Header from './Header'
import CartOverview from '../features/cart/CartOverview'
import { Outlet, useNavigation } from 'react-router-dom'
import Spinner from './Spinner'

function AppLayout() {
  const navigation = useNavigation()

  const isLoading = navigation.state === 'loading'

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  )
}

export default AppLayout
