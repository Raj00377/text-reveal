import{r as a}from"./index-DLjnpb--.js";var V={exports:{}},T={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q=a,K=Symbol.for("react.element"),X=Symbol.for("react.fragment"),Z=Object.prototype.hasOwnProperty,ee=Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,te={key:!0,ref:!0,__self:!0,__source:!0};function Y(e,t,l){var n,r={},s=null,i=null;l!==void 0&&(s=""+l),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)Z.call(t,n)&&!te.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)r[n]===void 0&&(r[n]=t[n]);return{$$typeof:K,type:e,key:s,ref:i,props:r,_owner:ee.current}}T.Fragment=X;T.jsx=Y;T.jsxs=Y;V.exports=T;var o=V.exports;const j=({text:e,textColor:t="#3d3d3d",fillColor:l="#f47979",fillSpeed:n=100,fillDelay:r=30,fillDirection:s="left-right",fillType:i="scroll",fillDuration:d=2e3,freeScroll:c=!1})=>{const u=a.useRef(null),f=a.useMemo(()=>F(t),[t]),y=a.useMemo(()=>F(l),[l]),{generateClipPathFunction:m}=ie({fillType:i,ref:u,fillDelay:r,fillDirection:s,fillSpeed:n,fillDuration:d,textLength:e.length,freeScroll:c});return o.jsx("div",{ref:u,children:e.map((h,g)=>o.jsxs("div",{style:{position:"relative",width:"fit-content",whiteSpace:"nowrap"},children:[o.jsx("div",{style:f,children:h}),o.jsx("div",{style:{clipPath:m(g),position:"absolute",color:l,top:0,left:0,...y},children:h})]},h+"-"+g))})};try{j.displayName="TextReveal",j.__docgenInfo={description:"",displayName:"TextReveal",props:{text:{defaultValue:null,description:"Array of text.",name:"text",required:!0,type:{name:"string[]"}},textColor:{defaultValue:{value:"#3d3d3d"},description:`Initial color of the text before fill.

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

Default 2000 (milliseconds)`,name:"fillDuration",required:!1,type:{name:"number"}},freeScroll:{defaultValue:{value:"false"},description:`Having a paragraph?
Set freeScroll = true,

It takes relative content height and makes transition accordingly

Default value = false`,name:"freeScroll",required:!1,type:{name:"boolean"}}}}}catch{}const A=e=>{const l=e instanceof HTMLElement&&window.getComputedStyle(e).overflowY,n=l!=="visible"&&l!=="hidden";if(e){if(n&&e.scrollHeight>=e.clientHeight)return e}else return null;return A(e.parentElement)||window},ne=(e,t)=>{var l,n;return e instanceof Window?{parentHeight:(e==null?void 0:e.innerHeight)||0,elementTop:((l=t.current)==null?void 0:l.offsetTop)||0}:{parentHeight:(e==null?void 0:e.clientHeight)||0,elementTop:(((n=t==null?void 0:t.current)==null?void 0:n.offsetTop)||0)-((e==null?void 0:e.offsetTop)||0)}},oe=e=>{const[t,l]=a.useState(0),[n,r]=a.useState(null),{parentHeight:s,elementTop:i}=a.useMemo(()=>ne(n,e),[n]);a.useEffect(()=>{r(A(e.current))},[e==null?void 0:e.current]);const d=a.useCallback(()=>{l(()=>n instanceof Window?n.scrollY:(n==null?void 0:n.scrollTop)||0)},[n,e==null?void 0:e.current]);return a.useEffect(()=>(n==null||n.addEventListener("scroll",d,{passive:!0}),()=>{n==null||n.removeEventListener("scroll",d)}),[e==null?void 0:e.current,n]),{scrollY:t,parentElement:n,parentHeight:s,elementTop:i}};let v;const le=({initialValue:e=0,targetValue:t=100,duration:l=2e3})=>{const[n,r]=a.useState(e),[s,i]=a.useState(null),d=()=>{let f=e;const y=Math.floor(l/(t-e));v=setInterval(()=>{f+=1,r(f),f>=t&&clearInterval(v)},y)},c=a.useCallback(()=>{clearInterval(v),i(!0),r(e)},[]),u=a.useCallback(()=>{i(!1),r(e),clearInterval(v)},[]);return a.useEffect(()=>(s&&d(),()=>{clearInterval(v)}),[s]),{count:n,startCounter:c,stopCounter:u}},k=({fillDirection:e,clipProgress:t})=>{switch(e){case"left-right":return`polygon(0% 0%, ${t}% 0%, ${t}% 100%, 0% 100%)`;case"top-bottom":return`polygon(100% 0%, 0%  0%, 0%  ${t}%, 100% ${t}%)`;case"slant-top-bottom":return`polygon(${t*2}% 0%, 0%  0%, 0%  100%, ${t}% 100%)`;case"slant-bottom-top":return`polygon(${t}% 0%, 0%  0%, 0%  100%, ${t*2}% 100%)`;default:return`polygon(0% 0%, ${t}% 0%, ${t}% 100%, 0% 100%)`}},re=({ref:e,elementTop:t,parentHeight:l,fillDelay:n,textLength:r,freeScroll:s})=>{var u;let i=0,d=0,c=0;return e&&e.current&&(i=t-l+l*(n/100),d=l+i-l*(n/100),c=s?((u=e==null?void 0:e.current)==null?void 0:u.clientHeight)/r:(d-i)/r),{startHeight:i,stopHeight:d,breakPoint:c}},x="polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",ie=({fillType:e,ref:t,fillDelay:l,fillDirection:n,fillSpeed:r,fillDuration:s,textLength:i,freeScroll:d})=>{const{scrollY:c,parentElement:u,parentHeight:f,elementTop:y}=oe(t),{startHeight:m,breakPoint:h}=a.useMemo(()=>re({ref:t,elementTop:y,parentHeight:f,fillDelay:l,textLength:i,freeScroll:d}),[t,u,f]),{count:g,startCounter:W,stopCounter:U}=le({initialValue:0,targetValue:100,duration:s>999?Math.abs(s-1e3):s});switch(a.useEffect(()=>{e==="timer"&&(c>m?!g&&W():U())},[c>m]),e){case"scroll":return{generateClipPathFunction:_=>{if(c>=m){const p=(c-m-h*_)/h*r;return p>=100?void 0:p?k({fillDirection:n,clipProgress:p}):x}else return x}};case"timer":return{generateClipPathFunction:_=>{if(c>m){const p=(g-100/i*_)/(100/i)*r;return p>=100?void 0:p?k({fillDirection:n,clipProgress:p}):x}else return x}};default:return{generateClipPathFunction:()=>x}}},F=e=>e.includes("linear-gradient")?{background:e,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}:{color:e},ce={component:j,tags:["autodocs"],parameters:{docs:{description:{component:"Smooth Color change animation in every character in a text"}}}},S={parameters:{layout:"fullscreen"},name:"Example: Solid colors",decorators:[e=>o.jsxs("div",{style:{height:"200vh",fontFamily:"sans-serif",padding:"1rem",background:"black"},children:[o.jsxs("div",{style:{color:"white",marginBottom:"0.5rem"},children:["👆 Reload 🔄 once you did any change in ",o.jsx("u",{children:"Controls"})]}),o.jsx("div",{style:{fontSize:"1.5rem",color:"white"},children:"Scroll down to see the text reveal"}),o.jsx("div",{style:{fontSize:"5rem",marginTop:"60vh"},children:o.jsx(e,{})})]})],args:{text:["Hello world","Hail JS 🙌"],textColor:"#3d3d3d",fillColor:"#f47979",fillSpeed:100,fillDelay:30,fillDirection:"left-right",fillType:"scroll"}},w={parameters:{layout:"fullscreen"},name:"Example: Transparent",decorators:[e=>o.jsxs("div",{style:{height:"200vh",fontFamily:"sans-serif",padding:"1rem",background:"black"},children:[o.jsxs("div",{style:{color:"white",marginBottom:"0.5rem"},children:["👆 Reload 🔄 once you did any change in ",o.jsx("u",{children:"Controls"})]}),o.jsx("div",{style:{fontSize:"1.5rem",color:"white"},children:"Scroll down to see the text reveal"}),o.jsx("div",{style:{fontSize:"5rem",marginTop:"60vh"},children:o.jsx(e,{})})]})],args:{text:["Hello world","Hail JS 🙌"],textColor:"transparent",fillColor:"#1d926f",fillSpeed:100,fillDelay:30,fillDirection:"left-right",fillType:"scroll"}},C={parameters:{layout:"fullscreen"},name:"Example: Linear Gradients",decorators:[e=>o.jsxs("div",{style:{height:"200vh",fontFamily:"sans-serif",padding:"1rem",background:"black"},children:[o.jsxs("div",{style:{color:"white",marginBottom:"0.5rem"},children:["👆 Reload 🔄 once you did any change in ",o.jsx("u",{children:"Controls"})]}),o.jsx("div",{style:{fontSize:"1.5rem",color:"white"},children:"Scroll down to see the text reveal"}),o.jsx("div",{style:{fontSize:"5rem",marginTop:"60vh"},children:o.jsx(e,{})})]})],args:{text:["Hello world","Hail JS 🙌"],textColor:"#3d3d3d",fillColor:"linear-gradient(90deg, #12C2E9 0%, #c471ed 50%, #f64f59 100%)",fillSpeed:100,fillDelay:30,fillDirection:"left-right",fillType:"scroll"},argTypes:{textColor:{control:{type:"text"}},fillColor:{control:{type:"text"}}}},D={parameters:{layout:"fullscreen"},name:"Example: Timer",decorators:[e=>o.jsxs("div",{style:{height:"200vh",fontFamily:"sans-serif",padding:"1rem",background:"black"},children:[o.jsxs("div",{style:{color:"white",marginBottom:"0.5rem"},children:["👆 Reload 🔄 once you did any change in ",o.jsx("u",{children:"Controls"})]}),o.jsx("div",{style:{fontSize:"1.5rem",color:"white"},children:"Scroll down to see the text reveal"}),o.jsx("div",{style:{fontSize:"5rem",marginTop:"60vh"},children:o.jsx(e,{})})]})],args:{text:["Hello world","Hail JS 🙌"],textColor:"#3d3d3d",fillColor:"linear-gradient(90deg, #12C2E9 0%, #c471ed 50%, #f64f59 100%)",fillSpeed:100,fillDelay:30,fillDirection:"left-right",fillType:"timer",fillDuration:2e3},argTypes:{textColor:{control:{type:"text"},description:"sadfsafsd dsf sdf sad"},fillColor:{control:{type:"text"}}}},b={parameters:{layout:"fullscreen"},name:"Example: Paragraph",decorators:[e=>o.jsxs("div",{style:{height:"730vh",fontFamily:"sans-serif",padding:"1rem",background:"black"},children:[o.jsxs("div",{style:{color:"white",marginBottom:"0.5rem"},children:["👆 Reload 🔄 once you did any change in ",o.jsx("u",{children:"Controls"})]}),o.jsx("div",{style:{fontSize:"1.5rem",color:"white"},children:"Scroll down to see the text reveal"}),o.jsx("div",{style:{fontSize:"3.75rem",marginTop:"60vh"},children:o.jsx(e,{})})]})],args:{text:["Hello world,","Free and Open Source Software (FOSS)","promotes s/w that can be freely used,","modified, and distributed by anyone.","The freedom to use the software ","for any purpose and access to the ","source code and ability to share","both original and modified version","the movement was shaped by ","Richard Stallman's GNU Project","and the Free Software Foundation","along with Linus Torvalds development","of the Linux kernel.","Benefits of FOSS include cost savings,","more security, transparency, flexibility","and a collaborative community."," Challenges include potential issues with","support, usability, compatibility,","funding, time, and people.","Popular FOSS examples include","Linux, Apache, MySQL, Git,","LibreOffice, and Mozilla Firefox.","Despite challenges, the FOSS movement","continues to significantly influence","the software industry through its","emphasis on innovation, cost reduction","and open collaboration."],textColor:"#252525",fillColor:"#a8a8ff",fillSpeed:100,fillDelay:30,fillDirection:"left-right",fillType:"scroll",freeScroll:!0}};var H,E,R;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(R=(E=S.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var P,z,O;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  name: "Example: Transparent",
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
}`,...(O=(z=w.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var L,B,I;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(I=(B=C.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var $,M,q;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(q=(M=D.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var G,J,N;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  name: "Example: Paragraph",
  decorators: [Story => <div style={{
    height: '730vh',
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
      fontSize: '3.75rem',
      marginTop: '60vh'
    }}>
          <Story />
        </div>
      </div>],
  args: {
    text: ['Hello world,', 'Free and Open Source Software (FOSS)', 'promotes s/w that can be freely used,', 'modified, and distributed by anyone.', 'The freedom to use the software ', 'for any purpose and access to the ', 'source code and ability to share', 'both original and modified version', 'the movement was shaped by ', 'Richard Stallman\\'s GNU Project', 'and the Free Software Foundation', 'along with Linus Torvalds development', 'of the Linux kernel.', 'Benefits of FOSS include cost savings,', 'more security, transparency, flexibility', 'and a collaborative community.', ' Challenges include potential issues with', 'support, usability, compatibility,', 'funding, time, and people.', 'Popular FOSS examples include', 'Linux, Apache, MySQL, Git,', 'LibreOffice, and Mozilla Firefox.', 'Despite challenges, the FOSS movement', 'continues to significantly influence', 'the software industry through its', 'emphasis on innovation, cost reduction', 'and open collaboration.'],
    textColor: "#252525",
    fillColor: "#a8a8ff",
    fillSpeed: 100,
    fillDelay: 30,
    fillDirection: "left-right",
    fillType: 'scroll',
    freeScroll: true
  }
}`,...(N=(J=b.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};const ue=["example_solid_colors","example_transparent","example_gradient_color","example_timer","example_paragraph"];export{ue as __namedExportsOrder,ce as default,C as example_gradient_color,b as example_paragraph,S as example_solid_colors,D as example_timer,w as example_transparent};
