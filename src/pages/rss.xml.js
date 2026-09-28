import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Alan Yañez - Astro Learner  | Blog Pro ',
    description: 'My journey learning Astro...',
    site: "https://astroblog-practice.netlify.app/",
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}

// This shi works for the online RSS Readers so they can subscribe to my page and be notified when a new post is published or something. Weird.