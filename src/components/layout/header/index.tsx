import React from 'react';

export function Header (props: any){
  return <nav className="metis_fe--layout-header">
    <div className="metis_fe--header-logo">
      <img src="/images/logo_text.svg" alt=""/>
    </div>
    <ul className="metis_fe--header-item-group">
      {props.children}
    </ul>

    <a className="whitepaper-link" href="/files/metis_whitepaper.pdf" target="__blank">
      WHITEPAPER
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5L11 5" stroke="#01BCB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.40002 1L11 5.05L7.40002 9.1" stroke="#01BCB1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  </nav>;
}


export const HeaderItem = (props: any) => {
  let children: React.ReactNode = React.Children.map(props.children, (child: any) => {
    return React.cloneElement(child, {
      className: 'nav-link ' + (child.props.className || ''),
    });
  })

  return <li className="metis_fe--header-item">
    {children}
  </li>;
}
