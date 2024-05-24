import{i,S as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function f(t){const o="https://pixabay.com/api/",s=new URLSearchParams({key:"44046646-50f8df335e976b654bc240f3a",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${o}?${s}`;return fetch(n).then(e=>e.json())}function m(t){return`<li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
            <img class="gallery-image" width="360" src="${t.webformatURL}" alt="${t.tags}"/>
            </a>
            <ul class="captions">
            <li><strong>Likes</strong> ${t.likes}</li>
            <li><strong>Views</strong> ${t.views}</li>
            <li><strong>Comments</strong> ${t.comments}</li>
            <li><strong>Downloads</strong> ${t.downloads}</li>
            </ul>
            </li>
            `}function g(t){return t.map(m).join("")}const y=document.querySelector(".form"),a=document.querySelector(".gallery"),c=document.querySelector(".loader");y.addEventListener("submit",t=>{t.preventDefault();const o=t.target.elements.query.value.trim();if(!o){i.info({title:"Note",message:"Please enter your search"});return}a.innerHTML="",c.style.display="block",f(o).then(s=>{if(s.hits.length===0)i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});else{const n=g(s.hits);a.innerHTML=n,new u(".gallery a",{captionsData:"alt"}).refresh()}}).catch(s=>{i.error({title:"Error",message:"Please try again later!"}),console.log(s)}).finally(()=>{c.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
