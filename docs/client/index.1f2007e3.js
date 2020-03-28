import{S as e,i as t,s as r,e as s,t as a,f as o,g as n,h as l,d as h,j as g,k as _,l as u,m as i,a as c,q as p,c as k,n as f,o as m}from"./client.2c4ac403.js";function d(e,t,r){const s=e.slice();return s[1]=t[r],s}function v(e){let t,r,c,p,k=e[1].title+"";return{c(){t=s("li"),r=s("a"),c=a(k),this.h()},l(e){t=o(e,"LI",{});var s=n(t);r=o(s,"A",{rel:!0,href:!0});var a=n(r);c=l(a,k),a.forEach(h),s.forEach(h),this.h()},h(){g(r,"rel","prefetch"),g(r,"href",p="dev/"+e[1].slug)},m(e,s){_(e,t,s),u(t,r),u(r,c)},p(e,t){1&t&&k!==(k=e[1].title+"")&&i(c,k),1&t&&p!==(p="dev/"+e[1].slug)&&g(r,"href",p)},d(e){e&&h(t)}}}function y(e){let t,r,i,y,b,E,x,w,A,O,S,C,D,H,I,L,j,T,W,q=e[0],P=[];for(let t=0;t<q.length;t+=1)P[t]=v(d(e,q,t));return{c(){t=c(),r=s("h1"),i=a("Anonlang - Anonsage Language"),y=c(),b=s("p"),E=a("I like thinking about programming language design. So, here's a few thoughts and sample syntax of the latest iteration I'm working on:"),x=a("\r\n\r\nOutput 'Hello, World!':\r\n"),w=s("code"),A=a("'Hello, World!'"),O=a("\r\n\r\nSimple Temperature converter:\r\n"),S=s("pre"),C=s("code"),D=a("fahrenheit = celsius * 1.8 + 32\r\n  'Fahrenheit: ' <input id=fah type=number bind=solve(fahrenheit, celsius=cel)>\r\n  'Celsius: ' <input id=cel type=number bind=solve(celsius, fahrenheit=fah)>"),H=a("\r\n\r\nSimple TODO list with local and remote storage:\r\n"),I=s("pre"),L=s("code"),j=a("storage_key = 'tasks'\r\n  pref_key = 'user_storage_type_pref'\r\n  local_storage = platform.storage\r\n  remote_storage = url(https://example.com/api/storage)\r\n  user_storage = local_storage(pref_key) otherwise remote_storage(pref_key) otherwise local_storage\r\n  get_tasks() = user_storage(storage_key) otherwise mutable_list()\r\n  tasks = get_tasks()\r\n  save_task(value) = tasks.add(value) then user_storage(storage_key).add(value)\r\n  remove_task(value) = tasks.remove(value) then user_storage(storage_key).remove(value)\r\n  set_user_storage_type(storage_type) = local_storage(pref_key).set(storage_type) then remote_storage(pref_key).set(storage_type) then user_storage.update() then tasks.update()\r\n\r\n  <checkbox text='Use remote storage?'\r\n            on_check=set_user_storage_type(remote_storage)\r\n            on_uncheck=set_user_storage_type(local_storage)>\r\n  <input hint='Add a task' on_key_enter=save_task(input.text)>\r\n  <list bind=tasks template(task)=`<checkbox on_check=remove_task(task)> task`>"),T=c(),W=s("ul");for(let e=0;e<P.length;e+=1)P[e].c();this.h()},l(e){p('[data-svelte="svelte-15q7n7k"]',document.head).forEach(h),t=k(e),r=o(e,"H1",{});var s=n(r);i=l(s,"Anonlang - Anonsage Language"),s.forEach(h),y=k(e),b=o(e,"P",{});var a=n(b);E=l(a,"I like thinking about programming language design. So, here's a few thoughts and sample syntax of the latest iteration I'm working on:"),a.forEach(h),x=l(e,"\r\n\r\nOutput 'Hello, World!':\r\n"),w=o(e,"CODE",{});var g=n(w);A=l(g,"'Hello, World!'"),g.forEach(h),O=l(e,"\r\n\r\nSimple Temperature converter:\r\n"),S=o(e,"PRE",{});var _=n(S);C=o(_,"CODE",{});var u=n(C);D=l(u,"fahrenheit = celsius * 1.8 + 32\r\n  'Fahrenheit: ' <input id=fah type=number bind=solve(fahrenheit, celsius=cel)>\r\n  'Celsius: ' <input id=cel type=number bind=solve(celsius, fahrenheit=fah)>"),u.forEach(h),_.forEach(h),H=l(e,"\r\n\r\nSimple TODO list with local and remote storage:\r\n"),I=o(e,"PRE",{});var c=n(I);L=o(c,"CODE",{});var f=n(L);j=l(f,"storage_key = 'tasks'\r\n  pref_key = 'user_storage_type_pref'\r\n  local_storage = platform.storage\r\n  remote_storage = url(https://example.com/api/storage)\r\n  user_storage = local_storage(pref_key) otherwise remote_storage(pref_key) otherwise local_storage\r\n  get_tasks() = user_storage(storage_key) otherwise mutable_list()\r\n  tasks = get_tasks()\r\n  save_task(value) = tasks.add(value) then user_storage(storage_key).add(value)\r\n  remove_task(value) = tasks.remove(value) then user_storage(storage_key).remove(value)\r\n  set_user_storage_type(storage_type) = local_storage(pref_key).set(storage_type) then remote_storage(pref_key).set(storage_type) then user_storage.update() then tasks.update()\r\n\r\n  <checkbox text='Use remote storage?'\r\n            on_check=set_user_storage_type(remote_storage)\r\n            on_uncheck=set_user_storage_type(local_storage)>\r\n  <input hint='Add a task' on_key_enter=save_task(input.text)>\r\n  <list bind=tasks template(task)=`<checkbox on_check=remove_task(task)> task`>"),f.forEach(h),c.forEach(h),T=k(e),W=o(e,"UL",{class:!0});var m=n(W);for(let e=0;e<P.length;e+=1)P[e].l(m);m.forEach(h),this.h()},h(){document.title="Anonlang - Anonsage Language",g(W,"class","svelte-t8e7u1")},m(e,s){_(e,t,s),_(e,r,s),u(r,i),_(e,y,s),_(e,b,s),u(b,E),_(e,x,s),_(e,w,s),u(w,A),_(e,O,s),_(e,S,s),u(S,C),u(C,D),_(e,H,s),_(e,I,s),u(I,L),u(L,j),_(e,T,s),_(e,W,s);for(let e=0;e<P.length;e+=1)P[e].m(W,null)},p(e,[t]){if(1&t){let r;for(q=e[0],r=0;r<q.length;r+=1){const s=d(e,q,r);P[r]?P[r].p(s,t):(P[r]=v(s),P[r].c(),P[r].m(W,null))}for(;r<P.length;r+=1)P[r].d(1);P.length=q.length}},i:f,o:f,d(e){e&&h(t),e&&h(r),e&&h(y),e&&h(b),e&&h(x),e&&h(w),e&&h(O),e&&h(S),e&&h(H),e&&h(I),e&&h(T),e&&h(W),m(P,e)}}}function b({params:e,query:t}){return this.fetch("dev.json").then(e=>e.json()).then(e=>({posts:e}))}function E(e,t,r){let{posts:s}=t;return e.$set=(e=>{"posts"in e&&r(0,s=e.posts)}),[s]}export default class extends e{constructor(e){super(),t(this,e,E,y,r,{posts:0})}}export{b as preload};
