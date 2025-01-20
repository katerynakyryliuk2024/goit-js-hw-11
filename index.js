import{i,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d=r=>`
    <li class='gallery-card'>
    <a class='gallery-link' href='${r.largeImageURL}'>
    <img class='galley-img' src='${r.webformatURL}' alt='${r.tags}' width='360'  '/>
    </a>
    <div class='description'>
    <p>Likes: ${r.likes}</p>
    <p>Views: ${r.views}</p> 
    <p>Comments: ${r.comments}</p>
    <p> Downloads: ${r.downloads}</p>
    </div>
    </li>
    `,y=r=>fetch(`https://pixabay.com/api/?key=48282241-c94e9d668c7a92092d53abf55&q=${r}&per_page=9&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).finally(()=>{loader.style.display="none"}),c=document.querySelector(".search-form"),n=document.querySelector(".gallery"),m=document.querySelector(".loader");console.dir(m);const p=r=>{r.preventDefault();const o=r.currentTarget.elements.search_input.value.trim();if(o===""){i.warning({title:"Caution",message:"You forgot to full fill searching area"});return}y(o).then(a=>{if(a.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML="",c.reset();return}const s=a.hits.map(t=>d(t)).join("");n.innerHTML=s,new u(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250}).refresh()}).catch(a=>{a.message==="404"&&i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(a)}),console.dir(o)};c.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
