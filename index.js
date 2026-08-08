import{a as d,S as p,i as l}from"./assets/vendor-CMFIJsrw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="57065525-8f77b836fab1fdfa97291f836",y="https://pixabay.com/api/";function h(s){return d.get(y,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:f,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${e}"
          />

          <div class="image-info">
            <p><b>Likes</b><br>${t}</p>
            <p><b>Views</b><br>${a}</p>
            <p><b>Comments</b><br>${f}</p>
            <p><b>Downloads</b><br>${m}</p>
          </div>
        </a>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function v(){c.innerHTML=""}function S(){u.classList.add("is-visible")}function q(){u.classList.remove("is-visible")}const n=document.querySelector(".form"),w=n.elements["search-text"];n.addEventListener("submit",s=>{s.preventDefault();const r=w.value.trim();r!==""&&(v(),S(),h(r).then(o=>{const i=o.data.hits;if(i.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i)}).catch(o=>{console.log(o),l.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q()}),n.reset())});
//# sourceMappingURL=index.js.map
