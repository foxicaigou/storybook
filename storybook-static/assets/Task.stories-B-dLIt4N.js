import{e as f,o as d,j as u,k as t,p as b,q as _,h as m}from"./iframe-C0JHOMRr.js";const y=["for","aria-label"],D=["checked","name","id"],S=["for","aria-label"],A=["value","id"],C=["id","aria-label"],o=f({__name:"Task",props:{task:{},onArchiveTask:{type:Function},onPinTask:{type:Function}},emits:["archive-task","pin-task"],setup(e,{emit:T}){const i=e,h=m(()=>`list-item ${i.task.state}`),c=m(()=>i.task.state==="TASK_ARCHIVED"),k=T;function v(){k("archive-task",i.task.id)}function g(){k("pin-task",i.task.id)}return(N,l)=>(d(),u("div",{class:_(h.value)},[t("label",{for:"checked"+e.task.id,"aria-label":"archiveTask-"+e.task.id,class:"checkbox"},[t("input",{type:"checkbox",checked:c.value,disabled:"",name:"checked"+e.task.id,id:"archiveTask-"+e.task.id},null,8,D),t("span",{class:"checkbox-custom",onClick:v})],8,y),t("label",{for:"title-"+e.task.id,"aria-label":e.task.title,class:"title"},[t("input",{type:"text",readonly:"",value:e.task.title,id:"title-"+e.task.id,name:"title",placeholder:"Input title"},null,8,A)],8,S),c.value?b("",!0):(d(),u("button",{key:0,class:"pin-button",onClick:g,id:"pinTask-"+e.task.id,"aria-label":"pinTask-"+e.task.id},[...l[0]||(l[0]=[t("span",{class:"icon-star"},null,-1)])],8,C))],2))}});o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"Task",description:"",tags:{},props:[{name:"task",description:"Composition of the task",required:!0,type:{name:"TaskData"}},{name:"onArchiveTask",description:"Event to change the task to archived",required:!0,type:{name:"TSFunctionType"}},{name:"onPinTask",description:"Event to change the task to pinned",required:!0,type:{name:"TSFunctionType"}}],events:[{name:"archive-task",type:{names:["string"]}},{name:"pin-task",type:{names:["string"]}}],sourceFiles:["C:/Users/admin/Desktop/taskbox/src/components/Task.vue"]});const{fn:p}=__STORYBOOK_MODULE_TEST__,r={id:"1",title:"Test Task",state:"TASK_INBOX",events:{onArchiveTask:p(),onPinTask:p()}},E={component:o,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...r.events}},a={args:{task:r}},s={args:{task:{...a.args.task,state:"TASK_PINNED"}}},n={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    task: TaskData
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...n.parameters?.docs?.source}}};const x=["TaskData","Default","Pinned","Archived"],I=Object.freeze(Object.defineProperty({__proto__:null,Archived:n,Default:a,Pinned:s,TaskData:r,__namedExportsOrder:x,default:E},Symbol.toStringTag,{value:"Module"}));export{r as T,o as _,I as a};
