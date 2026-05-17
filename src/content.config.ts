import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. 原有的博客文章集合
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
  }),
});

// 2. 🚀 新增：专门存放独立静态页面（如关于我、简历、友链）的集合
const pagesCollection = defineCollection({
  // 扫描新的 src/content/pages 文件夹
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'pages': pagesCollection, // 注册进去
};