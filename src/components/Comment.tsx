import { useState } from 'preact/hooks';
import type { ItemModel } from '../models';
import Dot from './Dot';
import Content from './Content';

const Comment = ({ user, content, comments, time_ago, deleted }: ItemModel) => {
  const [collapsed, setCollapsed] = useState(deleted);

  return (
    <div class="flex">
      <div
        class="group pr-4 grow-0 shrink-0 basis-1 cursor-pointer"
        onClick={() => setCollapsed((c) => !c)}
      >
        <div class="bg-slate-700 h-full w-0.5 transition group-hover:bg-slate-500" />
      </div>
      <div>
        <p class="text-sm text-slate-500 flex gap-2 items-center">
          <span class="font-mono">{deleted ? '[deleted]' : user}</span>
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
                  <Comment {...comment} />
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
