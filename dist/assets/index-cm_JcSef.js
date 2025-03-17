(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();class f{constructor(e){this.container=document.querySelector(e),this.minGap=1,this.render(),this.attachEventListeners(),this.updateTrack()}render(){this.container.innerHTML=`
            <div class="range-slider">
                <span>Выберите диапазон</span>
                <div class="range-container">
                    <input type="number" name="minValue" min="0" max="100" placeholder="от 0">
                    <input type="number" name="maxValue" min="0" max="100" placeholder="до 100">
                </div>
                        
                <div class="slider-container">
                    <input type="range" name="rangeMin" min="0" max="100" value="0" step="1">
                    <input type="range" name="rangeMax" min="0" max="100" value="100" step="1">
                    <div class="slider-track"></div>
                </div>
            <div/>
        `,this.minInput=this.container.querySelector('input[name="minValue"]'),this.maxInput=this.container.querySelector('input[name="maxValue"]'),this.rangeMin=this.container.querySelector('input[name="rangeMin"]'),this.rangeMax=this.container.querySelector('input[name="rangeMax"]'),this.sliderTrack=this.container.querySelector(".slider-track")}attachEventListeners(){this.rangeMin.addEventListener("input",e=>this.updateValues(e)),this.rangeMax.addEventListener("input",e=>this.updateValues(e)),this.minInput.addEventListener("input",e=>{this.rangeMin.value=this.minInput.value,this.updateValues(e)}),this.maxInput.addEventListener("input",e=>{this.rangeMax.value=this.maxInput.value,this.updateValues(e)})}updateValues(e){let t=parseInt(this.rangeMin.value),n=parseInt(this.rangeMax.value);n-t<this.minGap&&(e.target===this.rangeMin?this.rangeMin.value=n-this.minGap:this.rangeMax.value=t+this.minGap),this.minInput.value=this.rangeMin.value,this.maxInput.value=this.rangeMax.value,this.updateTrack()}updateTrack(){let e=this.rangeMin.value/this.rangeMax.max*100,t=this.rangeMax.value/this.rangeMax.max*100;this.sliderTrack.style.left=e+"%",this.sliderTrack.style.width=t-e+"%"}}class y{constructor(e){this.container=document.querySelector(e),this.checked=!1,this.render(),this.attachEventListeners()}render(){this.container.innerHTML=`
            <span>Выберите select</span>
            <div class="__select" data-state="">
                <div class="__select__title" data-default="Option 0">Option</div>
                <div class="__select__content">
                    <input id="singleSelect0" class="__select__input" type="radio" value="" name="instruments"/>
                    <label for="singleSelect0" class="__select__label">Option</label>
                    <input id="singleSelect1" class="__select__input" type="radio" value="Vite" name="instruments" />
                    <label for="singleSelect1" class="__select__label">Vite</label>
                    <input id="singleSelect2" class="__select__input" type="radio" value="Webpack" name="instruments" />
                    <label for="singleSelect2" class="__select__label">Webpack</label>
                    <input id="singleSelect3" class="__select__input" type="radio" value="Gulp" name="instruments"/>
                    <label for="singleSelect3" class="__select__label">Gulp</label>
                </div>
            </div>
        `,this.selectSingle=this.container.querySelector(".__select"),this.selectSingle_title=this.selectSingle.querySelector(".__select__title"),this.selectSingle_labels=this.selectSingle.querySelectorAll(".__select__label"),this.selectSingle_inputs=this.selectSingle.querySelectorAll(".__select__input")}attachEventListeners(){this.selectSingle_title.addEventListener("click",()=>{this.selectSingle.getAttribute("data-state")==="active"?this.selectSingle.setAttribute("data-state",""):this.selectSingle.setAttribute("data-state","active")});for(let e=0;e<this.selectSingle_labels.length;e++)this.selectSingle_labels[e].addEventListener("click",t=>{this.selectSingle_title.textContent=t.target.textContent,this.selectSingle.setAttribute("data-state",""),console.log("change"),this.updateRadio(this.selectSingle_inputs[e]),this.validate(this.checked.value)})}validate(e){return e&&typeof e=="string"?(this.selectSingle.classList.remove(this.selectSingle.classList[0]+"_error"),!0):(this.selectSingle.className.includes("_error")||this.errorHandler(),!1)}errorHandler(){this.selectSingle.classList.add(this.selectSingle.className+"_error")}updateRadio(e){this.checked&&this.checked.toggleAttribute("checked"),e.toggleAttribute("checked"),this.checked=e}}class b{constructor(e){this.container=document.querySelector(e),this.curRadio=!1,this.render(),this.attachEventListeners()}render(){this.container.innerHTML=`
            <span>Выберите radio</span>
            <div class="radio__wrapper">
                <div class="radio__block">
                    <input type="radio" id="radio1" name="language" value="JavaScript">
                    <label for="radio1">JavaScript</label>
                </div>
                <div class="radio__block">
                    <input type="radio" id="radio2" name="language" value="PHP">
                    <label for="radio2">PHP</label>
                </div>
                <div class="radio__block">
                    <input type="radio" id="radio3" name="language" value="C#">
                    <label for="radio3">C#</label>
                </div>
            </div>
        `,this.radios=this.container.querySelector(".radio__wrapper")}attachEventListeners(){this.radios.addEventListener("click",e=>{if(e.target.type==="radio"){let t=this.container.querySelector(`#${e.target.id}`);this.updateRadio(t),this.validate(t.value)}})}validate(e){return e&&typeof e=="string"?(this.radios.classList.remove(this.radios.classList[0]+"_error"),!0):(this.radios.className.includes("_error")||this.errorHandler(),!1)}errorHandler(){this.radios.classList.add(this.radios.className+"_error")}updateRadio(e){this.curRadio&&this.curRadio.toggleAttribute("checked"),e.toggleAttribute("checked"),this.curRadio=e}}class v{constructor({cid:e,name:t,type:n}){this.container=document.querySelector(e),this.InputType=n,this.InputName=t,this.render(),this.attachEventListeners()}render(){this.container.innerHTML=`
            <span>${S(this.InputName)}</span>
            <div class="input-text__wrapper">
                <input 
                    class=input-text__input" 
                    type="${this.InputType}" 
                    name="${this.InputName}" 
                    placeholder="Placeholder"
                />
            </div>
        `,this.inputWrapper=this.container.querySelector(".input-text__wrapper"),this.input=this.container.querySelector("input")}attachEventListeners(){this.input.addEventListener("blur",e=>{this.validate(e.target.value,this.InputName)})}validate(e,t){const n=/^[А-ЯЁ][а-яё]+(?:-[А-ЯЁ][а-яё]+)?\s[А-ЯЁ][а-яё]+(?:\s[А-ЯЁ][а-яё]+)?$/,s=/^(?:[1-9][0-9]?|1[0-4][0-9]|150)$/,a=e&&t==="user-name"&&n.test(e),l=e&&t==="user-age"&&s.test(e);return a||l?(this.inputWrapper.classList.remove(this.inputWrapper.classList[0]+"_error"),!0):(this.inputWrapper.className.includes("_error")||this.errorHandler(),!1)}errorHandler(){this.inputWrapper.classList.add(this.inputWrapper.className+"_error")}}const S=i=>{switch(i){case"user-name":return"Введите ФИО";case"user-age":return"Введите возраст в цифрах"}return"Введите текст"};class g{constructor({root:e,cid:t,isRequired:n,name:s}){this.root=document.querySelector(e),this.newElem=document.createElement("div"),this.newElem.classList.add(t),this.isRequired=n,this.name=s,this.render(),this.attachEventListeners()}render(){this.newElem.innerHTML+=`
            <div class="input-checkbox__wrapper">
                <input 
                    class="input-checkbox"
                    type="checkbox"
                    name="${this.name}"
                    value="${this.isRequired?"Обязательный":"Необязательный"}"
                    ${this.isRequired?"required":""} 
                />
                <span class="input-checkbox__label">${this.isRequired?"Обязательный":"Необязательный"} checkbox</label>
            </div>
        `,this.root.append(this.newElem)}attachEventListeners(){}}class L{constructor({root:e,cid:t}){this.root=document.querySelector(e),this.newElem=document.createElement("div"),this.newElem.classList.add(t),this.render(),this.attachEventListeners()}render(){this.newElem.innerHTML+=`
            <div class="input-button__wrapper">
                <button name="send-form" type="submit">Отправить</button>
            </div>
        `,this.root.append(this.newElem),this.button=this.root.querySelector(".input-button__wrapper")}attachEventListeners(){}}function x(i){document.querySelector('[name="form-1"]').addEventListener("submit",t=>{t.preventDefault();const n=q(t.target,i);n?E(i.popup,n):console.log("Ошибка")})}function E(i,e){const t=i.popup.querySelector(".popup__info");e.forEach((n,s)=>{t.innerHTML+=`
            <p>${s} : ${n}</p>
        `}),i.show()}function q(i,e){var d,h,_,m;let t=new FormData,n=!1;const s=((d=i.querySelector('input[name="minValue"]'))==null?void 0:d.value)??null,a=((h=i.querySelector('input[name="maxValue"]'))==null?void 0:h.value)??null;s&&a?(t.append("minRange",s),t.append("maxRange",a)):n=!0;const l=((_=i.querySelector(".__select input[checked]"))==null?void 0:_.value)??null;e.select.validate(l)?t.append("selectIntrument",l):n=!0;const c=((m=i.querySelector(".radio__wrapper input[checked]"))==null?void 0:m.value)??null;e.radio.validate(c)?t.append("selectLanguage",c):n=!0;const o=i.querySelectorAll(".input-text__wrapper input")??null;o&&Array.from(o).forEach(r=>{let u=!1;r.name==="user-name"?u=e.inputFullName.validate(r.value,r.name):r.name==="user-age"&&(u=e.inputAge.validate(r.value,r.name)),u?t.append(r.name,r.value):n=!0});const p=i.querySelectorAll(".input-checkbox__wrapper input")??null;return p&&Array.from(p).forEach(r=>{t.append(r.name,r.checked?r.value:null)}),n?null:t}class w{constructor({root:e,cid:t}){this.root=document.querySelector(e),this.popup=document.createElement("div"),this.popup.classList.add(t),this.isOpen=!1,this.render(),this.attachEventListeners()}render(){this.popup.innerHTML+=`
            <div class="popup__container">
                <div class="popup__content">
                    <div class="popup__close-wrapper">
                        <div class="popup__close-button"></div>
                    </div>
                    <div class="popup__header">Результат отправки:</div>
                    <div class="popup__info"></div>
                </div>
            </div>
        `,this.root.append(this.popup),this.content=this.popup.querySelector(".popup__info"),this.hide()}show(){this.isOpen=!0,this.popup.classList.remove("popup_hide")}hide(){this.isOpen=!1,this.popup.classList.add("popup_hide"),this.clean()}clean(){this.content.innerHTML=""}attachEventListeners(){this.popup.addEventListener("click",e=>{(e.target.className==="popup__close-button"||e.target.className==="popup__container")&&this.hide()})}}window.addEventListener("DOMContentLoaded",()=>{const i=".main__form",e="body",t=new w({root:e,cid:"popup"});new f(".main__form-range");const n=new y(".main__form-select"),s=new b(".main__form-radio"),a=new v({cid:".main__form-fullname",name:"user-name",type:"text"}),l=new v({cid:".main__form-age",name:"user-age",type:"number"});new g({root:i,cid:"main__form-checkbox",isRequired:!0,name:"required"}),new g({root:i,cid:"main__form-checkbox",isRequired:!1,name:"not required"}),new L({root:i,cid:"main__form-button"}),document.querySelector('span[name="footer__current-year"]').innerHTML=k(),x({select:n,radio:s,inputFullName:a,inputAge:l,popup:t}),document.addEventListener("keydown",function(c){c.key==="Escape"&&t.isOpen&&(t.hide(),console.log("close"))})});const k=()=>new Date().getFullYear();
