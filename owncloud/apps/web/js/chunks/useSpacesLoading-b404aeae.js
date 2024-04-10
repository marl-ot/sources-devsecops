define(["exports","./vendor-22992e2c","./visibility-c7f197c2","./base-fbc1ccef","./functions-f74c7f04"],(function(e,r,t,a,s){"use strict";const u=()=>r.getCurrentInstance().proxy.$router,i=(e,a,u)=>{const i=u?.configurationManager||t.configurationManager;return{params:{driveAliasAndItem:e.getDriveAliasAndItem({path:a.path||""})},query:{...s.isShareSpaceResource(e)&&{shareId:e.shareId},...i?.options?.routing?.idBased&&!r.isUndefined(a.fileId)&&{fileId:`${a.fileId}`}}}},n=(e,r)=>Object.assign({},e,{params:{...e.params,...r.params},query:{...e.query,...r.query}}),o=(e={})=>{const r=e.router||u(),a=e.configurationManager||t.configurationManager;return{replaceInvalidFileRoute:({space:e,resource:t,path:s,fileId:u})=>{if(!a?.options?.routing?.idBased)return!1;if(s===t.path&&u===t.fileId)return!1;const o=n(r.currentRoute,i(e,t,{configurationManager:a}));return r.replace(o),!0}}},c="contextRouteName",p="contextRouteParams",l="contextRouteQuery",f=e=>Array.isArray(e)?e[0]:e;const d=(e,t,a)=>r.computed((()=>{const s=r.get(e,`getters.capabilities.${t}`,a);if(void 0===s)throw new Error("useCapability: capability is not defined and no default was provided");return s})),y=(e,r)=>a=>d(a||t.useStore(),e,r),m=y("core.support-url-signing",!1),g=y("files_sharing.resharing",!0),h=y("spaces.enabled",!1),R=y("spaces.projects",!1),b=y("spaces.share_jail",!1),C=y("files.tus_support.http_method_override",!1),I=y("files.tus_support.max_chunk_size",0),S=y("files.tus_support.extension",""),x=y("files_sharing.deny_access",!1),F=y("files_sharing.allow_custom",!0),_=y("files_sharing.public.can_edit",!1),v=y("files_sharing.public.alias",!1);e.contextQueryToFileContextProps=e=>({routeName:f(e.contextRouteName),routeParams:e.contextRouteParams,routeQuery:e.contextRouteQuery}),e.contextRouteNameKey=c,e.createFileRouteOptions=i,e.mergeFileRouteOptions=n,e.queryItemAsString=f,e.routeToContextQuery=e=>{const{params:r,query:t}=e,a={},s=["fileId","shareId"].concat(e.meta?.contextQueryItems||[]);for(const e of s)a[e]=t[e];return{[c]:e.name,[p]:r,[l]:a}},e.useAppNavigation=function({router:e,currentFileContext:t}){const{replaceInvalidFileRoute:a}=o({router:e});return{replaceInvalidFileRoute:(e,t)=>{const s=r.unref(e);return a({space:r.unref(s.space),resource:t,path:r.unref(s.item),fileId:r.unref(s.itemId)})},closeApp:()=>(t=>{const{fileName:a,routeName:s,routeParams:u,routeQuery:i}=r.unref(t);return r.unref(s)?e.push({name:r.unref(s),params:r.unref(u),query:{...r.unref(i),scrollTo:r.unref(a)}}):e.push({path:"/"})})(t)}},e.useCapability=d,e.useCapabilityCoreSupportUrlSigning=m,e.useCapabilityFilesSharingAllowCustomPermissions=F,e.useCapabilityFilesSharingCanDenyAccess=x,e.useCapabilityFilesSharingPublicAlias=v,e.useCapabilityFilesSharingPublicCanEdit=_,e.useCapabilityFilesSharingResharing=g,e.useCapabilityFilesTusExtension=S,e.useCapabilityFilesTusSupportHttpMethodOverride=C,e.useCapabilityFilesTusSupportMaxChunkSize=I,e.useCapabilityProjectSpacesEnabled=R,e.useCapabilityShareJailEnabled=b,e.useCapabilitySpacesEnabled=h,e.useFileRouteReplace=o,e.useRoute=()=>{const e=u(),t=r.ref();return t.value=e.currentRoute,e.afterEach((e=>t.value={...e})),r.readonly(t)},e.useRouteParam=(e,t)=>{const a=u();return r.customRef(((r,s)=>(a.afterEach(((r,t)=>r.params[e]!==t.params[e]&&s())),{get:()=>(r(),a.currentRoute.params[e]||t),async set(r){a.currentRoute.params[e]!==r&&(await a.replace({params:{...a.currentRoute.params,[e]:r}}),s())}})))},e.useRouteQuery=(e,t)=>{const a=u();return r.customRef(((r,s)=>(a.afterEach(((r,t)=>r.query[e]!==t.query[e]&&s())),{get:()=>(r(),a.currentRoute.query[e]||t),async set(r){a.currentRoute.query[e]!==r&&(await a.replace({query:{...a.currentRoute.query,[e]:r}}),s())}})))},e.useRouter=u,e.useSpacesLoading=e=>{const a=e?.store||t.useStore();return{areSpacesLoading:r.computed((()=>!a.getters["runtime/spaces/spacesInitialized"]||a.getters["runtime/spaces/spacesLoading"]))}}}));
