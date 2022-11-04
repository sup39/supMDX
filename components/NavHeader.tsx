import Link from 'next/link';

export default function NavHeader({onToggleFold}: {onToggleFold?: ()=>void}) {
  return <header>
    <Link href="/" id="icon-link">
      <div style={{fontSize: '1.5em'}}>supMDX</div>
    </Link>
    <div className="menu-toggle" onClick={onToggleFold} />
  </header>;
}
