parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"n8cQ":[function(require,module,exports) {
!function(){var e={openModalBtn:document.querySelector("[data-modal-form-open]"),openModalMenuBtn:document.querySelector("[menu-data-modal-form-open]"),closeModalBtn:document.querySelector("[data-modal-form-close]"),modal:document.querySelector("[data-modal-form]"),bodyOverflow:document.querySelector("[overflow-body]")};function o(){e.modal.classList.toggle("is-hidden"),e.bodyOverflow.classList.toggle("overflow--blocked")}e.openModalBtn.addEventListener("click",o),e.openModalMenuBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}();
},{}]},{},["n8cQ"], null)
//# sourceMappingURL=/best-icecream/modal-form.5e9a7cd6.js.map