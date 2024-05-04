import { Route, Routes } from 'react-router-dom'
import { Home, Success, Cart } from '../pages'
import { AppRoutes } from './routes'
import { DefaultLayout } from '../components/shared/default-layout'

export function Router() {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<DefaultLayout />}>
        <Route path={AppRoutes.HOME} element={<Home />} />
        <Route path={AppRoutes.CART} element={<Cart />} />
        <Route path={AppRoutes.SUCCESS} element={<Success />} />
      </Route>
    </Routes>
  )
}
