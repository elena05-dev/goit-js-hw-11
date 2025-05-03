import{a as u,S as d,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",p="50047920-024bf2fadca75537663b51516",y=async a=>{try{return(await u.get(f,{params:{key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(r){throw console.error("Error fetching images:",r),r}};let c;function m(a){const r=document.querySelector(".gallery"),s=a.map(o=>{const e=o.tags.split(",")[0];return`
        <li class="gallery-item">
          <a class="gallery-link" href="${o.largeImageURL}">
            <img
              class="gallery-image"
              src="${o.webformatURL}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${o.likes}</p>
            <p><b>Views:</b> ${o.views}</p>
            <p><b>Comments:</b> ${o.comments}</p>
            <p><b>Downloads:</b> ${o.downloads}</p>
           
          </div>
      
        </li>
      `}).join("");r.insertAdjacentHTML("beforeend",s),c?c.refresh():c=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function g(){document.querySelector(".gallery").innerHTML=""}function h(){document.querySelector(".loader").classList.remove("is-hidden")}function b(){setTimeout(()=>{document.querySelector(".loader").classList.add("is-hidden")},500)}const l=document.querySelector(".form");document.querySelector(".gallery");l.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query",position:"topRight"});return}g(),h();try{const s=await y(r);if(s.hits.length===0){n.info({message:"Sorry, there are no images matching<br> your search query. Please try again!",position:"topRight",backgroundColor:"#ff6b6b",color:"white"});return}m(s.hits),l.reset()}catch(s){n.error({message:"An error occurred while fetching data. Try again later.",position:"topRight"}),console.error(s)}finally{b()}l.reset()});
//# sourceMappingURL=index.js.map
