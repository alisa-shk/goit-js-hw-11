import{i,S as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(r){const o="https://pixabay.com/api/",s=new URLSearchParams({key:"44046646-50f8df335e976b654bc240f3a",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${o}?${s}`;return fetch(n).then(e=>e.json())}function m(r){return`<li class="gallery-item">
            <a class="gallery-link" href="">
            <img class="gallery-image" width="360" src="${r.largeImageURL}" alt="${r.tags}"/>
            </a>
            <ul class="captions">
            <li><strong>Likes</strong> ${r.likes}</li>
            <li><strong>Views</strong> ${r.views}</li>
            <li><strong>Comments</strong> ${r.comments}</li>
            <li><strong>Downloads</strong> ${r.downloads}</li>
            </ul>
            </li>
            `}function g(r){return r.map(m).join("")}const y=document.querySelector(".form"),a=document.querySelector(".gallery"),c=document.querySelector(".loader");y.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements.query.value.trim();if(!o){i.info({title:"Note",message:"Please enter your search"});return}a.innerHTML="",c.style.display="block",f(o).then(s=>{if(s.hits.length===0)i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});else{const n=g(s.hits);a.innerHTML=n,new u(".gallery a").refresh()}}).catch(s=>{i.error({title:"Error",message:"Please try again later!"}),console.log(s)}).finally(()=>{c.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
