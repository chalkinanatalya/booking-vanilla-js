(()=>{"use strict";var t=function(t,o){if(t>=0&&t>=o&&o>=0)return Math.floor(Math.random()*(t-o+1))+o;throw new Error("Incorrect input")},o=function(t,o,r){if(t>=0&&t>=o&&o>=0)return parseFloat((Math.random()*(t-o)+o).toFixed(r));throw new Error("Incorrect input")},r=function(o){for(var r=[],a=0;a<o.length;a++){var e=o[t(o.length-1,0)];r.includes(e)||r.push(e)}return r},a=["12:00","13:00","14:00"],e=["wifi","dishwasher","parking","washer","elevator","conditioner"],n=["http://o0.github.io/assets/images/tokyo/hotel1.jpg","http://o0.github.io/assets/images/tokyo/hotel2.jpg","http://o0.github.io/assets/images/tokyo/hotel3.jpg"];!function(){for(var i=[],h=0;h<=10;h++)i.push({author:{avatar:"img/avatars/user".concat(t(10,1),".png")},offer:{title:"Уютная квартира у озера",address:"".concat(o(60,50,6),", ").concat(o(20,10,6)),price:Math.floor(100*Math.random()),type:"flat",rooms:Math.floor(10*Math.random()),guest:Math.floor(10*Math.random()),checkin:a[t(2,0)],checkout:a[t(2,0)],features:r(e),description:"Отличная техника, все удобства и красивый вид из окна",photos:r(n),location:{x:o(35.7,35.65,5),y:o(139.8,139.7,5)}}})}()})();