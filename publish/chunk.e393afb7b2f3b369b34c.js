(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{203:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(19),i=n(157);window._info=window._info||{};const s=[],l=[{endpoint:"list_payments"},{endpoint:"calculate_shipping"}];Object.keys(i.a).length&&l.push({endpoint:"apply_discount",reqOptions:{method:"post",data:{utm:i.a}}}),l.forEach((e=>{let{endpoint:t,reqOptions:n}=e;const i={};window._info[t]=i;const l=new Promise((e=>{Object(a.c)({url:`/${t}.json`,...n,axiosConfig:{timeout:1e4}}).then((e=>{let{data:n}=e;const{result:a}=n;Array.isArray(a)&&a.forEach((e=>{let{error:n,response:a}=e;if(!n){let e,n;switch(t){case"calculate_shipping":e="free_shipping_from_value",n=a[e],"number"==typeof n&&(void 0===i[e]||n<i[e])&&(i[e]=n);break;case"list_payments":e="installments_option",n=a[e],n&&(!i[e]||n.monthly_interest<i[e].monthly_interest||n.max_number>i[e].max_number)&&(i[e]=n),e="discount_option",n=a[e],n&&(!i[e]||n.value>i[e].value)&&a.payment_gateways.forEach((t=>{let{discount:a}=t;a&&"freight"!==a.apply_at&&a.value===n.value&&(i[e]={apply_at:a.apply_at,...n})})),e="loyalty_points_programs",n=a[e],n&&(i[e]={...i[e],...n});break;default:e="available_extra_discount",n=a[e],n&&(!i[e]||n.value>i[e].value)&&(i[e]=n)}}})),o.a.emit(`info:${t}`,i)})).catch((e=>{console.error(e),o.a.emit(`info:${t}`,e)})).finally(e)}));s.push(l)})),Promise.all(s).then((()=>o.a.emit("info",window._info)))}}]);