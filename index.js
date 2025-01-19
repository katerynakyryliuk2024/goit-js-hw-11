import{i as l,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c=document.querySelector(".search-form"),n=document.querySelector(".gallery");console.log(n);const m=o=>`
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
    `,d=o=>{o.preventDefault();const s=o.currentTarget.elements.search_input.value.trim();if(s===""){l.warning({title:"Caution",message:"You forgot to full fill searching area"});return}fetch(`https://pixabay.com/api/?key=48282241-c94e9d668c7a92092d53abf55&q=${s}&per_page=9&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(console.log(t),!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML="",c.reset();return}const a=t.hits.map(r=>m(r)).join("");n.innerHTML=a,new u(".gallery a",{}).refresh()}).catch(t=>{t.message==="404"&&l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(t)}),console.dir(s)};c.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
