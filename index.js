import{i,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y=o=>`
    <li class='gallery-card'>
    <a class='gallery-link' href='${o.largeImageURL}'>
    <img class='galley-img' src='${o.webformatURL}' alt='${o.tags}' width='360'  '/>
    </a>
    <div class='description'>
    <p>Likes: ${o.likes}</p>
    <p>Views: ${o.views}</p> 
    <p>Comments: ${o.comments}</p>
    <p> Downloads: ${o.downloads}</p>
    </div>
    </li>
    `,u=document.querySelector(".search-form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader");console.dir(n);n.style.display="inline-block";const m=o=>{o.preventDefault();const a=o.currentTarget.elements.search_input.value.trim();if(a===""){i.warning({title:"Caution",message:"You forgot to full fill searching area"});return}fetch(`https://pixabay.com/api/?key=48282241-c94e9d668c7a92092d53abf55&q=${a}&per_page=9&image_type=photo&orientation=horizontal&safesearch=true`).finally(()=>{n.style.display="none"}).then(t=>{if(console.log(t),!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",u.reset();return}const s=t.hits.map(r=>y(r)).join("");c.innerHTML=s,new d(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250}).refresh()}).catch(t=>{t.message==="404"&&i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(t)}),console.dir(a)};u.addEventListener("submit",m);
//# sourceMappingURL=index.js.map
