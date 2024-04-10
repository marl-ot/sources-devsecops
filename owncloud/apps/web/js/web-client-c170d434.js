define(["exports","./chunks/vendor-22992e2c","./chunks/base-fbc1ccef","./chunks/functions-f74c7f04"],(function(e,t,r,s){"use strict";var n=Object.freeze({__proto__:null,buildWebDavPublicPath:s.buildWebDavPublicPath,buildWebDavSpacesPath:s.buildWebDavSpacesPath,buildWebDavSpacesTrashPath:s.buildWebDavSpacesTrashPath,extractDomSelector:s.extractDomSelector,extractStorageId:s.extractStorageId,extractNodeId:s.extractNodeId,extractNameWithoutExtension:s.extractNameWithoutExtension,extractExtensionFromFile:s.extractExtensionFromFile,buildResource:s.buildResource,buildPublicSpaceResource:s.buildPublicSpaceResource,buildShareSpaceResource:s.buildShareSpaceResource,buildSpace:s.buildSpace,SHARE_JAIL_ID:s.SHARE_JAIL_ID,isPersonalSpaceResource:s.isPersonalSpaceResource,isProjectSpaceResource:s.isProjectSpaceResource,isShareSpaceResource:s.isShareSpaceResource,isMountPointSpaceResource:s.isMountPointSpaceResource,isPublicSpaceResource:s.isPublicSpaceResource});const a="https://example.com",o=function(e,t,s){if(null==s)throw new r.RequiredError(t,`Required parameter ${t} was null or undefined when calling ${e}.`)},i=function(e,...t){const r=new URLSearchParams(e.search);for(const e of t)for(const t in e)if(Array.isArray(e[t])){r.delete(t);for(const s of e[t])r.append(t,s)}else r.set(t,e[t]);e.search=r.toString()},c=function(e,t,r){const s="string"!=typeof e;return(s&&r&&r.isJsonMime?r.isJsonMime(t.headers["Content-Type"]):s)?JSON.stringify(void 0!==e?e:{}):e||""},d=function(e){return e.pathname+e.search+e.hash},u=function(e,t,r,s){return(n=t,a=r)=>{const o={...e.options,url:(s?.basePath||a)+e.url};return n.request(o)}},p=function(e){const s=function(e){return{createDrive:async(t,r={})=>{o("createDrive","drive",t);const s=new URL("/drives",a);let n;e&&(n=e.baseOptions);const u={method:"POST",...n,...r},p={"Content-Type":"application/json"};i(s,{});let l=n&&n.headers?n.headers:{};return u.headers={...p,...l,...r.headers},u.data=c(t,u,e),{url:d(s),options:u}},deleteDrive:async(t,r,s={})=>{o("deleteDrive","driveId",t);const n="/drives/{drive-id}".replace("{drive-id}",encodeURIComponent(String(t))),c=new URL(n,a);let u;e&&(u=e.baseOptions);const p={method:"DELETE",...u,...s},l={};null!=r&&(l["If-Match"]=String(r)),i(c,{});let h=u&&u.headers?u.headers:{};return p.headers={...l,...h,...s.headers},{url:d(c),options:p}},getDrive:async(t,s,n,c={})=>{o("getDrive","driveId",t);const u="/drives/{drive-id}".replace("{drive-id}",encodeURIComponent(String(t))),p=new URL(u,a);let l;e&&(l=e.baseOptions);const h={method:"GET",...l,...c},m={};s&&(m.$select=Array.from(s).join(r.COLLECTION_FORMATS.csv)),n&&(m.$expand=Array.from(n).join(r.COLLECTION_FORMATS.csv)),i(p,m);let v=l&&l.headers?l.headers:{};return h.headers={...v,...c.headers},{url:d(p),options:h}},updateDrive:async(t,r,s={})=>{o("updateDrive","driveId",t),o("updateDrive","drive",r);const n="/drives/{drive-id}".replace("{drive-id}",encodeURIComponent(String(t))),u=new URL(n,a);let p;e&&(p=e.baseOptions);const l={method:"PATCH",...p,...s},h={"Content-Type":"application/json"};i(u,{});let m=p&&p.headers?p.headers:{};return l.headers={...h,...m,...s.headers},l.data=c(r,l,e),{url:d(u),options:l}}}}(e);return{async createDrive(n,a){const o=await s.createDrive(n,a);return u(o,t.axios,r.BASE_PATH,e)},async deleteDrive(n,a,o){const i=await s.deleteDrive(n,a,o);return u(i,t.axios,r.BASE_PATH,e)},async getDrive(n,a,o,i){const c=await s.getDrive(n,a,o,i);return u(c,t.axios,r.BASE_PATH,e)},async updateDrive(n,a,o){const i=await s.updateDrive(n,a,o);return u(i,t.axios,r.BASE_PATH,e)}}},l=function(e){const s=function(e){return{addMember:async(t,r,s={})=>{o("addMember","groupId",t),o("addMember","memberReference",r);const n="/groups/{group-id}/members/$ref".replace("{group-id}",encodeURIComponent(String(t))),u=new URL(n,a);let p;e&&(p=e.baseOptions);const l={method:"POST",...p,...s},h={"Content-Type":"application/json"};i(u,{});let m=p&&p.headers?p.headers:{};return l.headers={...h,...m,...s.headers},l.data=c(r,l,e),{url:d(u),options:l}},deleteGroup:async(t,r,s={})=>{o("deleteGroup","groupId",t);const n="/groups/{group-id}".replace("{group-id}",encodeURIComponent(String(t))),c=new URL(n,a);let u;e&&(u=e.baseOptions);const p={method:"DELETE",...u,...s},l={};null!=r&&(l["If-Match"]=String(r)),i(c,{});let h=u&&u.headers?u.headers:{};return p.headers={...l,...h,...s.headers},{url:d(c),options:p}},deleteMember:async(t,r,s,n={})=>{o("deleteMember","groupId",t),o("deleteMember","directoryObjectId",r);const c="/groups/{group-id}/members/{directory-object-id}/$ref".replace("{group-id}",encodeURIComponent(String(t))).replace("{directory-object-id}",encodeURIComponent(String(r))),u=new URL(c,a);let p;e&&(p=e.baseOptions);const l={method:"DELETE",...p,...n},h={};null!=s&&(h["If-Match"]=String(s)),i(u,{});let m=p&&p.headers?p.headers:{};return l.headers={...h,...m,...n.headers},{url:d(u),options:l}},getGroup:async(t,s,n,c={})=>{o("getGroup","groupId",t);const u="/groups/{group-id}".replace("{group-id}",encodeURIComponent(String(t))),p=new URL(u,a);let l;e&&(l=e.baseOptions);const h={method:"GET",...l,...c},m={};s&&(m.$select=Array.from(s).join(r.COLLECTION_FORMATS.csv)),n&&(m.$expand=Array.from(n).join(r.COLLECTION_FORMATS.csv)),i(p,m);let v=l&&l.headers?l.headers:{};return h.headers={...v,...c.headers},{url:d(p),options:h}},updateGroup:async(t,r,s={})=>{o("updateGroup","groupId",t),o("updateGroup","group",r);const n="/groups/{group-id}".replace("{group-id}",encodeURIComponent(String(t))),u=new URL(n,a);let p;e&&(p=e.baseOptions);const l={method:"PATCH",...p,...s},h={"Content-Type":"application/json"};i(u,{});let m=p&&p.headers?p.headers:{};return l.headers={...h,...m,...s.headers},l.data=c(r,l,e),{url:d(u),options:l}}}}(e);return{async addMember(n,a,o){const i=await s.addMember(n,a,o);return u(i,t.axios,r.BASE_PATH,e)},async deleteGroup(n,a,o){const i=await s.deleteGroup(n,a,o);return u(i,t.axios,r.BASE_PATH,e)},async deleteMember(n,a,o,i){const c=await s.deleteMember(n,a,o,i);return u(c,t.axios,r.BASE_PATH,e)},async getGroup(n,a,o,i){const c=await s.getGroup(n,a,o,i);return u(c,t.axios,r.BASE_PATH,e)},async updateGroup(n,a,o){const i=await s.updateGroup(n,a,o);return u(i,t.axios,r.BASE_PATH,e)}}},h=function(e){const s=function(e){return{createGroup:async(t,r={})=>{o("createGroup","group",t);const s=new URL("/groups",a);let n;e&&(n=e.baseOptions);const u={method:"POST",...n,...r},p={"Content-Type":"application/json"};i(s,{});let l=n&&n.headers?n.headers:{};return u.headers={...p,...l,...r.headers},u.data=c(t,u,e),{url:d(s),options:u}},listGroups:async(t,s,n,o,c,u,p,l,h={})=>{const m=new URL("/groups",a);let v;e&&(v=e.baseOptions);const b={method:"GET",...v,...h},S={};void 0!==t&&(S.$top=t),void 0!==s&&(S.$skip=s),void 0!==n&&(S.$search=n),void 0!==o&&(S.$filter=o),void 0!==c&&(S.$count=c),u&&(S.$orderby=Array.from(u).join(r.COLLECTION_FORMATS.csv)),p&&(S.$select=Array.from(p).join(r.COLLECTION_FORMATS.csv)),l&&(S.$expand=Array.from(l).join(r.COLLECTION_FORMATS.csv)),i(m,S);let g=v&&v.headers?v.headers:{};return b.headers={...g,...h.headers},{url:d(m),options:b}}}}(e);return{async createGroup(n,a){const o=await s.createGroup(n,a);return u(o,t.axios,r.BASE_PATH,e)},async listGroups(n,a,o,i,c,d,p,l,h){const m=await s.listGroups(n,a,o,i,c,d,p,l,h);return u(m,t.axios,r.BASE_PATH,e)}}},m=function(e){const s=function(e){return{changeOwnPassword:async(t,r={})=>{o("changeOwnPassword","passwordChange",t);const s=new URL("/me/changePassword",a);let n;e&&(n=e.baseOptions);const u={method:"POST",...n,...r},p={"Content-Type":"application/json"};i(s,{});let l=n&&n.headers?n.headers:{};return u.headers={...p,...l,...r.headers},u.data=c(t,u,e),{url:d(s),options:u}}}}(e);return{async changeOwnPassword(n,a){const o=await s.changeOwnPassword(n,a);return u(o,t.axios,r.BASE_PATH,e)}}},v=function(e){const s=function(e){return{listMyDrives:async(t,s,n,o,c,u,p,l={})=>{const h=new URL("/me/drives",a);let m;e&&(m=e.baseOptions);const v={method:"GET",...m,...l},b={};void 0!==t&&(b.$top=t),void 0!==s&&(b.$skip=s),void 0!==n&&(b.$orderby=n),void 0!==o&&(b.$filter=o),void 0!==c&&(b.$count=c),u&&(b.$select=Array.from(u).join(r.COLLECTION_FORMATS.csv)),p&&(b.$expand=Array.from(p).join(r.COLLECTION_FORMATS.csv)),i(h,b);let S=m&&m.headers?m.headers:{};return v.headers={...S,...l.headers},{url:d(h),options:v}}}}(e);return{async listMyDrives(n,a,o,i,c,d,p,l){const h=await s.listMyDrives(n,a,o,i,c,d,p,l);return u(h,t.axios,r.BASE_PATH,e)}}};class b extends r.BaseAPI{listMyDrives(e,t,r,s,n,a,o,i){return v(this.configuration).listMyDrives(e,t,r,s,n,a,o,i).then((e=>e(this.axios,this.basePath)))}}const S=function(e){const s=function(e){return{getOwnUser:async(t,s={})=>{const n=new URL("/me",a);let o;e&&(o=e.baseOptions);const c={method:"GET",...o,...s},u={};t&&(u.$expand=Array.from(t).join(r.COLLECTION_FORMATS.csv)),i(n,u);let p=o&&o.headers?o.headers:{};return c.headers={...p,...s.headers},{url:d(n),options:c}}}}(e);return{async getOwnUser(n,a){const o=await s.getOwnUser(n,a);return u(o,t.axios,r.BASE_PATH,e)}}},g=function(e){const s=function(e){return{deleteUser:async(t,r,s={})=>{o("deleteUser","userId",t);const n="/users/{user-id}".replace("{user-id}",encodeURIComponent(String(t))),c=new URL(n,a);let u;e&&(u=e.baseOptions);const p={method:"DELETE",...u,...s},l={};null!=r&&(l["If-Match"]=String(r)),i(c,{});let h=u&&u.headers?u.headers:{};return p.headers={...l,...h,...s.headers},{url:d(c),options:p}},getUser:async(t,s,n,c={})=>{o("getUser","userId",t);const u="/users/{user-id}".replace("{user-id}",encodeURIComponent(String(t))),p=new URL(u,a);let l;e&&(l=e.baseOptions);const h={method:"GET",...l,...c},m={};s&&(m.$select=Array.from(s).join(r.COLLECTION_FORMATS.csv)),n&&(m.$expand=Array.from(n).join(r.COLLECTION_FORMATS.csv)),i(p,m);let v=l&&l.headers?l.headers:{};return h.headers={...v,...c.headers},{url:d(p),options:h}},updateUser:async(t,r,s={})=>{o("updateUser","userId",t),o("updateUser","user",r);const n="/users/{user-id}".replace("{user-id}",encodeURIComponent(String(t))),u=new URL(n,a);let p;e&&(p=e.baseOptions);const l={method:"PATCH",...p,...s},h={"Content-Type":"application/json"};i(u,{});let m=p&&p.headers?p.headers:{};return l.headers={...h,...m,...s.headers},l.data=c(r,l,e),{url:d(u),options:l}}}}(e);return{async deleteUser(n,a,o){const i=await s.deleteUser(n,a,o);return u(i,t.axios,r.BASE_PATH,e)},async getUser(n,a,o,i){const c=await s.getUser(n,a,o,i);return u(c,t.axios,r.BASE_PATH,e)},async updateUser(n,a,o){const i=await s.updateUser(n,a,o);return u(i,t.axios,r.BASE_PATH,e)}}},O=function(e){const s=function(e){return{createUser:async(t,r={})=>{o("createUser","user",t);const s=new URL("/users",a);let n;e&&(n=e.baseOptions);const u={method:"POST",...n,...r},p={"Content-Type":"application/json"};i(s,{});let l=n&&n.headers?n.headers:{};return u.headers={...p,...l,...r.headers},u.data=c(t,u,e),{url:d(s),options:u}},listUsers:async(t,s,n,o,c,u,p,l,h={})=>{const m=new URL("/users",a);let v;e&&(v=e.baseOptions);const b={method:"GET",...v,...h},S={};void 0!==t&&(S.$top=t),void 0!==s&&(S.$skip=s),void 0!==n&&(S.$search=n),void 0!==o&&(S.$filter=o),void 0!==c&&(S.$count=c),u&&(S.$orderby=Array.from(u).join(r.COLLECTION_FORMATS.csv)),p&&(S.$select=Array.from(p).join(r.COLLECTION_FORMATS.csv)),l&&(S.$expand=Array.from(l).join(r.COLLECTION_FORMATS.csv)),i(m,S);let g=v&&v.headers?v.headers:{};return b.headers={...g,...h.headers},{url:d(m),options:b}}}}(e);return{async createUser(n,a){const o=await s.createUser(n,a);return u(o,t.axios,r.BASE_PATH,e)},async listUsers(n,a,o,i,c,d,p,l,h){const m=await s.listUsers(n,a,o,i,c,d,p,l,h);return u(m,t.axios,r.BASE_PATH,e)}}};class w{apiKey;username;password;accessToken;basePath;baseOptions;formDataCtor;constructor(e={}){this.apiKey=e.apiKey,this.username=e.username,this.password=e.password,this.accessToken=e.accessToken,this.basePath=e.basePath,this.baseOptions=e.baseOptions,this.formDataCtor=e.formDataCtor}isJsonMime(e){const t=new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$","i");return null!==e&&(t.test(e)||"application/json-patch+json"===e.toLowerCase())}}const f=(e,t)=>{const r=new URL(e);r.pathname=[...r.pathname.split("/"),"graph","v1.0"].filter(Boolean).join("/");const s=new w({basePath:r.href}),n=new b(s,s.basePath,t),a=function(e,t,r){const s=S(e);return{getOwnUser:(e,n)=>s.getOwnUser(e,n).then((e=>e(r,t)))}}(s,s.basePath,t),o=function(e,t,r){const s=m(e);return{changeOwnPassword:(e,n)=>s.changeOwnPassword(e,n).then((e=>e(r,t)))}}(s,s.basePath,t),i=function(e,t,r){const s=g(e);return{deleteUser:(e,n,a)=>s.deleteUser(e,n,a).then((e=>e(r,t))),getUser:(e,n,a,o)=>s.getUser(e,n,a,o).then((e=>e(r,t))),updateUser:(e,n,a)=>s.updateUser(e,n,a).then((e=>e(r,t)))}}(s,s.basePath,t),c=function(e,t,r){const s=O(e);return{createUser:(e,n)=>s.createUser(e,n).then((e=>e(r,t))),listUsers:(e,n,a,o,i,c,d,u,p)=>s.listUsers(e,n,a,o,i,c,d,u,p).then((e=>e(r,t)))}}(s,s.basePath,t),d=function(e,t,r){const s=l(e);return{addMember:(e,n,a)=>s.addMember(e,n,a).then((e=>e(r,t))),deleteGroup:(e,n,a)=>s.deleteGroup(e,n,a).then((e=>e(r,t))),deleteMember:(e,n,a,o)=>s.deleteMember(e,n,a,o).then((e=>e(r,t))),getGroup:(e,n,a,o)=>s.getGroup(e,n,a,o).then((e=>e(r,t))),updateGroup:(e,n,a)=>s.updateGroup(e,n,a).then((e=>e(r,t)))}}(s,s.basePath,t),u=function(e,t,r){const s=h(e);return{createGroup:(e,n)=>s.createGroup(e,n).then((e=>e(r,t))),listGroups:(e,n,a,o,i,c,d,u,p)=>s.listGroups(e,n,a,o,i,c,d,u,p).then((e=>e(r,t)))}}(s,s.basePath,t),v=function(e,t,r){const s=p(e);return{createDrive:(e,n)=>s.createDrive(e,n).then((e=>e(r,t))),deleteDrive:(e,n,a)=>s.deleteDrive(e,n,a).then((e=>e(r,t))),getDrive:(e,n,a,o)=>s.getDrive(e,n,a,o).then((e=>e(r,t))),updateDrive:(e,n,a)=>s.updateDrive(e,n,a).then((e=>e(r,t)))}}(s,s.basePath,t);return{drives:{listMyDrives:(e,t)=>n.listMyDrives(0,0,e,t),getDrive:e=>v.getDrive(e),createDrive:(e,t)=>v.createDrive(e,t),updateDrive:(e,t,r)=>v.updateDrive(e,t,r),deleteDrive:(e,t,r)=>v.deleteDrive(e,t,r)},users:{getUser:e=>i.getUser(e,new Set([]),new Set(["drive"])),createUser:e=>c.createUser(e),getMe:()=>a.getOwnUser(new Set(["memberOf"])),changeOwnPassword:(e,t)=>o.changeOwnPassword({currentPassword:e,newPassword:t}),editUser:(e,t)=>i.updateUser(e,t),deleteUser:e=>i.deleteUser(e),listUsers:e=>c.listUsers(0,0,"","",!1,new Set([e]),new Set([]),new Set(["memberOf"]))},groups:{createGroup:e=>u.createGroup(e),editGroup:(e,t)=>d.updateGroup(e,t),deleteGroup:e=>d.deleteGroup(e),listGroups:e=>u.listGroups(0,0,"","",!1,new Set([e]),new Set([]),new Set(["members"])),addMember:(e,t,r)=>{d.addMember(e,{"@odata.id":`${r}graph/v1.0/users/${t}`})},deleteMember:(e,t)=>{d.deleteMember(e,t)}}}},y=(e,r)=>{const s=new URL(e);s.pathname=[...s.pathname.split("/"),"ocs","v1.php"].filter(Boolean).join("/");const n=((e,r)=>{const s=new URL(e);s.pathname=[...s.pathname.split("/"),"cloud","capabilities"].filter(Boolean).join("/"),s.searchParams.append("format","json");const n=s.href;return{async getCapabilities(){const e=await r.get(n);return t.get(e,"data.ocs.data",{capabilities:null,version:null})}}})(s.href,r);return{getCapabilities:()=>n.getCapabilities()}};e.client=(e,t)=>({graph:f(e,t),ocs:y(e,t)}),e.helpers=n,Object.defineProperty(e,"__esModule",{value:!0})}));