interface CommentTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function CommentText({ children, className = '' }: CommentTextProps) {
  return (
    <div className={`text-comment text-sm ${className}`}>
      <span className="select-none">{'// '}</span>
      {children}
    </div>
  );
}
