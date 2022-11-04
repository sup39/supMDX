import config from '#config';

export default function MetaInfo({data}: {data: {[_: string]: any}}) {
  const {metaFields: fields = []} = config;
  return <div>{fields.map(({label, prop}) => {
    const val = data[prop];
    return val == null ? null : <div key={prop}>
      <span>{label}</span>
      <span>{val}</span>
    </div>;
  })}</div>;
}
