function ___$insertStyle(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}}function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var base64=require("base-64"),reactQuery=require("react-query"),React=require("react"),React__default=_interopDefault(React),Axios=_interopDefault(require("axios")),camelCaseKeys=_interopDefault(require("camelcase-keys")),snakeCaseKeys=_interopDefault(require("snakecase-keys"));require("ethers");var client$1=require("@apollo/client"),fetch=_interopDefault(require("cross-fetch")),__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function __awaiter(i,a,s,u){return new(s=s||Promise)(function(e,t){function n(e){try{o(u.next(e))}catch(e){t(e)}}function r(e){try{o(u.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(n,r)}o((u=u.apply(i,a||[])).next())})}function __generator(n,r){var o,i,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,i=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],i=0}finally{o=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function __makeTemplateObject(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function logError(e,t){"production"===process.env.NODE_ENV&&console.log(e,t)}function useApi(e){var t=this,n=e.key,r=e.fetchMethod,o=e.options,i=reactQuery.useQuery(n,function(){return __awaiter(t,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,r()];case 1:return t=e.sent().data,s&&logError(s,{customMessage:"An error occurred when fetching "+n}),[2,t]}})})},o),a=i.isLoading,s=i.error,u=i.data,c=i.refetch;return{isLoading:a,error:s,data:u,refetch:c}}function QueryClientComponent(e){var t=e.children,n=new reactQuery.QueryClient;return React__default.createElement(reactQuery.QueryClientProvider,{client:n},t)}var RIBON_API=process.env.REACT_APP_RIBON_API||"http://ribon-core-api-dev.us-east-1.elasticbeanstalk.com/",baseURL=RIBON_API,API_SCOPE="/api/v1",api=Axios.create({baseURL:RIBON_API,headers:{"Content-Type":"application/json"},validateStatus:function(e){return 200<=e&&e<300}});function apiGet(e,t){return t?api.get(API_SCOPE+"/"+e,t):api.get(API_SCOPE+"/"+e)}function apiPost(e,t,n){return n?api.post(API_SCOPE+"/"+e,t,n):api.post(API_SCOPE+"/"+e,t)}function apiPut(e,t,n){return n?api.put(API_SCOPE+"/"+e,t,n):api.put(API_SCOPE+"/"+e,t)}function apiDelete(e,t){return t?api.delete(API_SCOPE+"/"+e,t):api.delete(API_SCOPE+"/"+e)}function emptyRequest(){return{}}api.interceptors.request.use(function(e){return null!=e&&e.data?__assign(__assign({},e),{data:snakeCaseKeys(null==e?void 0:e.data,{deep:!0})}):e}),api.interceptors.response.use(function(e){return __assign(__assign({},e),{data:camelCaseKeys(e.data,{deep:!0})})},function(e){return Promise.reject(e)});var usersApi={postCreateUser:function(e){return apiPost("users",{email:e})},postSearchUser:function(e){return apiPost("users/search",{email:e})},postCanDonate:function(e){return apiPost("users/can_donate",{integrationId:e})}};function useCanDonate(e){var t=useApi({key:"canDonate",fetchMethod:function(){return e?usersApi.postCanDonate(e):emptyRequest()},options:{enabled:!!e}}),n=t.data,r=t.isLoading,o=t.refetch;return{canDonate:void 0===n||n.canDonate,isLoading:r,refetch:o}}var givingFeesApi={postCardFees:function(e,t){return apiPost("givings/card_fees",{value:e,currency:t})}};function useCardGivingFees(e,t){var n=useApi({key:"cardGivingFees",fetchMethod:function(){return givingFeesApi.postCardFees(e,t)},options:{enabled:0<e}});return{cardGivingFees:n.data,isLoading:n.isLoading,refetch:n.refetch}}var causesApi={getCauses:function(){return apiGet("causes/")},getCause:function(e){return apiGet("causes/"+e)}};function useCauses(){var e=useApi({key:"causes",fetchMethod:function(){return causesApi.getCauses()}});return{causes:e.data||[],getCause:function(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,causesApi.getCause(t)];case 1:return[2,e.sent().data]}})})},isLoading:e.isLoading,refetch:e.refetch}}function useContractRequest(e){var t=this,n=e.key,r=e.fetchMethod,o=e.options,i=reactQuery.useQuery(n,function(){return __awaiter(t,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,r()];case 1:return t=e.sent(),s&&logError(s,{customMessage:"An error occurred when fetching "+n}),[2,t]}})})},o),a=i.isLoading,s=i.error,u=i.data,c=i.refetch;return{isLoading:a,error:s,data:u,refetch:c}}function formatFromDecimals(e,t){return void 0===t&&(t=6),Number(e)/Math.pow(10,t)}function useContractBalance(n,e){var t=this,r=React.useState(0),o=r[0],i=r[1],a=useContractRequest({key:"contractBalance"+e,fetchMethod:function(){return null==n?void 0:n.balanceOf(e)}}),s=a.data,u=a.isLoading,c=a.refetch,p=React.useCallback(function(){return __awaiter(t,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return s?[4,null==n?void 0:n.decimals()]:[3,2];case 1:t=e.sent(),i(formatFromDecimals(s,t)),e.label=2;case 2:return[2]}})})},[s]);return React.useEffect(function(){p()},[p]),{contractBalance:o,isLoading:u,refetch:c}}var cryptoTransactionApi={postTransaction:function(e,t,n,r){return apiPost("payments/cryptocurrency",{transactionHash:e,amount:t,walletAddress:n,integrationId:r})},putTransactionStatus:function(e,t){return apiPut("payments/cryptocurrency",{transactionHash:e,status:t})}};function useCryptoTransaction(){return{createTransaction:function(t,n,r,o){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,cryptoTransactionApi.postTransaction(t,n,r,o)];case 1:return[2,e.sent().data]}})})},updateTransactionStatus:function(t,n){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,cryptoTransactionApi.putTransactionStatus(t,n)];case 1:return[2,e.sent().data]}})})}}}var donationsApi={postDonation:function(e,t,n){return apiPost("donations",{integrationId:e,nonProfitId:t,email:n})},postVoucherDonation:function(e,t,n,r){return apiPost("vouchers/donations",{integrationId:e,nonProfitId:t,email:n,externalId:r})}},impactApi={getImpact:function(e){return apiGet("users/"+e+"/impacts")},getDonationsCount:function(e){return apiGet("users/"+e+"/donations_count")}};function useDonations(t){var e=useApi({key:"donationsCount",fetchMethod:function(){var e=t||null;return impactApi.getDonationsCount(e)},options:{enabled:!!t}}).data;return{donate:function(t,n,r,o){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return o?[4,donationsApi.postVoucherDonation(t,n,r,o)]:[3,2];case 1:return e.sent(),[2];case 2:return[4,donationsApi.postDonation(t,n,r)];case 3:return e.sent(),[2]}})})},donationsCount:null==e?void 0:e.donationsCount}}function useImpact(t){return{userImpact:useApi({key:"impacts",fetchMethod:function(){var e=t||null;return impactApi.getImpact(e)},options:{enabled:!!t}}).data}}var integrationsApi={getIntegration:function(e){return apiGet("integrations/"+e)}};function useIntegration(e){if(!e)return localStorage.setItem("integrationName","undefined"),{integration:{},isLoading:!0,refetch:function(){}};var t=useApi({key:"integration",fetchMethod:function(){return integrationsApi.getIntegration(e)},options:{enabled:!!e}}),n=t.data,r=t.isLoading,o=t.refetch,i=t.error;return i&&localStorage.setItem("integrationName","error"),n&&localStorage.setItem("integrationName",n.name),{integration:n,isLoading:r,refetch:o,error:i}}var nonProfitImpactApi={postImpactByNonProfit:function(e,t,n){return apiPost("givings/impact_by_non_profit",{nonProfitId:e,value:t,currency:n})}};function useNonProfitImpact(e,t,n){var r=useApi({key:"nonProfitImpact"+e,fetchMethod:function(){return e&&t&&n?nonProfitImpactApi.postImpactByNonProfit(e,t,n):emptyRequest()},options:{enabled:!!e&&!!t&&!!n}});return{nonProfitImpact:r.data,isLoading:r.isLoading,refetch:r.refetch}}var nonProfitsApi={getNonProfits:function(){return apiGet("non_profits")}};function useNonProfits(){var e=useApi({key:"nonProfits",fetchMethod:nonProfitsApi.getNonProfits});return{nonProfits:e.data,isLoading:e.isLoading,refetch:e.refetch}}var offersApi={getOffers:function(e,t){return apiGet("givings/offers?currency="+e.toLowerCase()+"&subscription="+t)},getOffer:function(e){return apiGet("givings/offers/"+e)}};function useOffers(e,t){void 0===t&&(t=!1);var n=useApi({key:"offers",fetchMethod:function(){return offersApi.getOffers(e,t)}});return{offers:n.data||[],getOffer:function(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,offersApi.getOffer(t)];case 1:return[2,e.sent().data]}})})},isLoading:n.isLoading,refetch:n.refetch}}var promoterCardGivingsApi={getPromoterCardGivings:function(e,t){return apiGet("givings/user_givings?email="+e+"&currency="+t)}};function usePromoterCardGivings(e,t){var n=useApi({key:"promoterCardGivings",fetchMethod:function(){return promoterCardGivingsApi.getPromoterCardGivings(e,t)},options:{enabled:!!e}});return{promoterCardGivings:n.data,isLoading:n.isLoading,refetch:n.refetch}}var sourcesApi={postCreateSource:function(e,t){return apiPost("sources",{userId:e,integrationId:t})}};function useSources(){return{createSource:function(t,n){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,sourcesApi.postCreateSource(t,n)];case 1:return[2,e.sent().data]}})})}}}var storiesApi={getNonProfitStories:function(e){return apiGet("non_profits/"+e+"/stories")}};function useStories(){return{fetchNonProfitStories:function(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,storiesApi.getNonProfitStories(t)];case 1:return[2,e.sent().data]}})})}}}function useUsers(){function r(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,usersApi.postSearchUser(t)];case 1:return[2,e.sent().data]}})})}function o(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,usersApi.postCreateUser(t)];case 1:return[2,e.sent().data]}})})}return{createUser:o,findUser:r,findOrCreateUser:function(n){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,4]),[4,r(n)];case 1:return t=e.sent(),[3,4];case 2:return e.sent(),[4,o(n)];case 3:return t=e.sent(),[3,4];case 4:return[2,t]}})})}}}function getLocalStorageItem(e){return localStorage.getItem(e)}var templateObject_1,templateObject_2,templateObject_1$1,templateObject_2$1,SUBGRAPH_URL="SUBGRAPH_URL",RIBON_COMPANY_ID=process.env.REACT_APP_RIBON_COMPANY_ID||"1",RIBON_API$1=process.env.REACT_APP_RIBON_API||"http://ribon-core-api-dev.us-east-1.elasticbeanstalk.com/",THE_GRAPH_API=getLocalStorageItem(SUBGRAPH_URL)||"https://api.thegraph.com/subgraphs/name/ribondao/ribonsubgraph",APIURL=THE_GRAPH_API,client=new client$1.ApolloClient({uri:APIURL,cache:new client$1.InMemoryCache,link:new client$1.HttpLink({uri:APIURL,fetch:fetch})}),ALL_POOLS_QUERY_NAME="INTEGRATION_ID_QUERY",POOL_ID_QUERY_NAME="POOL_ID_QUERY",QUERY_ALL_POOLS=client$1.gql(templateObject_1=templateObject_1||__makeTemplateObject(["\n  query "," {\n    pools {\n      id\n      balance\n    }\n  }\n"],["\n  query "," {\n    pools {\n      id\n      balance\n    }\n  }\n"]),ALL_POOLS_QUERY_NAME),QUERY_POOL_ID=client$1.gql(templateObject_2=templateObject_2||__makeTemplateObject(["\n  query ","($pool: Bytes!) {\n    pools(\n      where: { id: $pool }\n    ) {\n      id\n      balance\n    }\n  }\n"],["\n  query ","($pool: Bytes!) {\n    pools(\n      where: { id: $pool }\n    ) {\n      id\n      balance\n    }\n  }\n"]),POOL_ID_QUERY_NAME),poolsApi={fetchAllPools:function(){return client.query({query:QUERY_ALL_POOLS,fetchPolicy:"no-cache"})},fetchPool:function(e){return client.query({query:QUERY_POOL_ID,variables:{pool:e},fetchPolicy:"no-cache"})}},PROMOTER_DONATIONS_ID_QUERY_NAME="PROMOTER_DONATIONS_ID_QUERY",ALL_PROMOTERS_DONATIONS_QUERY_NAME="ALL_PROMOTERS_DONATIONS_QUERY",QUERY_PROMOTER_DONATION_ID=client$1.gql(templateObject_1$1=templateObject_1$1||__makeTemplateObject(["\n  query ","($promoter: Bytes!, $first: Int) {\n     promoterDonations(where: {promoter: $promoter}\n      orderBy: timestamp\n      orderDirection: desc\n      first: $first\n    ) {\n      id\n      amountDonated\n      timestamp\n    }\n  }\n"],["\n  query ","($promoter: Bytes!, $first: Int) {\n     promoterDonations(where: {promoter: $promoter}\n      orderBy: timestamp\n      orderDirection: desc\n      first: $first\n    ) {\n      id\n      amountDonated\n      timestamp\n    }\n  }\n"]),PROMOTER_DONATIONS_ID_QUERY_NAME),QUERY_ALL_PROMOTERS_DONATIONS=client$1.gql(templateObject_2$1=templateObject_2$1||__makeTemplateObject(["\n  query ","($first: Int) {\n    promoterDonations(\n      orderBy: timestamp\n      orderDirection: desc\n      first: $first\n    ) {\n      id\n      amountDonated\n      timestamp\n    }\n  }\n"],["\n  query ","($first: Int) {\n    promoterDonations(\n      orderBy: timestamp\n      orderDirection: desc\n      first: $first\n    ) {\n      id\n      amountDonated\n      timestamp\n    }\n  }\n"]),ALL_PROMOTERS_DONATIONS_QUERY_NAME),promoterDonationsApi={fetchPromoterDonations:function(e,t){return client.query({query:QUERY_PROMOTER_DONATION_ID,variables:{promoter:e,first:t},fetchPolicy:"no-cache"})},fetchAllPromotersDonations:function(e){return client.query({query:QUERY_ALL_PROMOTERS_DONATIONS,variables:{first:e},fetchPolicy:"no-cache"})}},creditCardPaymentApi={postCreditCardPayment:function(e){return apiPost("payments/credit_cards",e)}},donationImpactsApi={getDonationImpact:function(){return apiGet("users/impact")}};global.btoa||(global.btoa=base64.encode),global.atob||(global.atob=base64.decode),exports.API_SCOPE=API_SCOPE,exports.QueryClientComponent=QueryClientComponent,exports.api=api,exports.apiDelete=apiDelete,exports.apiGet=apiGet,exports.apiPost=apiPost,exports.apiPut=apiPut,exports.causesApi=causesApi,exports.client=client,exports.creditCardPaymentApi=creditCardPaymentApi,exports.cryptoTransactionApi=cryptoTransactionApi,exports.donationImpactsApi=donationImpactsApi,exports.donationsApi=donationsApi,exports.givingFeesApi=givingFeesApi,exports.impactApi=impactApi,exports.integrationsApi=integrationsApi,exports.nonProfitImpactApi=nonProfitImpactApi,exports.offersApi=offersApi,exports.poolsApi=poolsApi,exports.promoterCardGivingsApi=promoterCardGivingsApi,exports.promoterDonationsApi=promoterDonationsApi,exports.sourcesApi=sourcesApi,exports.storiesApi=storiesApi,exports.useApi=useApi,exports.useCanDonate=useCanDonate,exports.useCardGivingFees=useCardGivingFees,exports.useCauses=useCauses,exports.useContractBalance=useContractBalance,exports.useCryptoTransaction=useCryptoTransaction,exports.useDonations=useDonations,exports.useImpact=useImpact,exports.useIntegration=useIntegration,exports.useNonProfitImpact=useNonProfitImpact,exports.useNonProfits=useNonProfits,exports.useOffers=useOffers,exports.usePromoterCardGivings=usePromoterCardGivings,exports.useSources=useSources,exports.useStories=useStories,exports.useUsers=useUsers,exports.usersApi=usersApi;
//# sourceMappingURL=index.js.map