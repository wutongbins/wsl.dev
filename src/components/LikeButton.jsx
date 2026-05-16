// 精确位置：my-modern-blog/src/components/LikeButton.jsx
import React, { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm max-w-sm mt-6">
      <p className="text-slate-500 text-sm mb-3">
        这是一个纯正的 React 组件，具备完整的运行时交互状态：
      </p>
      <button 
        onClick={() => setLikes(likes + 1)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-medium text-sm rounded-lg transition-all shadow-md shadow-indigo-100"
      >
        ❤️ 喜欢这篇文章 <span className="bg-indigo-500 px-2 py-0.5 rounded text-xs">{likes}</span>
      </button>
    </div>
  );
}