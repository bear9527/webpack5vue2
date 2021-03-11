/*
鉴权指令
*/

import Vue from 'vue';
import { rolesInclude } from '@/assets/js/include';
const permission = Vue.directive('permission', {
    inserted: function (el, param) {
        console.log(el, rolesInclude(param.value));
        let isRole = rolesInclude(param.value)
        if (!isRole) {
            // el.remove();
            el.parentNode && el.parentNode.removeChild(el);
        }
    }
});



export {
    permission
}