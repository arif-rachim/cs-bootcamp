import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownView({ children }: { children: string }) {
  return (
    <div className="markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
