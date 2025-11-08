---
title: Simple Guides for Fuwari
published: 1002-04-01
description: "How to use this blog template."
image: "./index.jpeg"
tags: ["Fuwari", "Blogging", "Customization"]
category: Default
draft: false
series: Examples
---

> Cover image source: [Source](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

This blog template is built with [Astro](https://astro.build/). For the things that are not mentioned in this guide, you may find the answers in the [Astro Docs](https://docs.astro.build/).

## Front-matter of Posts

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

| Attribute     | Description                                                                                                                                                                                                 |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | The title of the post.                                                                                                                                                                                     |
| `published`   | The date the post was published.                                                                                                                                                                           |
| `description` | A short description of the post. Displayed on index page.                                                                                                                                                 |
| `image`       | The cover image path of the post.<br/>1. Start with `http://` or `https://`: Use web image<br/>2. Start with `/`: For image in `public` dir<br/>3. With none of the prefixes: Relative to the markdown file |
| `tags`        | The tags of the post.                                                                                                                                                                                      |
| `category`    | The category of the post.                                                                                                                                                                                  |
| `draft`       | If this post is still a draft, which won't be displayed.                                                                                                                                                  |

## Where to Place the Post Files

Your post files should be placed in `src/content/posts/` directory. You can also create sub-directories to better organize your posts and assets.

```
src/content/posts/
├── my-first-post.md
├── tutorial/
│   ├── getting-started.md
│   └── advanced-topics.md
└── assets/
    └── images/
        └── example.jpg
```

## How to Create a New Post

You can use the provided script to create a new post with front-matter template:

```bash
pnpm new-post -- my-post-title
```

This will create a new file at `src/content/posts/my-post-title.md` with the basic front-matter structure.

## Content Structure

### Images

Images in your posts can be referenced in several ways:

1. **External images**: Use full URLs
   ```markdown
   ![Alt text](https://example.com/image.jpg)
   ```

2. **Public images**: Place images in `public/` directory
   ```markdown
   ![Alt text](/images/my-image.jpg)
   ```

3. **Relative images**: Place images near your markdown files
   ```markdown
   ![Alt text](./images/my-image.jpg)
   ```

### Series

Posts can be organized into series by adding the `series` field in front-matter:

```yaml
---
title: Part 1 - Getting Started
series: "My Tutorial Series"
---
```

Posts in the same series will be automatically linked together.

### Tags and Categories

Use tags and categories to organize your content:

```yaml
---
tags: [JavaScript, Astro, Tutorial]
category: "Web Development"
---
```

## Customization

### Site Configuration

Edit `src/config.ts` to customize:

- Site title and subtitle
- Theme colors
- Banner settings
- Navigation links
- Profile information
- And more...

### Styling

The template uses Tailwind CSS. You can customize:

- Colors in `src/styles/variables.styl`
- Tailwind configuration in `tailwind.config.cjs`
- Component styles in their respective files

### Adding Components

Add new Astro or Svelte components in `src/components/`. Import and use them in your layouts or pages.

## Deployment

The template is pre-configured for easy deployment on various platforms:

- **Netlify**: Connect your repository and deploy
- **Vercel**: Import your repository and deploy
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Other static hosting**: Build with `pnpm build` and upload the `dist/` folder

## Advanced Features

### Search

The template includes Pagefind for client-side search. The search index is automatically built during the build process.

### Comments

Giscus is integrated for comments. Configure it by setting your GitHub repository in the Giscus component.

### Analytics

Multiple analytics options are available (Google Analytics, Umami, etc.). Configure them in the Layout component.

### SEO

Meta tags and structured data are automatically generated. Customize them in the front-matter and site configuration.

## Support

For more advanced customization and features, refer to:

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Template Repository](https://github.com/yCENzh/fuwari)