import Header from '../Header'
import { Suspense } from 'react'
import  Loader  from '../Loader';
import Main from '../Main';
import { Outlet } from 'react-router-dom';





function Layout () {
  return (
    <>
    
      <Suspense fallback={<Loader />}>
				<Header />
			</Suspense>
      
		
      
      <Main>
        <Outlet />
      </Main>
      
      
    </>
  )
}

export default Layout

