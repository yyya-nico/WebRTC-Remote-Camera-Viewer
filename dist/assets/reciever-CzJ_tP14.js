import"./style-DGkg00M4.js";import{R as l,u as m,f as u}from"./utils-CQcwugCe.js";document.addEventListener("DOMContentLoaded",()=>{const n=new l,a=n.pc,t=document.getElementById("video"),c=m(),o=document.getElementById("output");o.log=e=>{o.textContent=e,c()};const d=document.getElementById("resolution");d.log=e=>{d.textContent=e,c()},n.onEvent=o.log;const i=document.getElementById("fullscreen");let s=null;t.addEventListener("resize",()=>{d.log(`${t.videoWidth} x ${t.videoHeight}`)}),a.addEventListener("track",e=>{s=e.track;const r=new MediaStream;t.srcObject=e.streams&&e.streams[0]||r,r.addTrack(s)}),u(i),n.ready(s)});
