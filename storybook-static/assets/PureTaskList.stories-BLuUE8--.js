import{e as P,j as d,F as k,r as T,k as s,h,o as r,m as f,f as N}from"./iframe-C0JHOMRr.js";import{_ as x,T as a}from"./Task.stories-B-dLIt4N.js";const b={class:"list-items"},E={key:1,class:"list-items","data-testid":"empty",id:"empty"},m=P({__name:"PureTaskList",props:{tasks:{},loading:{type:Boolean}},emits:["archive-task","pin-task"],setup(g,{emit:_}){const p=g,v=h(()=>p.tasks.length===0),D=h(()=>[...p.tasks.filter(e=>e.state==="TASK_PINNED"),...p.tasks.filter(e=>e.state!=="TASK_PINNED")]),u=_;function S(e){u("archive-task",e)}function L(e){u("pin-task",e)}return(e,c)=>(r(),d("div",b,[g.loading?(r(),d(k,{key:0},T(6,l=>s("div",{key:l,class:"loading-item","data-testid":"loading",id:"loading"},[...c[0]||(c[0]=[s("span",{class:"glow-checkbox"},null,-1),s("span",{class:"glow-text"},[s("span",null,"Loading"),f(),s("span",null,"cool"),f(),s("span",null,"state")],-1)])])),64)):v.value?(r(),d("div",E,[...c[1]||(c[1]=[s("div",{class:"wrapper-message"},[s("span",{class:"icon-check"}),s("p",{class:"title-message"},"You have no tasks"),s("p",{class:"subtitle-message"},"Sit back and relax")],-1)])])):(r(!0),d(k,{key:2},T(D.value,l=>(r(),N(x,{key:l.id,task:l,onArchiveTask:S,onPinTask:L},null,8,["task"]))),128))]))}});m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"PureTaskList",description:"",tags:{},props:[{name:"tasks",required:!0,type:{name:"Array",elements:[{name:"TaskData"}]}},{name:"loading",required:!1,type:{name:"boolean"}}],events:[{name:"archive-task",type:{names:["string"]}},{name:"pin-task",type:{names:["string"]}}],sourceFiles:["C:/Users/admin/Desktop/taskbox/src/components/PureTaskList.vue"]});const y=[{...a,id:"1",title:"Task 1"},{...a,id:"2",title:"Task 2"},{...a,id:"3",title:"Task 3"},{...a,id:"4",title:"Task 4"},{...a,id:"5",title:"Task 5"},{...a,id:"6",title:"Task 6"}],I={component:m,title:"PureTaskList",tags:["autodocs"],excludeStories:/.*Data$/,decorators:[()=>({template:'<div style="margin: 3em;"><story/></div>'})],args:{...a.events}},t={args:{tasks:y}},o={args:{tasks:[...t.args.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]}},n={args:{tasks:[],loading:!0}},i={args:{...n.args,loading:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: TaskListData
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [...Default.args.tasks.slice(0, 5), {
      id: '6',
      title: 'Task 6 (pinned)',
      state: 'TASK_PINNED'
    }]
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tasks: [],
    loading: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false
  }
}`,...i.parameters?.docs?.source}}};const A=["TaskListData","Default","WithPinnedTasks","Loading","Empty"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Empty:i,Loading:n,TaskListData:y,WithPinnedTasks:o,__namedExportsOrder:A,default:I},Symbol.toStringTag,{value:"Module"}));export{j as P,y as T,m as _};
