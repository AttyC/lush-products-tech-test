export const ProductPreview = ({ vm }) => {
  return (
    <li key={vm.id}>
      <a href={vm.slug}>{vm.name}</a>
    </li>
  );
};
