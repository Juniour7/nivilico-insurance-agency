import React from 'react';
import { Outlet, useLocation  } from 'react-router-dom';

//components
import NavMenu from '../../Components/NavMenu/NavMenu';

const PageLayout = () => {
  return (
    <>
        <div>
            <NavMenu />
            <main>
                <Outlet />
            </main>
        </div>
    </>
  )
}

export default PageLayout;