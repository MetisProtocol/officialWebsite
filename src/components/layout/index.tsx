import React from 'react';

import './index.scss';

export * from './header';
export * from './content';
export * from './footer';

export const Layout = (props: any) => {
  return <main className="metis_fe--layout">
    {props.children}
  </main>
}
