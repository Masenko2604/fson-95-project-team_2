import{a as y,P as V}from"./vendor-b592f4c5.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerpolicy&&(c.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?c.credentials="include":t.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(t){if(t.ep)return;t.ep=!0;const c=o(t);fetch(t.href,c)}})();function E(e){const a=JSON.parse(localStorage.getItem("cart"))||[],o=Array(a).flat(1/0);o.push(e),a.includes(e)||localStorage.setItem("cart",JSON.stringify(o))}function O(e){const a=JSON.parse(localStorage.getItem("cart")),o=Array(a).flat(1/0),s=o.indexOf(e);o.splice(s,1),localStorage.setItem("cart",JSON.stringify(o))}function l(e){const a=JSON.parse(localStorage.getItem("cart"));return Array(a).flat(1/0).some(s=>s===e)}const Q="/santa-sleigh-team-2/assets/fruitCart@2x-44c39800.png",X="/santa-sleigh-team-2/assets/check-mark-35f2f86f.png",f=document.querySelector(".qty-card"),J=JSON.parse(localStorage.getItem("cart"))||[],Z=J.length>0?J.length:0;let ee=Z;function b(e){f.textContent=String(e)}b(ee);const n="/santa-sleigh-team-2/assets/icons-b3cb9da3.svg",h=document.querySelector(".js-modal"),te=document.querySelector(".modal-content"),v=document.querySelector(".js-modal-subscription"),z=document.querySelector(".subscription-modal-content"),w=document.querySelector(".js-modal-order"),se=document.querySelector(".subscription-order-content"),S=document.querySelector("body");function x(){S.style.overflow="hidden"}function P(){S.style.overflow="auto"}async function H(e){h.classList.toggle("is-hidden"),await ue(e).then(a=>{const{img:o,name:s,desc:t,category:c,size:i,popularity:d,price:r,is10PercentOff:u}=a,M=t.split("");te.innerHTML=`<div class='image-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href="${n}#icon-close-btn"></use>
        </svg>
      </button><div class='discount-icon-wrap'>
    <img src='${o}' alt='${t}' class='modal-img'>
          <svg class="discount-icon-modal is-hidden" width="60" height="60">
          <use href="${n}#icon-discount"></use>
          </div>
    </div>
    <div class='modal-descr-together'>
    <div class='modal-descr-container'>
    <h2 class='modal-name'>${s}</h2>
    <div class='modal-text-wrapper'>
    <p class='modal-text'>Category:<p class='modal-text-descr'>${String(c).replace("_"," ").replace("_"," ")}</p>
    <p class='modal-text'>Size:<p class='modal-text-descr'>${i}</p>
    <p class='modal-text'>Popularity:<p class='modal-text-descr'>${d}</p>
    </div>
    </div>
    <p class='modal-descr'>${t}</p>
    </div>
    <div class='modal-floor-wrap'>
    <p class='modal-price'>$${r}</p>
    <button type='submit' class='modal-cart-btn'>Add to
        <svg class='modal-window-cart-button' width='18' height='18'>
          <use href="${n}#icon-cart"></use>
        </svg></button>
    </div>

  `,u===!0&&document.querySelector(".discount-icon-modal").classList.remove("is-hidden"),M.length>300?document.querySelector(".modal-descr").classList.add("modal-descr-fixed"):document.querySelector(".modal-descr").classList.remove("modal-descr-fixed"),window.addEventListener("keydown",W);function W(p){p.key==="Escape"&&h.classList.add("is-hidden"),S.style.overflow="auto",m()}window.onclick=function(p){p.target===h&&h.classList.add("is-hidden"),S.style.overflow="auto",m()};const j=document.querySelector(".modal-close-btn");j.addEventListener("click",B);function B(p){p.currentTarget===j&&h.classList.add("is-hidden"),S.style.overflow="auto",m()}const g=document.querySelector(".modal-cart-btn");g.addEventListener("click",F),l(e)&&(g.childNodes[0].data="Remove from",g.style.minWidth="175px");function F(){l(e)?(O(e),g.childNodes[0].data="Add to",g.style.minWidth="130px",b(f.outerText-1)):(b(Number(f.outerText)+Number(1)),E(e),g.childNodes[0].data="Remove from",g.style.minWidth="175px")}h.classList.contains("is-hidden")&&(removeEventListener("click",B),removeEventListener("click",F),removeEventListener("keydown",W))})}async function ae(e){v.classList.toggle("is-hidden"),await pe(e).then(t=>{z.innerHTML=`<div class='success-text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-success-header'>Thanks for subscribing for <span class='subscription-success-email'>new</span> products</h2>
      <p class='subscription-success-descr'>We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.</p>
      <img src="${Q}" alt='vegetables' class='subscription-success-image'>
  `}).catch(t=>{t.response.status===409?z.innerHTML=`<div class='text-wrap'>
   <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='15' height='15'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
      <h2 class='subscription-failed-header'>This <span class='subscription-failed-email'>email address</span> has already been entered</h2>
      <p class='subscription-failed-descr'>You have already subscribed to our new products. Watch for offers at the mailing address.</p>
  `:console.log("SOMETHING WENT WRONG")}),window.addEventListener("keydown",a);function a(t){t.key==="Escape"&&v.classList.add("is-hidden"),P()}window.onclick=function(t){t.target===v&&v.classList.add("is-hidden"),P()};const o=document.querySelector(".modal-close-btn");o.addEventListener("click",s);function s(t){t.currentTarget===o&&v.classList.add("is-hidden"),P()}h.classList.contains("is-hidden")&&(removeEventListener("click",s),removeEventListener("keydown",a))}function Le(){w.classList.toggle("is-hidden"),se.innerHTML=`
  <button class='modal-close-btn' data-modal-close aria-label='close modal button'>
        <svg class='modal-window-close-button' width='20' height='20'>
          <use href='${n}#icon-close-btn'></use>
        </svg>
      </button>
    <img src='${X}' alt='order successful' class='order-success-img'>
    <h2 class='order-success-status'>Order success</h2>
    <p class='order-success-descr'>Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness.</p>
  `,window.addEventListener("keydown",e);function e(s){s.key==="Escape"&&w.classList.add("is-hidden")}window.onclick=function(s){s.target===w&&w.classList.add("is-hidden")};const a=document.querySelector(".modal-close-btn");a.addEventListener("click",o);function o(s){s.currentTarget===a&&w.classList.add("is-hidden")}}const I=document.querySelector(".list-product"),_=document.querySelector(".form-search"),N=document.querySelector(".error"),Y=document.querySelector("#selected");N.style.display="none";let q,k;_.addEventListener("submit",oe);const G=window.innerWidth;let L;G<=767?L=6:G<=1239?L=8:L=9;function oe(e){e.preventDefault();const{search:a}=e.currentTarget.elements;q=a.value,localStorage.setItem("SaveFilters",JSON.stringify(q)||null),m()}_.elements.search.value=localStorage.getItem("savetext");m();Y.addEventListener("change",ce);function ce(e){e.target.value;const a=e.target.value;k=a,k=a,localStorage.setItem("SaveCategpries",JSON.stringify(k)||null),m()}_.elements.selecteds.value=localStorage.getItem("saveselected");function ne(){de().then(e=>{const a=e.map(o=>`<option value="${String(o).replace("_","_").replace("&","%26")}">
            ${String(o).replace("_"," ").replace("_"," ")}</option>`).join("");Y.insertAdjacentHTML("beforeend",a),new SlimSelect({select:".selected"})}).catch(e=>{console.log(e)})}ne();async function m(){await D(1,L).then(e=>{e.results.length===0?N.style.display="flex":N.style.display="none",K(e.results),document.querySelectorAll(".basket").forEach(s=>{s.addEventListener("click",o);const t=s.dataset.id;l(t)&&(s.setAttribute("disabled","true"),s.innerHTML=`
        <svg class="basket-icon-check" width="18" height="18">
          <use href="${n}#icon-check"></use>
        </svg>
      `)});function o(s){const t=s.currentTarget,c=t.dataset.id;l(c)?(O(c),t.removeAttribute(c),t.innerHTML=`
      <svg class="basket-icon" width="18" height="18">
        <use href="${n}#icon-cart"></use>
      </svg>
    `):(E(c),t.setAttribute("disabled",!0),l(c)&&(t.style.transform="rotate(270deg)",setTimeout(()=>{t.innerHTML=`
              <svg class="basket-icon-check" width="18" height="18">
                <use href="${n}#icon-check"></use>
              </svg>
              `,t.style.transform="rotate(360deg)"},300),t.setAttribute("disabled","true")),b(Number(f.outerText)+Number(1)))}}).catch(e=>{throw new Error(e)})}function K(e){const a=e.map(({name:o,img:s,category:t,price:c,size:i,popularity:d,is10PercentOff:r,_id:u})=>r==!0?`
              <li class="item-product" data-id="${u}">
                <div class="product-container" id="svg-discount">
                  <svg width="60" height="60" class="discount-svg">
                    <use href="${n}#icon-discount"></use>
                  </svg>
                  <img class="img-product" src="${s}" width="400" height="200">
                  <h2 class="caption-product">${o}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${t}</span></p>
                      <p class="feature">Size: <span class=feature-black>${i}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${d}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <button class="basket" data-id="${u}">
        <svg class="basket-icon" width="18" height="18">
          <use href="${n}#icon-cart"></use>
        </svg>
      </button>
                  </div>
                </div>
              </li>
              `:`
              <li class="item-product" data-id="${u}">
                <div class="product-container" id="svg-discount">
                  <img class="img-product" src="${s}" width="400" height="200">
                  <h2 class="caption-product">${o}</h2>
                  <div class="features-container">
                      <p class="feature">Category: <span class=feature-black>${String(t).replace("_"," ").replace("_"," ")}</span></p>
                      <p class="feature">Size: <span class=feature-black>${i}</span></p>
                      <p class="feature popularity">Popularity: <span class=feature-black>${d}</span></p>
                  </div>
                  <div class="sell-container">
                      <p class="price-product">$${c}</p>
                      <button class="basket" data-id="${u}">
        <svg class="basket-icon" width="18" height="18">
          <use href="${n}#icon-cart"></use>
        </svg>
      </button>
                  </div>
                </div>
              </li>
              `).join("");I.innerHTML="",I.insertAdjacentHTML("beforeend",a)}function ie(e){const a=e.target.closest(".item-product"),o=e.target.closest(".basket");if(a&&!o){const s=a.dataset.id;H(s).then(x)}}I.addEventListener("click",ie);async function D(e,a){const o=await y.get(`https://food-boutique.b.goit.study/api/products?keyword=${q||""}&category=${k||""}&`,{params:{keywords:q||"",selectedForm:k||"",page:e||1,limit:a||6}});return localStorage.setItem("page",e),localStorage.getItem("page"),localStorage.setItem("limit",a),localStorage.getItem("limit"),o.data}async function re(){return(await y.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function le(){return(await y.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function de(){return(await y.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function ue(e){return(await y.get(`https://food-boutique.b.goit.study/api/products/${e}`)).data}async function pe(e){try{const a="https://food-boutique.b.goit.study/api/subscription",o={email:e};return(await y.post(a,o)).data}catch(a){throw console.log("Something went wrong: "+a),a}}const A=document.querySelector(".footer-form-authorization");A.addEventListener("submit",ge);function ge(e){e.preventDefault(),ae(A[0].value).then(x),A.reset()}const R=document.querySelector(".discount_container"),he=2;function me(e,a,o=0){const s=o+he;return e.slice(o,s).map(({img:i,price:d,_id:r,desc:u},M)=>`<li class="card_item" data-id="${r}">
      <div class="discount-icon-container">
        <svg class="discount-icon" width="60" height="60">
          <use href="${n}#icon-discount"></use>
        </svg>
      </div>
      <div class="card-content">
        <img src="${i}" alt="${u}" class="card-img" width="105" height="105">
      </div>
      <div class="title-box">
        <h3 class="card-title">${a[M]}</h3>
        <p class="card-price">$${d}</p>
      </div>
      <button class="basket" data-id="${r}">
        <svg class="basket-icon" width="18" height="18">
          <use href="${n}#icon-cart"></use>
        </svg>
      </button>
    </li>`).join("")}async function fe(){const e=await le(),a=e.reduce((s,t)=>(t.name.length>10?s.push(t.name.slice(0,10)+"..."):s.push(t.name),s),[]);R.innerHTML=me(e,a),R.addEventListener("click",s=>{const t=s.target.closest(".card_item"),c=s.target.closest(".basket");if(t&&!c){const i=t.dataset.id;H(i).then(x)}}),document.querySelectorAll(".basket").forEach(s=>{s.addEventListener("click",be);const t=s.dataset.id;l(t)&&(s.setAttribute("disabled","true"),s.innerHTML=`
        <svg class="basket-icon-check" width="18" height="18">
          <use href="${n}#icon-check"></use>
        </svg>
      `,E(t),b(Number(f.outerText)+Number(1)))})}fe();function be(e){e.target.closest(".card_item").dataset.id}const U=document.querySelector(".product-card");function ye(){re().then(e=>{ve(e),document.querySelectorAll(".popular_basket").forEach(s=>{s.addEventListener("click",o);const t=s.dataset.id;l(t)&&(s.setAttribute("disabled","true"),s.innerHTML=`
            <svg class="svg-item-check" width="12" height="12">
              <use href="${n}#icon-check"></use>
            </svg>
          `)});function o(s){const t=s.currentTarget,c=t.dataset.id;l(c)?(O(c),t.removeAttribute(c),t.innerHTML=`
            <svg class="svg-item" width="12" height="12">
              <use href="${n}#icon-cart"></use>
            </svg>
          `):(E(c),t.setAttribute("disabled",!0),l(c)&&(t.style.transform="rotate(270deg)",setTimeout(()=>{t.innerHTML=`
              <svg class="svg-item-check" width="12" height="12">
                <use href="${n}#icon-check"></use>
              </svg>
              `,t.style.transform="rotate(360deg)"},300),t.setAttribute("disabled","true")),b(Number(f.outerText)+Number(1)))}}).catch(e=>{throw new Error(e)})}function ve(e){const a=document.createElement("div");a.classList.add("product-list-container");const o=e.map(({category:s,img:t,name:c,popularity:i,size:d,_id:r})=>`<li class="product-content" data-id=${r}>
        <div class="background-img">
            <img src="${t}" alt="${c}" class="product-image" />
        </div>
        <div class="product-txt-bar">
            <h3 class="product-title">${c}</h3>
            <p class="product-category">
                <span class="span-category">Category:</span>${String(s).replace("_"," ")}
            </p>
            <div class="product-txt-two">
                <p class="product-size">
                    <span class="span-category">Size:</span>${d}
                </p>
                <p class="product-popularity">
                    <span class="span-category">Popularity:</span>${i}
                </p>
            </div>
        </div>
        <button class="popular_basket" data-id="${r}" data-modal-close>
            <svg class="svg-item" width="12" height="12">
                <use href="${n}#icon-cart"></use>
            </svg>
        </button>
    </li>`).join("");a.innerHTML=o,U.appendChild(a)}function we(e){const a=e.target.closest(".product-content"),o=e.target.closest(".popular_basket");if(a&&!o){const s=a.dataset.id;H(s).then(x)}}U.addEventListener("click",we);ye();document.querySelector(".pagination");let $=0;const C=window.innerWidth;function Se(e){return e<=767?2:4}C<=767?$=6:C<=1239?$=8:$=9;let T=1;function ke(e){T=1;const a={totalItems:e.totalPages*10,visiblePages:Se(C),template:{page:'<a href="#" id="page-btn" class="tui-page-btn">{{page}}</a>',currentPage:'<strong id="is-selected" class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" id="arrow-btn" class="tui-page-btn tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span id="arrow-btn" class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" id="page-btn" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}"><span class="tui-ico-ellip">...</span></a>'}};new V("pagination",a).on("afterMove",function(s){T=s.page,D(T,$).then(t=>{K(t.results)}).catch(t=>{throw new Error(t)})})}D(T,$).then(e=>{ke(e)}).catch(e=>{throw new Error(e)});export{ue as g,b as h,Le as o,O as r,n as s};
//# sourceMappingURL=pagination-ec1abefd.js.map
