export const Icon = ({
  name,
  width = 24,
  height = 24,
  color = "currentColor",
  className,
}) => {
  return (
    <svg width={width} height={height} fill={color} className={className}>
      <use href={`/icons/icons.svg#${name}`} />
    </svg>
  );
};
