import {useState} from 'react';
import Link from 'next/link';
import NavHeader from './NavHeader';
import type {HeadingInfo} from '@sup39/rehype-mdx-export-headings';
import config from '#config';

export type NavEntryInfo = {
  name: string
  link: string
  children?: NavEntryInfo[]|null
};

export function NavEntry<Body, >({
  entry: {name, link, children}, dir, here, children: childrenJSX,
}: {entry: NavEntryInfo, dir: string, here: string, children?: Body}) {
  const href = dir+link;
  const isHere = href.replace(/\/$/, '')===here; // remove trailing slash
  const isRHere = isHere || here.startsWith(href); // here or is children

  const [toggle, setToggle] = useState(isRHere);
  const entryCls = 'nav-entry'+(isHere ? ' nav-here' : '');
  return children?.length ? <div className={'nav-dir'+(toggle ? ' nav-fold-open' : '')}><>
    <div className={entryCls}>
      <Link href={href}>{name}</Link>
      <svg viewBox="0 0 8 8" onClick={()=>setToggle(e=>!e)}><polyline points="6 3 4 5 2 3"></polyline></svg>
    </div>
    {isHere ? childrenJSX : <></>}
    <div className='nav-dir-child'>{
      children.map(entry => <NavEntry key={entry.link} entry={entry} dir={href} here={here}>{childrenJSX}</NavEntry>)
    }</div>
  </></div> : <div className={entryCls}>
    <Link href={href}>{name}</Link>
  </div>;
}

export default function Nav({children, headings, pathname}: {
  children?: JSX.Element
  headings: HeadingInfo[]
  pathname: string
}) {
  const [navFold, setNavFold] = useState(false);

  const headingsJSX = <ul className=''>{headings.map(({label, id}) => <li key={id}>
    <a href={'#'+id}>{label}</a>
  </li>)}</ul>;

  return <nav className={navFold ? 'open' : ''}>
    <NavHeader onToggleFold={()=>setNavFold(e=>!e)} />
    {children}
    <div className='nav-root'>
      {config.nav.map(entry => <NavEntry key={entry.link} entry={entry} dir={'/'} here={pathname} />)}
      {headingsJSX}
    </div>
  </nav>;
}
