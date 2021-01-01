import React from 'react';
import ArrowForwad from '@material-ui/icons/ArrowForward';

export function Header (props: any){
  return <nav className="metis_fe--layout-header">
    <div className="metis_fe--header-logo">
      <img src="/images/logo.png" alt=""/>
      <h4>METIS</h4>
    </div>
    <ul className="metis_fe--header-item-group">
      {props.children}
    </ul>

    <a className="whitepaper-link" href="/files/metis_whitepaper.pdf">
      WHITEPAPER
      <ArrowForwad />
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
