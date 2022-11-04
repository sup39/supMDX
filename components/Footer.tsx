import config from '#config';

export default function Footer() {
  const {startYear: year0, siteAuthor} = config;
  const year = new Date().getFullYear();

  return <footer>{siteAuthor &&
    <div>Copyright © {year>year0 ? `${year0}-${year}` : year} {siteAuthor} All rights reserved.</div>
  }</footer>;
}
