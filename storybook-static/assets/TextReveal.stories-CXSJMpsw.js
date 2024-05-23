import{r}from"./index-DLjnpb--.js";var j={exports:{}},h={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z=r,q=Symbol.for("react.element"),Y=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,V=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function k(e,o,l){var t,a={},c=null,s=null;l!==void 0&&(c=""+l),o.key!==void 0&&(c=""+o.key),o.ref!==void 0&&(s=o.ref);for(t in o)I.call(o,t)&&!B.hasOwnProperty(t)&&(a[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps,o)a[t]===void 0&&(a[t]=o[t]);return{$$typeof:q,type:e,key:c,ref:s,props:a,_owner:V.current}}h.Fragment=Y;h.jsx=k;h.jsxs=k;j.exports=h;var n=j.exports;const R=e=>{const l=e instanceof HTMLElement&&window.getComputedStyle(e).overflowY,t=l!=="visible"&&l!=="hidden";if(e){if(t&&e.scrollHeight>=e.clientHeight)return e}else return null;return R(e.parentElement)||window},J=(e,o)=>{var l,t;return e instanceof Window?{parentHeight:(e==null?void 0:e.innerHeight)||0,elementTop:((l=o.current)==null?void 0:l.offsetTop)||0}:{parentHeight:(e==null?void 0:e.clientHeight)||0,elementTop:(((t=o==null?void 0:o.current)==null?void 0:t.offsetTop)||0)-((e==null?void 0:e.offsetTop)||0)}},M=e=>{const[o,l]=r.useState(0),[t,a]=r.useState(null),{parentHeight:c,elementTop:s}=r.useMemo(()=>J(t,e),[t]);r.useEffect(()=>{a(R(e.current))},[e==null?void 0:e.current]);const u=r.useCallback(()=>{l(()=>t instanceof Window?t.scrollY:(t==null?void 0:t.scrollTop)||0)},[t,e==null?void 0:e.current]);return r.useEffect(()=>(t==null||t.addEventListener("scroll",u,{passive:!0}),()=>{t==null||t.removeEventListener("scroll",u)}),[e==null?void 0:e.current,t]),{scrollY:o,parentElement:t,parentHeight:c,elementTop:s}},N=({fillDirection:e,clipProgress:o})=>{switch(e){case"left-right":return`polygon(0% 0%, ${o}% 0%, ${o}% 100%, 0% 100%)`;case"top-bottom":return`polygon(100% 0%, 0%  0%, 0%  ${o}%, 100% ${o}%)`;case"slant-top-bottom":return`polygon(${o*2}% 0%, 0%  0%, 0%  100%, ${o}% 100%)`;case"slant-bottom-top":return`polygon(${o}% 0%, 0%  0%, 0%  100%, ${o*2}% 100%)`;default:return`polygon(0% 0%, ${o}% 0%, ${o}% 100%, 0% 100%)`}},S=e=>e.includes("linear-gradient")?{background:e,backgroundClip:"text",WebkitTextFillColor:"transparent"}:{color:e},C="polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",g=({text:e,textColor:o="#3d3d3d",fillColor:l="#f47979",fillSpeed:t=100,fillDelay:a=3.5,fillDirection:c="left-right"})=>{const s=r.useRef(null),{scrollY:u,parentElement:E,parentHeight:f,elementTop:$}=M(s),L=()=>{let i=0,d=0,x=0;return s&&s.current&&(i=$-f+f/a,d=f+i-f/a,x=(d-i)/e.length),{startHeight:i,stopHeight:d,breakPoint:x}},{startHeight:y,breakPoint:v}=r.useMemo(()=>L(),[E,f]),F=r.useMemo(()=>S(o),[o]),O=r.useMemo(()=>S(l),[l]),P=i=>{if(u>=y){const d=(u-y-v*i)/v*t;return d?N({fillDirection:c,clipProgress:d}):C}else return C};return n.jsx("div",{ref:s,children:e.map((i,d)=>n.jsxs("div",{style:{position:"relative",width:"fit-content"},children:[n.jsx("div",{style:F,children:i}),n.jsx("div",{style:{clipPath:P(d),position:"absolute",color:l,top:0,left:0,...O},children:i})]},i+"-"+d))})};try{g.displayName="TextReveal",g.__docgenInfo={description:"",displayName:"TextReveal",props:{text:{defaultValue:null,description:"Array of text.",name:"text",required:!0,type:{name:"string[]"}},textColor:{defaultValue:{value:"#3d3d3d"},description:"Initial color of the text before fill.",name:"textColor",required:!1,type:{name:"string"}},fillColor:{defaultValue:{value:"#f47979"},description:`Color which is going to fill the character while scroll.

Gradients supported:
Syntax : linear-gradient(/value/)
E.g. linear-gradient(90deg, #12C2E9 0%, #c471ed 50%, #f64f59 100%)`,name:"fillColor",required:!1,type:{name:"string"}},fillSpeed:{defaultValue:{value:"100"},description:`Speed to fill/show the text (default 100 means 100%)

Gradients supported:
Syntax : linear-gradient(/value/)
E.g. linear-gradient(90deg, #12C2E9 0%, #c471ed 50%, #f64f59 100%)`,name:"fillSpeed",required:!1,type:{name:"number"}},fillDelay:{defaultValue:{value:"3.5"},description:"Delay to fill/show the text (default 3.5, give more than 1)",name:"fillDelay",required:!1,type:{name:"number"}},fillDirection:{defaultValue:{value:"left-right"},description:"Direction to fill/show the text",name:"fillDirection",required:!1,type:{name:"enum",value:[{value:'"left-right"'},{value:'"top-bottom"'},{value:'"slant-top-bottom"'},{value:'"slant-bottom-top"'}]}}}}}catch{}const G={component:g,tags:["autodocs"],parameters:{docs:{description:{component:"Smooth Color change animation in every characters in a text while scroll"}}}},p={parameters:{layout:"fullscreen"},name:"Example: Solid colors",decorators:[e=>n.jsxs("div",{style:{height:"200vh",fontFamily:"sans-serif",padding:"1rem",background:"black"},children:[n.jsxs("div",{style:{color:"white",marginBottom:"0.5rem"},children:["👆 Reload 🔄 once you did any change in ",n.jsx("u",{children:"Controls"})]}),n.jsx("div",{style:{fontSize:"1.5rem",color:"white"},children:"Scroll down to see the text reveal"}),n.jsx("div",{style:{fontSize:"5rem",marginTop:"60vh"},children:n.jsx(e,{})})]})],args:{text:["Hello world","Hail JS 🙌"],textColor:"#3d3d3d",fillColor:"#f47979",fillSpeed:100,fillDelay:3.5,fillDirection:"left-right"}},m={parameters:{layout:"fullscreen"},name:"Example: Linear Gradients",decorators:[e=>n.jsxs("div",{style:{height:"200vh",fontFamily:"sans-serif",padding:"1rem",background:"black"},children:[n.jsxs("div",{style:{color:"white",marginBottom:"0.5rem"},children:["👆 Reload 🔄 once you did any change in ",n.jsx("u",{children:"Controls"})]}),n.jsx("div",{style:{fontSize:"1.5rem",color:"white"},children:"Scroll down to see the text reveal"}),n.jsx("div",{style:{fontSize:"5rem",marginTop:"60vh"},children:n.jsx(e,{})})]})],args:{text:["Hello world","Hail JS 🙌"],textColor:"#3d3d3d",fillColor:"linear-gradient(90deg, #12C2E9 0%, #c471ed 50%, #f64f59 100%)",fillSpeed:100,fillDelay:3.5,fillDirection:"left-right"},argTypes:{textColor:{control:{type:"text"},description:"sadfsafsd dsf sdf sad"},fillColor:{control:{type:"text"}}}};var _,D,w;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  name: "Example: Solid colors",
  decorators: [Story => <div style={{
    height: '200vh',
    fontFamily: 'sans-serif',
    padding: '1rem',
    background: 'black'
  }}>
        <div style={{
      color: 'white',
      marginBottom: '0.5rem'
    }}>👆 Reload 🔄 once you did any change in <u>Controls</u></div>
        <div style={{
      fontSize: '1.5rem',
      color: 'white'
    }}>Scroll down to see the text reveal</div>
        <div style={{
      fontSize: '5rem',
      marginTop: '60vh'
    }}>
          <Story />
        </div>
      </div>],
  args: {
    text: ['Hello world', 'Hail JS 🙌'],
    textColor: '#3d3d3d',
    fillColor: '#f47979',
    fillSpeed: 100,
    fillDelay: 3.5,
    fillDirection: "left-right"
  }
}`,...(w=(D=p.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var b,H,T;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  name: "Example: Linear Gradients",
  decorators: [Story => <div style={{
    height: '200vh',
    fontFamily: 'sans-serif',
    padding: '1rem',
    background: 'black'
  }}>
        <div style={{
      color: 'white',
      marginBottom: '0.5rem'
    }}>👆 Reload 🔄 once you did any change in <u>Controls</u></div>
        <div style={{
      fontSize: '1.5rem',
      color: 'white'
    }}>Scroll down to see the text reveal</div>
        <div style={{
      fontSize: '5rem',
      marginTop: '60vh'
    }}>
          <Story />
        </div>
      </div>],
  args: {
    text: ['Hello world', 'Hail JS 🙌'],
    textColor: '#3d3d3d',
    fillColor: 'linear-gradient(90deg, #12C2E9 0%, #c471ed 50%, #f64f59 100%)',
    fillSpeed: 100,
    fillDelay: 3.5,
    fillDirection: "left-right"
  },
  argTypes: {
    textColor: {
      control: {
        type: 'text'
      },
      description: 'sadfsafsd dsf sdf sad'
    },
    fillColor: {
      control: {
        type: 'text'
      }
    }
  }
}`,...(T=(H=m.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};const W=["example_solid_colors","example_gradient_color"];export{W as __namedExportsOrder,G as default,m as example_gradient_color,p as example_solid_colors};
