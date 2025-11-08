---
title: Draft Example
published: 1000-07-01
image: "https://api.lxtu.cn/api.php?category=ecy"
tags: [Markdown, Blogging, Demo]
category: Default
draft: false
series: Examples
---

# This Article is a Draft

This article is currently in a draft state and is not published. Therefore, it will not be visible to the general audience. The content is still a work in progress and may require further editing and review.

When the article is ready for publication, you can update the "draft" field to "false" in the Frontmatter:

```markdown
---
title: My Awesome Post
published: 2023-10-01
draft: false
---
```

## What is a Draft?

A draft is a post that is still being worked on and is not ready for public viewing. In Fuwari, posts with `draft: true` in their frontmatter will not be included in the build output and won't appear on your website.

## Benefits of Using Drafts

1. **Work in Progress**: Perfect for posts that aren't complete yet
2. **Preview Locally**: You can still see draft posts during development
3. **Safe Publishing**: No risk of accidentally publishing incomplete content
4. **Collaboration**: Team members can see drafts without making them public

## Managing Drafts

### To create a new draft:

```bash
pnpm new-post -- my-draft-post
```

Then set `draft: true` in the frontmatter.

### To publish a draft:

Simply change `draft: true` to `draft: false` in the frontmatter.

### Development vs Production

- **Development**: Drafts are visible in local development (`pnpm dev`)
- **Production**: Drafts are excluded from the production build (`pnpm build`)

## Draft Workflow

1. **Create** a new post with the script
2. **Write** your content
3. **Set** `draft: true` to save it as a draft
4. **Review** and edit the content
5. **Set** `draft: false` when ready to publish
6. **Commit** and deploy your changes

This workflow ensures that only polished, ready content reaches your audience while allowing you to work on future posts at your own pace.