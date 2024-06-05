import{r as s}from"./index-DLjnpb--.js";var L={exports:{}},w={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G=s,N=Symbol.for("react.element"),W=Symbol.for("react.fragment"),A=Object.prototype.hasOwnProperty,U=G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,o){var n,i={},r=null,a=null;o!==void 0&&(r=""+o),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)A.call(t,n)&&!K.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:N,type:e,key:r,ref:a,props:i,_owner:U.current}}w.Fragment=W;w.jsx=O;w.jsxs=O;L.exports=w;var l=L.exports;const b=({text:e,textColor:t="#3d3d3d",fillColor:o="#f47979",fillSpeed:n=100,fillDelay:i=30,fillDirection:r="left-right",fillType:a="scroll",fillDuration:c=2e3})=>{const m=s.useRef(null),p=s.useMemo(()=>j(t),[t]),u=s.useMemo(()=>j(o),[o]),{generateClipPathFunction:d}=te({fillType:a,ref:m,fillDelay:i,fillDirection:r,fillSpeed:n,fillDuration:c,textLength:e.length});return l.jsx("div",{ref:m,children:e.map((h,y)=>l.jsxs("div",{style:{position:"relative",width:"fit-content"},children:[l.jsx("div",{style:p,children:h}),l.jsx("div",{style:{clipPath:d(y),position:"absolute",color:o,top:0,left:0,...u},children:h})]},h+"-"+y))})};try{b.displayName="TextReveal",b.__docgenInfo={description:"",displayName:"TextReveal",props:{text:{defaultValue:null,description:"Array of text.",name:"text",required:!0,type:{name:"string[]"}},textColor:{defaultValue:{value:"#3d3d3d"},description:`Initial color of the text before fill.

Gradients supported:
Syntax : linear-gradient(/value/)
E.g. linear-gradient(90deg, #12C2E9 0%, #c471ed 50%, #f64f59 100%)`,name:"textColor",required:!1,type:{name:"string"}},fillColor:{defaultValue:{value:"#f47979"},description:`Color which is going to fill the character while scroll.

Gradients supported:
Syntax : linear-gradient(/value/)
E.g. linear-gradient(90deg, #12C2E9 0%, #c471ed 50%, #f64f59 100%)`,name:"fillColor",required:!1,type:{name:"string"}},fillSpeed:{defaultValue:{value:"100"},description:"Speed to fill/show the text (default 100 means 100%)",name:"fillSpeed",required:!1,type:{name:"number"}},fillDelay:{defaultValue:{value:"30"},description:`Delay to fill/show the text 

Give value between (0-99) 

Default = 30, means after 30% of viewpoint, transition starts.`,name:"fillDelay",required:!1,type:{name:"number"}},fillDirection:{defaultValue:{value:"left-right"},description:"Direction to fill/show the text",name:"fillDirection",required:!1,type:{name:"enum",value:[{value:'"left-right"'},{value:'"top-bottom"'},{value:'"slant-top-bottom"'},{value:'"slant-bottom-top"'}]}},fillType:{defaultValue:{value:"scroll"},description:`Depends upon the type the transition work.

scroll - on mouse scroll transtion happens.

timer - automatically transtion starts, when the text is in viewpoint.`,name:"fillType",required:!1,type:{name:"enum",value:[{value:'"scroll"'},{value:'"timer"'}]}},fillDuration:{defaultValue:{value:"2000"},description:`Works when fillType='timer'

How much duration to fill/show the text
Default 2000 (milliseconds)`,name:"fillDuration",required:!1,type:{name:"number"}}}}}catch{}const M=e=>{const o=e instanceof HTMLElement&&window.getComputedStyle(e).overflowY,n=o!=="visible"&&o!=="hidden";if(e){if(n&&e.scrollHeight>=e.clientHeight)return e}else return null;return M(e.parentElement)||window},Q=(e,t)=>{var o,n;return e instanceof Window?{parentHeight:(e==null?void 0:e.innerHeight)||0,elementTop:((o=t.current)==null?void 0:o.offsetTop)||0}:{parentHeight:(e==null?void 0:e.clientHeight)||0,elementTop:(((n=t==null?void 0:t.current)==null?void 0:n.offsetTop)||0)-((e==null?void 0:e.offsetTop)||0)}},X=e=>{const[t,o]=s.useState(0),[n,i]=s.useState(null),{parentHeight:r,elementTop:a}=s.useMemo(()=>Q(n,e),[n]);s.useEffect(()=>{i(M(e.current))},[e==null?void 0:e.current]);const c=s.useCallback(()=>{o(()=>n instanceof Window?n.scrollY:(n==null?void 0:n.scrollTop)||0)},[n,e==null?void 0:e.current]);return s.useEffect(()=>(n==null||n.addEventListener("scroll",c,{passive:!0}),()=>{n==null||n.removeEventListener("scroll",c)}),[e==null?void 0:e.current,n]),{scrollY:t,parentElement:n,parentHeight:r,elementTop:a}};let g;const Z=({initialValue:e=0,targetValue:t=100,duration:o=2e3})=>{const[n,i]=s.useState(e),[r,a]=s.useState(null),c=()=>{let u=e;const d=Math.floor(o/(t-e));g=setInterval(()=>{u+=1,i(u),u>=t&&clearInterval(g)},d)},m=s.useCallback(()=>{clearInterval(g),a(!0),i(e)},[]),p=s.useCallback(()=>{a(!1),i(e),clearInterval(g)},[]);return s.useEffect(()=>(r&&c(),()=>{clearInterval(g)}),[r]),{count:n,startCounter:m,stopCounter:p}},_=({fillDirection:e,clipProgress:t})=>{switch(e){case"left-right":return`polygon(0% 0%, ${t}% 0%, ${t}% 100%, 0% 100%)`;case"top-bottom":return`polygon(100% 0%, 0%  0%, 0%  ${t}%, 100% ${t}%)`;case"slant-top-bottom":return`polygon(${t*2}% 0%, 0%  0%, 0%  100%, ${t}% 100%)`;case"slant-bottom-top":return`polygon(${t}% 0%, 0%  0%, 0%  100%, ${t*2}% 100%)`;default:return`polygon(0% 0%, ${t}% 0%, ${t}% 100%, 0% 100%)`}},ee=({ref:e,elementTop:t,parentHeight:o,fillDelay:n,textLength:i})=>{let r=0,a=0,c=0;return e&&e.current&&(r=t-o+o*(n/100),a=o+r-o*(n/100),c=(a-r)/i),{startHeight:r,stopHeight:a,breakPoint:c}},v="polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",te=({fillType:e,ref:t,fillDelay:o,fillDirection:n,fillSpeed:i,fillDuration:r,textLength:a})=>{const{scrollY:c,parentElement:m,parentHeight:p,elementTop:u}=X(t),{startHeight:d,breakPoint:h}=s.useMemo(()=>ee({ref:t,elementTop:u,parentHeight:p,fillDelay:o,textLength:a}),[t,m,p]),{count:y,startCounter:Y,stopCounter:V}=Z({initialValue:0,targetValue:100,duration:r>999?Math.abs(r-1e3):r});switch(s.useEffect(()=>{e==="timer"&&(c>d?!y&&Y():V())},[c>d]),e){case"scroll":return{generateClipPathFunction:T=>{if(c>=d){const f=(c-d-h*T)/h*i;return f>=100?void 0:f?_({fillDirection:n,clipProgress:f}):v}else return v}};case"timer":return{generateClipPathFunction:T=>{if(c>d){const f=(y-100/a*T)/(100/a)*i;return f>=100?void 0:f?_({fillDirection:n,clipProgress:f}):v}else return v}};default:return{generateClipPathFunction:()=>v}}},j=e=>e.includes("linear-gradient")?{background:e,backgroundClip:"text",WebkitTextFillColor:"transparent"}:{color:e},re={component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Smooth Color change animation in every character in a text"}}}},x={parameters:{layout:"fullscreen"},name:"Example: Solid colors",decorators:[e=>l.jsxs("div",{style:{height:"200vh",fontFamily:"sans-serif",padding:"1rem",background:"black"},children:[l.jsxs("div",{style:{color:"white",marginBottom:"0.5rem"},children:["👆 Reload 🔄 once you did any change in ",l.jsx("u",{children:"Controls"})]}),l.jsx("div",{style:{fontSize:"1.5rem",color:"white"},children:"Scroll down to see the text reveal"}),l.jsx("div",{style:{fontSize:"5rem",marginTop:"60vh"},children:l.jsx(e,{})})]})],args:{text:["Hello world","Hail JS 🙌"],textColor:"#3d3d3d",fillColor:"#f47979",fillSpeed:100,fillDelay:30,fillDirection:"left-right",fillType:"scroll"}},S={parameters:{layout:"fullscreen"},name:"Example: Transparent fill",decorators:[e=>l.jsxs("div",{style:{height:"200vh",fontFamily:"sans-serif",padding:"1rem",background:"black"},children:[l.jsxs("div",{style:{color:"white",marginBottom:"0.5rem"},children:["👆 Reload 🔄 once you did any change in ",l.jsx("u",{children:"Controls"})]}),l.jsx("div",{style:{fontSize:"1.5rem",color:"white"},children:"Scroll down to see the text reveal"}),l.jsx("div",{style:{fontSize:"5rem",marginTop:"60vh"},children:l.jsx(e,{})})]})],args:{text:["Hello world","Hail JS 🙌"],textColor:"transparent",fillColor:"#1d926f",fillSpeed:100,fillDelay:30,fillDirection:"left-right",fillType:"scroll"}},C={parameters:{layout:"fullscreen"},name:"Example: Linear Gradients",decorators:[e=>l.jsxs("div",{style:{height:"200vh",fontFamily:"sans-serif",padding:"1rem",background:"black"},children:[l.jsxs("div",{style:{color:"white",marginBottom:"0.5rem"},children:["👆 Reload 🔄 once you did any change in ",l.jsx("u",{children:"Controls"})]}),l.jsx("div",{style:{fontSize:"1.5rem",color:"white"},children:"Scroll down to see the text reveal"}),l.jsx("div",{style:{fontSize:"5rem",marginTop:"60vh"},children:l.jsx(e,{})})]})],args:{text:["Hello world","Hail JS 🙌"],textColor:"#3d3d3d",fillColor:"linear-gradient(90deg, #12C2E9 0%, #c471ed 50%, #f64f59 100%)",fillSpeed:100,fillDelay:30,fillDirection:"left-right",fillType:"scroll"},argTypes:{textColor:{control:{type:"text"}},fillColor:{control:{type:"text"}}}},D={parameters:{layout:"fullscreen"},name:"Example: Timer",decorators:[e=>l.jsxs("div",{style:{height:"200vh",fontFamily:"sans-serif",padding:"1rem",background:"black"},children:[l.jsxs("div",{style:{color:"white",marginBottom:"0.5rem"},children:["👆 Reload 🔄 once you did any change in ",l.jsx("u",{children:"Controls"})]}),l.jsx("div",{style:{fontSize:"1.5rem",color:"white"},children:"Scroll down to see the text reveal"}),l.jsx("div",{style:{fontSize:"5rem",marginTop:"60vh"},children:l.jsx(e,{})})]})],args:{text:["Hello world","Hail JS 🙌"],textColor:"#3d3d3d",fillColor:"linear-gradient(90deg, #12C2E9 0%, #c471ed 50%, #f64f59 100%)",fillSpeed:100,fillDelay:30,fillDirection:"left-right",fillType:"timer",fillDuration:2e3},argTypes:{textColor:{control:{type:"text"},description:"sadfsafsd dsf sdf sad"},fillColor:{control:{type:"text"}}}};var k,H,E;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    fillDelay: 30,
    fillDirection: "left-right",
    fillType: 'scroll'
  }
}`,...(E=(H=x.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var F,R,P;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  name: "Example: Transparent fill",
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
    textColor: "transparent",
    fillColor: "#1d926f",
    fillSpeed: 100,
    fillDelay: 30,
    fillDirection: "left-right",
    fillType: 'scroll'
  }
}`,...(P=(R=S.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var z,I,$;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
    fillDelay: 30,
    fillDirection: "left-right",
    fillType: 'scroll'
  },
  argTypes: {
    textColor: {
      control: {
        type: 'text'
      }
    },
    fillColor: {
      control: {
        type: 'text'
      }
    }
  }
}`,...($=(I=C.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var q,B,J;D.parameters={...D.parameters,docs:{...(q=D.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  name: "Example: Timer",
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
    fillDelay: 30,
    fillDirection: "left-right",
    fillType: 'timer',
    fillDuration: 2000
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
}`,...(J=(B=D.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};const ie=["example_solid_colors","example_transparent","example_gradient_color","example_timer"];export{ie as __namedExportsOrder,re as default,C as example_gradient_color,x as example_solid_colors,D as example_timer,S as example_transparent};
