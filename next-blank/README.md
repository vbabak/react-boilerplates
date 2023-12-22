# next-blank

NextJS ReactJS template for the blank app. 

## Install Dependencies

```bash
npm install next@latest react@latest react-dom@latest
npm install --save-dev sass typescript @types/node @types/react @types/react-dom eslint eslint-config-next
```

## Commands

```bash
npm run dev
npm run lint
npm run build
```

## App Router
Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files.
App router: each folder represents router segment which is mapped to URL segment.

Only the root layout can contain <html> and <body> tags.

Layout persists across routes and maintain state.
Template similar to layout - wrap each child layout or page. 
But creates a new instance on each navigation (DOM is recreated). 
Use case: Logging page views. Features that rely on useEffect() and useState().

