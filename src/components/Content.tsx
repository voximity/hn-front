const Content = ({ content }: { content: string }) => {
  return (
    <div
      class="flex flex-col gap-2 mt-1 break-words [&_a]:text-blue-500 [&_pre]:whitespace-pre-wrap [&_pre]:bg-slate-800/30 [&_pre]:rounded [&_pre]:border [&_pre]:border-slate-700/40 [&_pre]:p-1 [&_pre]:w-full"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Content;
