import{i as l}from"./assets/vendor-I1I71QQ2.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i=document.querySelector(".search-form"),n=document.querySelector(".gallery");console.log(n);const u=o=>`
    <li class='gallery-card'>
    <a class='gallery-link' href='${o.largeImageURL}'>
    <img class='galley-img' src='${o.webformatURL}' alt='${o.tags}' width='360' />
    </a>
    </li>
    `,d=o=>{o.preventDefault();const a=o.currentTarget.elements.search_input.value;fetch(`https://pixabay.com/api/?key=48282241-c94e9d668c7a92092d53abf55&q=${a}&per_page=9&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(console.log(r),!r.ok)throw new Error(r.status);return r.json()}).then(r=>{const s=r.hits.map(e=>u(e)).join("");console.log(s)}).catch(r=>{r.message==="404"&&l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(r)}),console.dir(a)};i.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
