import config from '#config';

export default function Footer() {
  const year = new Date().getFullYear();
  const {site: {startYear: year0 = year, author} = {}} = config;

  return <footer>{author &&
    <div>Copyright © {year>year0 ? `${year0}-${year}` : year} {author} All rights reserved.</div>
  }</footer>;
}
