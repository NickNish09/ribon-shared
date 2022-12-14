function ___$insertStyle(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}}function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var index=require("./index-828e0330.js"),reactQuery=require("react-query"),React=_interopDefault(require("react"));require("axios"),require("camelcase-keys"),require("snakecase-keys");var index$1=require("./index-a850f86e.js");function logError(e,t){"production"===process.env.NODE_ENV&&console.log(e,t)}function useApi(e){var t=this,n=e.key,r=e.fetchMethod,i=e.options,o=reactQuery.useQuery(n,function(){return index.__awaiter(t,void 0,void 0,function(){var t;return index.__generator(this,function(e){switch(e.label){case 0:return[4,r()];case 1:return t=e.sent().data,a&&logError(a,{customMessage:"An error occurred when fetching "+n}),[2,t]}})})},i),s=o.isLoading,a=o.error,u=o.data,c=o.refetch;return{isLoading:s,error:a,data:u,refetch:c}}function QueryClientComponent(e){var t=e.children,n=new reactQuery.QueryClient;return React.createElement(reactQuery.QueryClientProvider,{client:n},t)}function useCanDonate(e){var t=useApi({key:"canDonate",fetchMethod:function(){return e?index.usersApi.postCanDonate(e):index.emptyRequest()},options:{enabled:!!e}}),n=t.data,r=t.isLoading,i=t.refetch;return{canDonate:void 0===n||n.canDonate,isLoading:r,refetch:i}}function useCardGivingFees(e,t){var n=useApi({key:"cardGivingFees",fetchMethod:function(){return index.givingFeesApi.postCardFees(e,t)},options:{enabled:0<e}});return{cardGivingFees:n.data,isLoading:n.isLoading,refetch:n.refetch}}function useCauses(){var e=useApi({key:"causes",fetchMethod:function(){return index.causesApi.getCauses()}});return{causes:e.data||[],getCause:function(t){return index.__awaiter(this,void 0,void 0,function(){return index.__generator(this,function(e){switch(e.label){case 0:return[4,index.causesApi.getCause(t)];case 1:return[2,e.sent().data]}})})},isLoading:e.isLoading,refetch:e.refetch}}function useCryptoTransaction(){return{createTransaction:function(t,n,r,i){return index.__awaiter(this,void 0,void 0,function(){return index.__generator(this,function(e){switch(e.label){case 0:return[4,index.cryptoTransactionApi.postTransaction(t,n,r,i)];case 1:return[2,e.sent().data]}})})},updateTransactionStatus:function(t,n){return index.__awaiter(this,void 0,void 0,function(){return index.__generator(this,function(e){switch(e.label){case 0:return[4,index.cryptoTransactionApi.putTransactionStatus(t,n)];case 1:return[2,e.sent().data]}})})}}}function useDonations(t){var e=useApi({key:"donationsCount",fetchMethod:function(){var e=t||null;return index.impactApi.getDonationsCount(e)},options:{enabled:!!t}}).data;return{donate:function(t,n,r,i){return index.__awaiter(this,void 0,void 0,function(){return index.__generator(this,function(e){switch(e.label){case 0:return i?[4,index.donationsApi.postVoucherDonation(t,n,r,i)]:[3,2];case 1:return e.sent(),[2];case 2:return[4,index.donationsApi.postDonation(t,n,r)];case 3:return e.sent(),[2]}})})},donationsCount:null==e?void 0:e.donationsCount}}function useImpact(t){return{userImpact:useApi({key:"impacts",fetchMethod:function(){var e=t||null;return index.impactApi.getImpact(e)},options:{enabled:!!t}}).data}}function useIntegration(e){if(!e)return index$1.setLocalStorageItem("integrationName","undefined"),{integration:{},isLoading:!0,refetch:function(){}};var t=useApi({key:"integration",fetchMethod:function(){return index.integrationsApi.getIntegration(e)},options:{enabled:!!e}}),n=t.data,r=t.isLoading,i=t.refetch,o=t.error;return o&&index$1.setLocalStorageItem("integrationName","error"),n&&index$1.setLocalStorageItem("integrationName",n.name),{integration:n,isLoading:r,refetch:i,error:o}}function useIntegrationImpact(e,t,n){if(!e)return{integrationImpact:{},isLoading:!0,refetch:function(){}};var r=useApi({key:"integrationImpact",fetchMethod:function(){return index.integrationsApi.getIntegrationImpact(e,t,n)},options:{enabled:!!e}});return{integrationImpact:r.data,isLoading:r.isLoading,refetch:r.refetch,error:r.error}}function useNonProfitImpact(e,t,n){var r=useApi({key:"nonProfitImpact"+e,fetchMethod:function(){return e&&t&&n?index.nonProfitImpactApi.postImpactByNonProfit(e,t,n):index.emptyRequest()},options:{enabled:!!e&&!!t&&!!n}});return{nonProfitImpact:r.data,isLoading:r.isLoading,refetch:r.refetch}}var nonProfitsApi={getNonProfits:function(){return index.apiGet("non_profits")}};function useNonProfits(){var e=useApi({key:"nonProfits",fetchMethod:nonProfitsApi.getNonProfits});return{nonProfits:e.data,isLoading:e.isLoading,refetch:e.refetch}}function useOffers(e,t){void 0===t&&(t=!1);var n=useApi({key:"offers",fetchMethod:function(){return index.offersApi.getOffers(e,t)}});return{offers:n.data||[],getOffer:function(t){return index.__awaiter(this,void 0,void 0,function(){return index.__generator(this,function(e){switch(e.label){case 0:return[4,index.offersApi.getOffer(t)];case 1:return[2,e.sent().data]}})})},isLoading:n.isLoading,refetch:n.refetch}}function usePromoterCardGivings(e,t){var n=useApi({key:"promoterCardGivings",fetchMethod:function(){return index.promoterCardGivingsApi.getPromoterCardGivings(e,t)},options:{enabled:!!e}});return{promoterCardGivings:n.data,isLoading:n.isLoading,refetch:n.refetch}}function useSources(){return{createSource:function(t,n){return index.__awaiter(this,void 0,void 0,function(){return index.__generator(this,function(e){switch(e.label){case 0:return[4,index.sourcesApi.postCreateSource(t,n)];case 1:return[2,e.sent().data]}})})}}}function useStories(){return{fetchNonProfitStories:function(t){return index.__awaiter(this,void 0,void 0,function(){return index.__generator(this,function(e){switch(e.label){case 0:return[4,index.storiesApi.getNonProfitStories(t)];case 1:return[2,e.sent().data]}})})}}}function useUsers(){function r(t){return index.__awaiter(this,void 0,void 0,function(){return index.__generator(this,function(e){switch(e.label){case 0:return[4,index.usersApi.postSearchUser(t)];case 1:return[2,e.sent().data]}})})}function i(t){return index.__awaiter(this,void 0,void 0,function(){return index.__generator(this,function(e){switch(e.label){case 0:return[4,index.usersApi.postCreateUser(t)];case 1:return[2,e.sent().data]}})})}return{createUser:i,findUser:r,findOrCreateUser:function(n){return index.__awaiter(this,void 0,void 0,function(){var t;return index.__generator(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,4]),[4,r(n)];case 1:return t=e.sent(),[3,4];case 2:return e.sent(),[4,i(n)];case 3:return t=e.sent(),[3,4];case 4:return[2,t]}})})}}}exports.QueryClientComponent=QueryClientComponent,exports.useApi=useApi,exports.useCanDonate=useCanDonate,exports.useCardGivingFees=useCardGivingFees,exports.useCauses=useCauses,exports.useCryptoTransaction=useCryptoTransaction,exports.useDonations=useDonations,exports.useImpact=useImpact,exports.useIntegration=useIntegration,exports.useIntegrationImpact=useIntegrationImpact,exports.useNonProfitImpact=useNonProfitImpact,exports.useNonProfits=useNonProfits,exports.useOffers=useOffers,exports.usePromoterCardGivings=usePromoterCardGivings,exports.useSources=useSources,exports.useStories=useStories,exports.useUsers=useUsers;
//# sourceMappingURL=hooks.js.map
