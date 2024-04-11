import{S as u,i as f}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function h(s){return s.map(({webformatURL:i,largeImageURL:t,tags:a,likes:e,views:r,comments:o,downloads:d})=>`
        <li class="item-card loader">
        <a class="gallery-link" href="${t}">
            <img class="result-icon" src="${i}" alt="${a}" data-largeImage="${t}" >
            </a>
            <div class="info">
            <div><p class="likes">Likes <div>${e}</div></p></div>
            <div><p class="views">Views <div>${r}</div></p></div>
            <div><p class="comments">Comments <div>${o}</div></p></div>
            <div><p class="downloads">Downloads <div>${d}<div></p></div>
            </div>
        </li>
    `).join("")}const m=new u(".item-card a",{captionsData:"alt"}),p="https://pixabay.com/api/",v="43338805-0211d3d1e83cb5c165622303b";let y;const c={key:v,q:y,image_type:"photo",orientation:"horizontal",safesearch:!0};function g(s,i=""){return fetch(`${s}?${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function b(s){c.q=s}const l=document.querySelector(".js-search-form"),n=document.querySelector(".gallery");l.addEventListener("submit",L);function L(s){s.preventDefault();const i=s.target.elements.search.value;i&&(b(i),g(p,new URLSearchParams(c)).then(t=>{if(!t.hits.length){f.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}n.innerHTML="",l.reset(),n.insertAdjacentHTML("beforeend",h([...t.hits])),m.refresh()}).catch(t=>alert(t)))}
//# sourceMappingURL=commonHelpers.js.map
