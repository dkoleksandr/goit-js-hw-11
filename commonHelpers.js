import{S as l,i as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(o,s={}){return fetch(`${o}?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function h(o){return o.map(({webformatURL:s,largeImageURL:t,tags:a,likes:e,views:r,comments:n,downloads:c})=>`
        <li class="item-card">
        <a class="gallery-link" href="${t}">
            <img src="${s}" alt="${a}" data-largeImage="${t}" class="weather-icon">
            </a>
            <p class="likes">Likes <span>${e}</span></p>
            <p class="views">Views ${r}</p>
            <p class="comments">Comments ${n}</p>
            <p class="downloads">Downloads ${c}</p>
        </li>
    `).join("")}const m=new l(".item-card a",{captionsData:"alt"}),p="https://pixabay.com/api/",d="43338805-0211d3d1e83cb5c165622303b",g=document.querySelector(".js-search-form"),y=document.querySelector(".gallery");let i;g.addEventListener("submit",b);function b(o){o.preventDefault(),i=o.target.elements.search.value;const s=new URLSearchParams({key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});f(p,s).then(t=>{if(!t.hits.length){u.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}console.log([...t.hits]),y.insertAdjacentHTML("beforeend",h([...t.hits])),m.refresh()}).catch(t=>alert(t))}
//# sourceMappingURL=commonHelpers.js.map
