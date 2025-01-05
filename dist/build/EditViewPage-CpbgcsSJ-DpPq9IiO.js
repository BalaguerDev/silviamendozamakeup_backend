import{gw as se,hs as ne,hx as ae,hy as ie,hu as oe,g7 as re,aM as ce,gH as le,d as D,B as T,gI as de,g as pe,k as w,i as $,c0 as ue,u as P,n as ge,ap as he,aN as Y,r as f,bo as me,bZ as fe,t as xe,aJ as ye,q as Ae,a3 as ke,j as e,P as O,N as Te,O as Ee,b as Ie,F as E,T as y,Q as x,aa as je,b1 as G,gm as v,hz as be,ab as H,d4 as Ce}from"./strapi-_XPMPZ-U.js";import{b as Se,c as Pe,d as _e}from"./apiTokens-ByCd8ZnO-DeTz1sAh.js";import{A as _}from"./constants-CRj0ViV1-Q2dfXdfa.js";import{F as ve,T as Re,a as Oe,b as Le,L as Me,c as Ne}from"./TokenTypeSelect-BZ9m_SK0-ZPfF3J83.js";import{t as we,m as $e}from"./tail-C7UCBUYD.js";import"./transferTokens-CQP13miB-CtARfgVy.js";import"./index-BXS3CUM0.js";import"./index-BRVyLNfZ.js";import"./_baseMap-rt9cPfy8.js";import"./_baseEach-B9A1aLyZ.js";function De(s,t,a,i){for(var n=a-1,d=s.length;++n<d;)if(i(s[n],t))return n;return-1}var Ue=De,Be=se,Fe=ie,Ge=Ue,He=ne,qe=ae,Ve=Array.prototype,q=Ve.splice;function Qe(s,t,a,i){var n=i?Ge:Fe,d=-1,r=t.length,h=s;for(s===t&&(t=qe(t)),a&&(h=Be(s,He(a)));++d<r;)for(var g=0,m=t[d],I=a?a(m):m;(g=n(h,I,g,i))>-1;)h!==s&&q.call(h,g,1),q.call(s,g,1);return s}var Ye=Qe,We=Ye;function ze(s,t){return s&&s.length&&t&&t.length?We(s,t):s}var Ke=ze,Je=oe,Ze=Ke,Xe=Je(Ze),et=Xe;const V=re(et),tt=ce.injectEndpoints({endpoints:s=>({getPermissions:s.query({query:()=>"/admin/content-api/permissions",transformResponse:t=>t.data}),getRoutes:s.query({query:()=>"/admin/content-api/routes",transformResponse:t=>t.data})}),overrideExisting:!1}),{useGetPermissionsQuery:st,useGetRoutesQuery:nt}=tt,[at,it]=le("ApiTokenPermissionsContext"),ot=({children:s,...t})=>e.jsx(at,{...t,children:s}),U=()=>it("useApiTokenPermissions"),rt=({errors:s={},onChange:t,canEditInputs:a,isCreating:i,values:n={},apiToken:d={},onDispatch:r,setHasChangedPermissions:h})=>{const{formatMessage:g}=P(),m=({target:{value:c}})=>{h(!1),c==="full-access"&&r({type:"SELECT_ALL_ACTIONS"}),c==="read-only"&&r({type:"ON_CHANGE_READ_ONLY"})},I=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return e.jsx(T,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(E,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(y,{variant:"delta",tag:"h2",children:g({id:"global.details",defaultMessage:"Details"})}),e.jsxs(x.Root,{gap:5,children:[e.jsx(x.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(Oe,{error:s.name,value:n.name,canEditInputs:a,onChange:t})},"name"),e.jsx(x.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(Le,{error:s.description,value:n.description,canEditInputs:a,onChange:t})},"description"),e.jsx(x.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(Me,{isCreating:i,error:s.lifespan,value:n.lifespan,onChange:t,token:d})},"lifespan"),e.jsx(x.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(Ne,{value:n.type,error:s.type,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:c=>{m({target:{value:c}}),t({target:{name:"type",value:c}})},options:I,canEditInputs:a})},"type")]})]})})},ct=s=>{switch(s){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},lt=D(T)`
  margin: -1px;
  border-radius: ${({theme:s})=>s.spaces[1]} 0 0 ${({theme:s})=>s.spaces[1]};
`,dt=({route:s={handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}})=>{const{formatMessage:t}=P(),{method:a,handler:i,path:n}=s,d=n?we(n.split("/")):[],[r="",h=""]=i?i.split("."):[],g=ct(s.method);return e.jsxs(E,{direction:"column",alignItems:"stretch",gap:2,children:[e.jsxs(y,{variant:"delta",tag:"h3",children:[t({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"})," ",e.jsx("span",{children:r}),e.jsxs(y,{variant:"delta",textColor:"primary600",children:[".",h]})]}),e.jsxs(E,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[e.jsx(lt,{background:g.background,borderColor:g.border,padding:2,children:e.jsx(y,{fontWeight:"bold",textColor:g.text,children:a})}),e.jsx(T,{paddingLeft:2,paddingRight:2,children:$e(d,m=>e.jsxs(y,{textColor:m.includes(":")?"neutral600":"neutral900",children:["/",m]},m))})]})]})},pt=()=>{const{value:{selectedAction:s,routes:t}}=U(),{formatMessage:a}=P(),i=s?.split(".")[0];return e.jsx(x.Item,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},direction:"column",alignItems:"stretch",children:s?e.jsx(E,{direction:"column",alignItems:"stretch",gap:2,children:i&&i in t&&t[i].map(n=>n.config.auth?.scope?.includes(s)||n.handler===s?e.jsx(dt,{route:n},n.handler):null)}):e.jsxs(E,{direction:"column",alignItems:"stretch",gap:2,children:[e.jsx(y,{variant:"delta",tag:"h3",children:a({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})}),e.jsx(y,{tag:"p",textColor:"neutral600",children:a({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},Q=de`
  background: ${s=>s.theme.colors.primary100};

  #cog {
    opacity: 1;
  }
`,ut=D(T)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  #cog {
    opacity: 0;
    path {
      fill: ${s=>s.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${s=>s.$isActive&&Q}
  &:hover {
    ${Q}
  }
`,gt=D.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,ht=({controllers:s=[],label:t,orderNumber:a=0,disabled:i=!1})=>{const{value:{onChangeSelectAll:n,onChange:d,selectedActions:r,setSelectedAction:h,selectedAction:g}}=U(),{formatMessage:m}=P(),I=c=>c===g;return e.jsxs(v.Item,{value:`${t}-${a}`,children:[e.jsx(v.Header,{variant:a%2?"primary":"secondary",children:e.jsx(v.Trigger,{children:be(t)})}),e.jsx(v.Content,{children:s?.map(c=>{const u=c.actions.every(p=>r.includes(p.actionId)),B=c.actions.some(p=>r.includes(p.actionId));return e.jsxs(T,{children:[e.jsxs(E,{justifyContent:"space-between",alignItems:"center",padding:4,children:[e.jsx(T,{paddingRight:4,children:e.jsx(y,{variant:"sigma",textColor:"neutral600",children:c?.controller})}),e.jsx(gt,{}),e.jsx(T,{paddingLeft:4,children:e.jsx(H,{checked:!u&&B?"indeterminate":u,onCheckedChange:()=>{n({target:{value:[...c.actions]}})},disabled:i,children:m({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),e.jsx(x.Root,{gap:4,padding:4,children:c?.actions&&c?.actions.map(p=>e.jsx(x.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(ut,{$isActive:I(p.actionId),padding:2,hasRadius:!0,children:[e.jsx(H,{checked:r.includes(p.actionId),name:p.actionId,onCheckedChange:()=>{d({target:{value:p.actionId}})},disabled:i,children:p.action}),e.jsx("button",{type:"button","data-testid":"action-cog",onClick:()=>h({target:{value:p.actionId}}),style:{display:"inline-flex",alignItems:"center"},children:e.jsx(Ce,{id:"cog"})})]})},p.actionId))})]},`${t}.${c?.controller}`)})})]})},mt=({section:s=null,...t})=>e.jsx(T,{padding:4,background:"neutral0",children:e.jsx(v.Root,{size:"M",children:s&&s.map((a,i)=>e.jsx(ht,{label:a.label,controllers:a.controllers,orderNumber:i,...t},a.apiId))})}),ft=({...s})=>{const{value:{data:t}}=U(),{formatMessage:a}=P();return e.jsxs(x.Root,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[e.jsxs(x.Item,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,direction:"column",alignItems:"stretch",children:[e.jsxs(E,{direction:"column",alignItems:"stretch",gap:2,children:[e.jsx(y,{variant:"delta",tag:"h2",children:a({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})}),e.jsx(y,{tag:"p",textColor:"neutral600",children:a({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."})})]}),t?.permissions&&e.jsx(mt,{section:t?.permissions,...s})]}),e.jsx(pt,{})]})},xt=pe().shape({name:w().max(100).required($.required.id),type:w().oneOf(["read-only","full-access","custom"]).required($.required.id),description:w().nullable(),lifespan:ue().integer().min(0).nullable().defined($.required.id)}),yt=s=>{const t={allActionsIds:[],permissions:[]};return t.permissions=Object.entries(s).map(([a,i])=>({apiId:a,label:a.split("::")[1],controllers:Object.keys(i.controllers).map(n=>({controller:n,actions:n in i.controllers?i.controllers[n].map(d=>{const r=`${a}.${n}.${d}`;return a.includes("api::")&&t.allActionsIds.push(r),{action:d,actionId:r}}).flat():[]})).flat()})),t},At={data:{allActionsIds:[],permissions:[]},routes:{},selectedAction:"",selectedActions:[]},kt=(s,t)=>je(s,a=>{switch(t.type){case"ON_CHANGE":{a.selectedActions.includes(t.value)?V(a.selectedActions,t.value):a.selectedActions.push(t.value);break}case"SELECT_ALL_IN_PERMISSION":{t.value.every(n=>a.selectedActions.includes(n.actionId))?t.value.forEach(n=>{V(a.selectedActions,n.actionId)}):t.value.forEach(n=>{a.selectedActions.push(n.actionId)});break}case"SELECT_ALL_ACTIONS":{a.selectedActions=[...a.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const i=a.data.allActionsIds.filter(n=>n.includes("find")||n.includes("findOne"));a.selectedActions=[...i];break}case"UPDATE_PERMISSIONS_LAYOUT":{a.data=yt(t.value);break}case"UPDATE_ROUTES":{a.routes={...t.value};break}case"UPDATE_PERMISSIONS":{a.selectedActions=[...t.value];break}case"SET_SELECTED_ACTION":{a.selectedAction=t.value;break}default:return a}}),Tt=()=>{const{formatMessage:s}=P(),{toggleNotification:t}=ge(),{state:a}=he(),i=Y(o=>o.admin_app.permissions),[n,d]=f.useState(a?.apiToken?.accessKey?{...a.apiToken}:null),{trackUsage:r}=me(),h=fe("EditView",o=>o.setCurrentStep),{allowedActions:{canCreate:g,canUpdate:m,canRegenerate:I}}=xe(i.settings?.["api-tokens"]),[c,u]=f.useReducer(kt,At),p=ye("/settings/api-tokens/:id")?.params?.id,A=p==="create",{_unstableFormatAPIError:k,_unstableFormatValidationErrors:F}=Ae(),W=ke(),b=st(),C=nt();f.useEffect(()=>{b.error&&t({type:"danger",message:k(b.error)})},[b.error,k,t]),f.useEffect(()=>{C.error&&t({type:"danger",message:k(C.error)})},[C.error,k,t]),f.useEffect(()=>{b.data&&u({type:"UPDATE_PERMISSIONS_LAYOUT",value:b.data})},[b.data]),f.useEffect(()=>{C.data&&u({type:"UPDATE_ROUTES",value:C.data})},[C.data]),f.useEffect(()=>{n&&(n.type==="read-only"&&u({type:"ON_CHANGE_READ_ONLY"}),n.type==="full-access"&&u({type:"SELECT_ALL_ACTIONS"}),n.type==="custom"&&u({type:"UPDATE_PERMISSIONS",value:n?.permissions}))},[n]),f.useEffect(()=>{r(A?"didAddTokenFromList":"didEditTokenFromList",{tokenType:_})},[A,r]);const{data:j,error:L,isLoading:z}=Se(p,{skip:!p||A||!!n});f.useEffect(()=>{L&&t({type:"danger",message:k(L)})},[L,k,t]),f.useEffect(()=>{j&&(d(j),j.type==="read-only"&&u({type:"ON_CHANGE_READ_ONLY"}),j.type==="full-access"&&u({type:"SELECT_ALL_ACTIONS"}),j.type==="custom"&&u({type:"UPDATE_PERMISSIONS",value:j?.permissions}))},[j]);const[K]=Pe(),[J]=_e(),Z=async(o,S)=>{r(A?"willCreateToken":"willEditToken",{tokenType:_});try{if(A){const l=await K({...o,lifespan:o?.lifespan&&o.lifespan!=="0"?parseInt(o.lifespan.toString(),10):null,permissions:o.type==="custom"?c.selectedActions:null});if("error"in l){G(l.error)&&l.error.name==="ValidationError"?S.setErrors(F(l.error)):t({type:"danger",message:k(l.error)});return}t({type:"success",message:s({id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"})}),r("didCreateToken",{type:l.data.type,tokenType:_}),W(`../api-tokens/${l.data.id.toString()}`,{state:{apiToken:l.data},replace:!0}),h("apiTokens.success")}else{const l=await J({id:p,name:o.name,description:o.description,type:o.type,permissions:o.type==="custom"?c.selectedActions:null});if("error"in l){G(l.error)&&l.error.name==="ValidationError"?S.setErrors(F(l.error)):t({type:"danger",message:k(l.error)});return}t({type:"success",message:s({id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),r("didEditToken",{type:l.data.type,tokenType:_})}}catch{t({type:"danger",message:s({id:"notification.error",defaultMessage:"Something went wrong"})})}},[X,M]=f.useState(!1),ee={...c,onChange:({target:{value:o}})=>{M(!0),u({type:"ON_CHANGE",value:o})},onChangeSelectAll:({target:{value:o}})=>{M(!0),u({type:"SELECT_ALL_IN_PERMISSION",value:o})},setSelectedAction:({target:{value:o}})=>{u({type:"SET_SELECTED_ACTION",value:o})}},N=m&&!A||g&&A;return z?e.jsx(O.Loading,{}):e.jsx(ot,{value:ee,children:e.jsxs(O.Main,{children:[e.jsx(O.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"API Tokens"})}),e.jsx(Te,{validationSchema:xt,validateOnChange:!1,initialValues:{name:n?.name||"",description:n?.description||"",type:n?.type,lifespan:n?.lifespan},enableReinitialize:!0,onSubmit:(o,S)=>Z(o,S),children:({errors:o,handleChange:S,isSubmitting:l,values:R,setFieldValue:te})=>(X&&R?.type!=="custom"&&te("type","custom"),e.jsxs(Ee,{children:[e.jsx(ve,{title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:n,setToken:d,canEditInputs:N,canRegenerate:I,isSubmitting:l,regenerateUrl:"/admin/api-tokens/"}),e.jsx(Ie.Content,{children:e.jsxs(E,{direction:"column",alignItems:"stretch",gap:6,children:[!!n?.name&&e.jsx(Re,{token:n?.accessKey,tokenType:_}),e.jsx(rt,{errors:o,onChange:S,canEditInputs:N,isCreating:A,values:R,apiToken:n,onDispatch:u,setHasChangedPermissions:M}),e.jsx(ft,{disabled:!N||R?.type==="read-only"||R?.type==="full-access"})]})})]}))})]})})},Nt=()=>{const s=Y(t=>t.admin_app.permissions.settings?.["api-tokens"].read);return e.jsx(O.Protect,{permissions:s,children:e.jsx(Tt,{})})};export{Tt as EditView,Nt as ProtectedEditView};
