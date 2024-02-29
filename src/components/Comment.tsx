import { useRef, useState } from 'preact/hooks';
import type { ItemModel } from '../models';
import Content from './Content';
import Dot from './Dot';
import useLongPress from '../hooks/useLongPress';

export type CommentProps = ItemModel & { op?: string };

const Comment = ({
  user,
  content,
  comments,
  time_ago,
  deleted,
  op,
}: CommentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState(deleted);

  const toggle = () => {
    if (!collapsed && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < 0) ref.current?.scrollIntoView();
    }
    setCollapsed(!collapsed);
  };

  const longPress = useLongPress(collapsed ? 0 : 300, toggle);

  return (
    <div ref={ref} class="flex">
      <div
        class="group pr-4 grow-0 shrink-0 basis-1 cursor-pointer"
        onClick={toggle}
      >
        <div class="bg-slate-700 h-full w-0.5 transition group-hover:bg-slate-500" />
      </div>
      <div {...longPress} class="grow shrink basis-auto overflow-auto">
        <p class="text-sm text-slate-500 flex gap-2 items-center">
          <span class="font-mono">{deleted ? '[deleted]' : user}</span>
          {user && !deleted && user === op && (
            <span class="border rounded px-1 border-orange-500 text-orange-200 bg-orange-700/20">
              op
            </span>
          )}
          <Dot />
          <span>{time_ago}</span>
          {collapsed && (
            <>
              <Dot />
              <span>collapsed</span>
            </>
          )}
        </p>
        {!collapsed && (
          <>
            <Content content={content} />
            {comments.length !== 0 && (
              <div class="flex flex-col gap-2 mt-2">
                {comments.map((comment) => (
                  <Comment {...comment} op={op} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;
