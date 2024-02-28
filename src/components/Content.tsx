const Content = ({ content }: { content: string }) => {
  return (
    <div
      class="flex flex-col gap-2 mt-1 [&_a]:text-blue-500 [&_pre]:whitespace-pre-wrap"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Content;
