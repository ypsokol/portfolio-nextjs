const Loading = ({ variant = "" }: { variant?: string }) => (
  <div className={`loading__circle ${variant}`} />
);

export default Loading;
