import{i as n}from"./assets/vendor-I1I71QQ2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();fetch("https://pixabay.com/api/?key=48282241-c94e9d668c7a92092d53abf55&per_page=9&image_type=photo&orientation=horizontal&safesearch=true").then(t=>{if(console.log(t),!t.ok)throw new Error(t.status);return t.json()}).then(t=>{console.log(t)}).catch(t=>{t.message==="404"&&n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(t)});
//# sourceMappingURL=index.js.map
