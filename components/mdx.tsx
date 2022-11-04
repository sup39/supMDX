/** <S $="span" _=".a.b.c" className="extra class-name">...</S> */
export function S<E extends React.ElementType='span'>({
  $: TagName = 'span',
  _: modifier = '',
  className, children, ...props
}: {
  $?: string,
  _?: string,
} & React.ComponentProps<E>) {
  const cls = [className, ...(modifier.match(/\.(\w+)/g) ?? [])].map(s => s.slice(1)).join(' ');
  return <TagName className={cls} {...props}>{children}</TagName>;
}
