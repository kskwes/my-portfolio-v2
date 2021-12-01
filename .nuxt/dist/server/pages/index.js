exports.ids = [2];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=3c678186&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<header>","</header>",[_vm._ssrNode("<nav role=\"navigation\" aria-label=\"main navigation\" class=\"navbar is-fixed-top header-nav\">","</nav>",[_vm._ssrNode("<div class=\"navbar-brand container\">","</div>",[_vm._ssrNode("<div class=\"navbar-start is-flex-touch\">","</div>",[_c('nuxt-link',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#anchor1'),expression:"'#anchor1'"}],staticClass:"navbar-item is-size-6 has-text-weight-bold header-nav-link",attrs:{"to":""}},[_vm._v("\n                        Profile\n                    ")]),_vm._ssrNode(" "),_c('nuxt-link',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#anchor2'),expression:"'#anchor2'"}],staticClass:"navbar-item is-size-6 has-text-weight-bold header-nav-link",attrs:{"to":""}},[_vm._v("\n                        Products\n                    ")]),_vm._ssrNode(" "+(_vm._ssrList((_vm.menus),function(menu){return ("<a"+(_vm._ssrAttr("href",menu.link))+" target=\"_blank\" class=\"navbar-item is-size-6 has-text-weight-bold header-nav-link\">"+_vm._ssrEscape("\n                        "+_vm._s(menu.name)+"\n                    ")+"</a>")})))],2)])])]),_vm._ssrNode(" <div class=\"main-content pt-6 mb-6\"><section id=\"anchor1\" class=\"container main-content-section mb-6\"><h1 class=\"has-text-weight-bold has-text-centered is-size-5 mb-2\">\n                Proflie\n            </h1> <div class=\"image is-96x96 mt-0 mb-4 mr-auto ml-auto\"><img src=\"/my-portfolio-v2/images/icon_profile.png\" alt=\"profile\" class=\"is-rounded\"></div> <p class=\"has-text-centered mb-4\">"+(_vm._s(_vm.profile.text))+"</p> <div class=\"is-flex is-justify-content-center\">"+(_vm._ssrList((_vm.menus),function(menu){return ("<a"+(_vm._ssrAttr("href",menu.link))+" target=\"_blank\" class=\"mr-2 ml-2 image is-32x32\"><img"+(_vm._ssrAttr("src",_vm.image_src + menu.icon))+(_vm._ssrAttr("alt",menu.name))+"></a>")}))+"</div></section> <section id=\"anchor2\"><h1 class=\"has-text-weight-bold has-text-centered is-size-5 mb-4\">\n                Products\n            </h1> <div class=\"is-flex-desktop is-flex-wrap-wrap is-justify-content-space-between\">"+(_vm._ssrList((_vm.contents),function(content){return ("<div class=\"link-hover main-content-box card mb-5\"><article class=\"card-content\"><p class=\"title is-4 main-content-box-title\">"+_vm._ssrEscape("\n                            "+_vm._s(content.title)+"\n                        ")+"</p> <div class=\"content\"><p class=\"main-content-box-body\">"+_vm._ssrEscape(_vm._s(content.description))+"</p> <a"+(_vm._ssrAttr("href",content.link))+" target=\"_blank\" class=\"mr-4\">Link</a> <a"+(_vm._ssrAttr("href",content.github))+" target=\"_blank\">Github</a></div> <figure class=\"image\"><img"+(_vm._ssrAttr("src",_vm.image_src + content.thumb))+"></figure></article></div>")}))+"</div></section></div> <footer class=\"pt-4 pb-6\"><div class=\"content has-text-centered\"><p class=\"is-size-7 has-text-weight-bold\">World Wide Well</p></div></footer>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=3c678186&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      image_src: '/my-portfolio-v2/images/',
      profile: {
        name: 'Kosuke',
        text: 'Hello. My name is Kosuke.<br>I am a Web Engineer.',
        birthday: '1992-08-22'
      },
      menus: [{
        id: 1,
        name: 'Github',
        link: 'https://github.com/kskwes',
        icon: 'icon_github.png'
      }, {
        id: 2,
        name: 'Twitter',
        link: 'https://twitter.com/coward_92',
        icon: 'icon_twitter.png'
      }],
      contents: [{
        id: 1,
        title: '三択クイズ（Vue.js）',
        description: '三択クイズ（Vue.js）',
        link: 'https://kskwes.github.io/vuecli-quiz/',
        github: 'https://github.com/kskwes/vuecli-quiz',
        thumb: 'thumb_quiz.png'
      }, {
        id: 2,
        title: 'コーポレートサイト',
        description: 'コーポレートサイト_パターン1（Laravel）',
        link: 'http://corporate-site-2021.herokuapp.com/corporate',
        github: 'https://github.com/kskwes/corporate-site',
        thumb: 'thumb_corporate_laravel.png'
      }, {
        id: 3,
        title: 'コーポレートサイト',
        description: 'コーポレートサイト_パターン2（HTML）',
        link: 'https://kskwes.github.io/corporate-site_html/',
        github: 'https://github.com/kskwes/corporate-site_html',
        thumb: 'thumb_corporate_html.png'
      }, {
        id: 4,
        title: '時効掲示板（PHP）',
        description: '時効掲示板（PHP）',
        link: 'http://outputground.php.xdomain.jp/jiko/',
        github: 'https://github.com/kskwes/jiko',
        thumb: 'thumb_jiko.png'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c812af6c"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map