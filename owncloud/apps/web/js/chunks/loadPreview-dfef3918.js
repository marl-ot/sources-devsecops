define(["exports","./client-aa4fd000","./visibility-c7f197c2","./vendor-22992e2c"],(function(e,i,s,n){"use strict";const r=e=>n.lib.stringify({scalingup:e.scalingup||0,preview:Object.hasOwnProperty.call(e,"preview")?e.preview:1,a:Object.hasOwnProperty.call(e,"a")?e.a:1,...e.etag&&{c:e.etag.replaceAll('"',"")},...e.dimensions&&e.dimensions[0]&&{x:e.dimensions[0]},...e.dimensions&&e.dimensions[1]&&{y:e.dimensions[1]}}),t=async(e,s=!1)=>{if(s)return o(e);const n=[e.server,"remote.php/dav",i.encodePath(e.resource.webDavPath),"?",r({etag:e.resource.etag,dimensions:e.dimensions})].join("");try{const{data:s}=await i.clientService.httpAuthenticated(e.token).get(n,{responseType:"blob"});return window.URL.createObjectURL(s)}catch(e){}},o=async e=>{const i=s.cacheService.filePreview.get(e.resource.id);if(i&&i.etag===e.resource.etag&&n.isEqual(e.dimensions,i.dimensions))return i.src;try{const i=await t(e);return s.cacheService.filePreview.set(e.resource.id,{src:i,etag:e.resource.etag,dimensions:e.dimensions},0).src}catch(e){}},c=async e=>{const[s,n]=e.resource.downloadURL.split("?"),t=[s,[r({etag:e.resource.etag,dimensions:e.dimensions}),n].filter(Boolean).join("&")].filter(Boolean).join("?"),{status:o}=await i.clientService.httpUnAuthenticated.head(t);if(404!==o)return t};e.loadPreview=async({resource:e,isPublic:i,dimensions:s,server:n,userId:r,token:o},a=!1)=>{let d="";return"folder"!==e.type&&e.extension&&(i||n&&r&&o)?(d=i?await c({resource:e,dimensions:s}):await t({server:n,userId:r,token:o,resource:e,dimensions:s},a),d):d},e.privatePreviewBlob=t,e.publicPreviewUrl=c}));