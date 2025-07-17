import { defineCollection, z } from 'astro:content';

const randoms = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    fullImage: z.string().optional(),
    details: z.string().optional(),
    pubDate: z.string(),
    gallery: z.array(z.string()).optional(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
  }),
});

export const collections = {
  randoms,
  blog,
};
