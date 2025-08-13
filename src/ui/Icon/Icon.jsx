export const Icon = ({
  name,
  width = 24,
  height = 24,
  color = "currentColor",
  className,
}) => {
  return (
    <svg width={width} height={height} className={className} fill={color}>
      <use href={`/icons/icons.svg#${name}`} />
    </svg>
  );
};
