import Link from 'next/link';
import config from '#config';

export default function NavHeader({onToggleFold}: {onToggleFold?: ()=>void}) {
  const {site: {name: siteName = 'supMDX'} = {}} = config;
  return <header>
    <Link href="/" id="icon-link">
      <div style={{fontSize: '1.5em'}}>{siteName}</div>
    </Link>
    <div className="menu-toggle" onClick={onToggleFold} />
  </header>;
}
