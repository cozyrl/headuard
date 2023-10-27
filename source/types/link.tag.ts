
export type LinkTagRel = "alternate" 
| "author"
| "canonical"
| "dns-prefetch"
| "help"
| "icon"
| "manifest"
| "modulepreload"
| "next"
| "preconnect"
| "prefetch"
| "preload"
| "prerender"
| "prev"
| "search"
| "stylesheet"
| "apple-touch-icon"
| "mask-icon"
| "shortcut icon"
| "tag";


export type LinkTagImagesSizes = "auto"
| `${number}px`
| `${number}em`
| `${number}%`
| `${number}vw`
| `${number}vh`
| `${number}vmin`
| `${number}vmax`
| `calc(${string})`;


export type LinkTagReferrerPolicy = "no-referrer" 
| "no-referrer-when-downgrade" 
| "origin" 
| "origin-when-cross-origin" 
| "unsafe-url";


export type LinkTagType = "text/css"
| "text/sass"
| "text/scss"
| "text/javascript"
| "image/png"
| "image/jpeg"
| "image/gif"
| "font/woff"
| "font/woff2"
| "application/json"
| "application/xml"; 


export type LinkTagAs = "audio" 
| "document"
| "embed"
| "fetch"
| "font"
| "image"
| "object"
| "style"
| "track"
| "video"
| "worker";


export type LinkTagCrossOrigin = "anonymous" 
| "use-credentials";


export type LinkTagSizes = `${number}x${number}`
| `${number}X${number}`;