import{c as s}from"/build/_shared/chunk-G5EWVEI5.js";var e=class{async request(n,o){let r=await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:n,variables:o})})).json();if(r.errors)throw new Error(r.errors.map(t=>t.message).join(`
`));return r.data}},c=new e;export{c as a};
