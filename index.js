import{i as n,S as y}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d=r=>`
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
    `,p=r=>fetch(`https://pixabay.com/api/?key=48282241-c94e9d668c7a92092d53abf55&q=${r}&per_page=9&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).finally(()=>{loader.style.display="none"}),u=document.querySelector(".search-form"),c=document.querySelector(".gallery"),a=document.querySelector(".loader");console.dir(a);a.style.display="inline-block";const m=r=>{r.preventDefault();const o=r.currentTarget.elements.search_input.value.trim();if(o===""){n.warning({title:"Caution",message:"You forgot to full fill searching area"});return}a.style.display="inline-block",p(o).then(s=>{if(s.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",u.reset();return}a.style.display="none";const l=s.hits.map(t=>d(t)).join("");c.innerHTML=l,a.style.display="none",new y(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250}).refresh()}).catch(s=>{s.message==="404"&&n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(s)}),console.dir(o)};u.addEventListener("submit",m);
//# sourceMappingURL=index.js.map
