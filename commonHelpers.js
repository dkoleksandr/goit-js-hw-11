import{S as u,i as f}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(i){return i.map(({webformatURL:r,largeImageURL:s,tags:a,likes:e,views:t,comments:o,downloads:d})=>`
        <li class="item-card loader">
        <a class="gallery-link" href="${s}">
            <img class="result-icon" src="${r}" alt="${a}" data-largeImage="${s}" >
            </a>
            <div class="info">
            <div><p class="likes">Likes <div>${e}</div></p></div>
            <div><p class="views">Views <div>${t}</div></p></div>
            <div><p class="comments">Comments <div>${o}</div></p></div>
            <div><p class="downloads">Downloads <div>${d}<div></p></div>
            </div>
        </li>
    `).join("")}const h=new u(".item-card a",{captionsData:"alt"}),p="https://pixabay.com/api/",v="43338805-0211d3d1e83cb5c165622303b";let y;const c={key:v,q:y,image_type:"photo",orientation:"horizontal",safesearch:!0};function g(i,r=""){return fetch(`${i}?${r}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function b(i){c.q=i}const l=document.querySelector(".js-search-form"),n=document.querySelector(".gallery");l.addEventListener("submit",L);function L(i){i.preventDefault(),b(i.target.elements.search.value),g(p,new URLSearchParams(c)).then(r=>{if(!r.hits.length){f.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}n.innerHTML="",l.reset(),n.insertAdjacentHTML("beforeend",m([...r.hits])),h.refresh()}).catch(r=>alert(r))}
//# sourceMappingURL=commonHelpers.js.map
