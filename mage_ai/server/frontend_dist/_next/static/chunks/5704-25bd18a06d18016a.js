"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5704],{75968:function(n,t,e){e.d(t,{J8:function(){return T},MS:function(){return E},Ts:function(){return p},YW:function(){return v},_o:function(){return R},eY:function(){return f},fA:function(){return A},h5:function(){return O},oI:function(){return b}});var r=e(82394),o=e(86422),u=e(82635),i=e(98781),c=e(90211),l=e(33766),a=e(60701);function d(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?d(Object(e),!0).forEach((function(t){(0,r.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var f=function(n,t){var e=(null===t||void 0===t?void 0:t.upstream_blocks)||[];return o.iZ.includes(null===n||void 0===n?void 0:n.type)||o.iZ.includes(null===t||void 0===t?void 0:t.type)||o.tf.DATA_LOADER===(null===t||void 0===t?void 0:t.type)&&o.tf.SENSOR!==n.type||e.push(n.uuid),e},A=function(n,t,e){var r=[];return(null===n||void 0===n?void 0:n.type)!==i.qL.STREAMING||o.iZ.includes(null===t||void 0===t?void 0:t.type)||o.iZ.includes(null===e||void 0===e?void 0:e.type)||(r=r.concat((null===t||void 0===t?void 0:t.downstream_blocks)||[])),r},p=function(n,t,e,r){for(var u,i=[],l=t.findIndex((function(t){return t.uuid===n.uuid}));!u&&l>=0;){var a;u=t[l-1],o.tf.SCRATCHPAD===(null===(a=u)||void 0===a?void 0:a.type)&&(u=null),l-=1}return u&&i.push(u.uuid),o.Ut.map((function(t){return{label:function(){return"Convert to ".concat((0,c.wX)(o.V4[t]))},onClick:function(){return r({converted_from_type:t,converted_from_uuid:n.uuid,type:t,upstream_blocks:i})},uuid:"".concat(e,"/convert_to/").concat(t)}}))},T=function(n,t,e,r,u,i){var c=n||{},d=c.configuration,f=c.downstream_blocks,A=c.has_callback,p=c.language,T=c.metadata,E=c.replicated_block,R=c.type,O=c.upstream_blocks,b=c.uuid,v=d||{},S=v.dynamic,C=v.reduce_output,h=o.tf.DBT===R,D=[];if(o.tf.SCRATCHPAD!==R&&![o.tf.CALLBACK,o.tf.EXTENSION,o.tf.MARKDOWN].includes(R)){D.push.apply(D,[{label:function(){return h?"Execute and run all upstream blocks":"Execute with all upstream blocks"},onClick:function(){return t({block:n,runUpstream:!0})},uuid:"execute_upstream"},{label:function(){return h?"Execute and run incomplete upstream blocks":"Execute with incomplete upstream blocks"},onClick:function(){return t({block:n,runIncompleteUpstream:!0})},uuid:"execute_incomplete_upstream"}]),h||o.tf.GLOBAL_DATA_PRODUCT===R||D.push({label:function(){return"Execute block and run tests"},onClick:function(){return t({block:n,runTests:!0})},uuid:"run_tests"});var _,N,k=i||{},L=k.addNewBlock,m=k.blocksMapping,y=k.fetchFileTree,g=k.fetchPipeline,P=k.savePipelineContent,I=k.updatePipeline,w=[];if(null===f||void 0===f||f.forEach((function(n){var t=null===m||void 0===m?void 0:m[n];t&&t.upstream_blocks.forEach((function(n){var t,e;null!==m&&void 0!==m&&null!==(t=m[n])&&void 0!==t&&null!==(e=t.configuration)&&void 0!==e&&e.dynamic&&w.push(m[n])}))})),h&&o.t6.SQL===p)null!==T&&void 0!==T&&null!==(_=T.dbt)&&void 0!==_&&null!==(N=_.block)&&void 0!==N&&N.snapshot||D.unshift.apply(D,[{label:function(){return"Run model"},onClick:function(){return t({block:n,runSettings:{run_model:!0}})},tooltip:function(){return"Execute command dbt run."},uuid:"run_model"},{label:function(){return"Test model"},onClick:function(){return t({block:n,runSettings:{test_model:!0}})},tooltip:function(){return"Execute command dbt test."},uuid:"test_model"},{label:function(){return"Build model"},onClick:function(){return t({block:n,runSettings:{build_model:!0}})},tooltip:function(){return"Execute command dbt build."},uuid:"build_model"},{label:function(){return"Add upstream models"},onClick:function(){I({pipeline:{add_upstream_for_block_uuid:null===n||void 0===n?void 0:n.uuid}})},tooltip:function(){return"Add upstream models for this model to the pipeline."},uuid:"add_upstream_models"}]);if(h||o.tf.GLOBAL_DATA_PRODUCT===R||!P||!S&&0!==w.length||D.push({label:function(){return S?"Disable block as dynamic":"Set block as dynamic"},onClick:function(){return P({block:s(s({},n),{},{configuration:s(s({},d),{},{dynamic:!S})})})},uuid:"dynamic"}),m)(null===O||void 0===O?void 0:O.find((function(n){var t,e;return null===m||void 0===m||null===(t=m[n])||void 0===t||null===(e=t.configuration)||void 0===e?void 0:e.dynamic})))&&D.push({label:function(){return C?"Don\u2019t reduce output":"Reduce output"},onClick:function(){return P({block:s(s({},n),{},{configuration:s(s({},d),{},{reduce_output:!C})})})},uuid:"reduce_output"});D.push({label:function(){return A?"Remove callback":"Add callback"},onClick:function(){if(A)return P({block:s(s({},n),{},{has_callback:!A})}).then((function(){y(),g()}));(0,l.u7)({sideview:a.cH.CALLBACKS})},uuid:"has_callback"}),h||D.push({disabled:!!E,label:function(){return"Replicate block"},onClick:function(){return L({replicated_block:b})},uuid:"Replicate block"})}return D.push({label:function(){return"Delete block"},onClick:function(){e(n),r(!1)},uuid:"delete_block"}),u?[D.pop()]:D};function E(n){var t=n.tags,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[],u=e.conditionFailed;return null===t||void 0===t||t.forEach((function(n){o.L8.DBT_SNAPSHOT===n?r.push({description:"This is a dbt snapshot file.",title:(0,c.vg)(o.L8.DBT_SNAPSHOT)}):o.L8.DYNAMIC===n?r.push({description:"This block will create N blocks for each of its downstream blocks.",title:(0,c.vg)(o.L8.DYNAMIC)}):o.L8.DYNAMIC_CHILD===n?r.push({description:"This block is dynamically created by its upstream parent block that is dynamic.",title:(0,c.vg)(o.L8.DYNAMIC_CHILD)}):o.L8.REDUCE_OUTPUT===n?r.push({description:"Reduce output from all dynamically created blocks into a single array output.",title:(0,c.vg)(o.L8.REDUCE_OUTPUT)}):o.L8.REPLICA===n?r.push({description:"This block is a replica of another block in the current pipeline.",title:(0,c.vg)(o.L8.REPLICA)}):o.L8.CONDITION===n?u?r.push({description:"This block condition evaluated as false.",title:"Condition unmet"}):r.push({description:"This block has a condition that will be run before its execution.",title:(0,c.vg)(o.L8.CONDITION)}):r.push({title:n})})),r}function R(n){var t=n.block,e=n.dynamic,r=n.dynamicUpstreamBlock,o=n.hasError,u=(n.reduceOutput,n.reduceOutputUpstreamBlock),i=n.selected,c=r&&!u;return{borderColorShareProps:{blockColor:null===t||void 0===t?void 0:t.color,blockType:null===t||void 0===t?void 0:t.type,dynamicBlock:e,dynamicChildBlock:c,hasError:o,selected:i},tags:E(t)}}function O(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t&&(null===t||void 0===t?void 0:t.length)>=0?t.map((function(n){return{data:n,execution_state:u.uF.IDLE,type:u.Gi.TEXT_PLAIN}})):n.filter((function(n){return null===n||void 0===n?void 0:n.type}))}function b(n){return{hasError:!!n.find((function(n){return n.error})),hasOutput:n.length>=1}}var v=function(){}},60701:function(n,t,e){e.d(t,{Qq:function(){return f},Z7:function(){return A},cH:function(){return o},du:function(){return d},fp:function(){return a},j5:function(){return s},uM:function(){return l}});var r,o,u=e(82394),i=e(22341),c=e(24224),l="sideview",a=90;!function(n){n.ADDON_BLOCKS="addon_blocks",n.BLOCK_SETTINGS="block_settings",n.CALLBACKS="callbacks",n.CHARTS="charts",n.DATA="data",n.EXTENSIONS="power_ups",n.FILE_VERSIONS="file_versions",n.GRAPHS="graphs",n.REPORTS="reports",n.SECRETS="secrets",n.SETTINGS="settings",n.TERMINAL="terminal",n.TREE="tree",n.VARIABLES="variables"}(o||(o={}));o.BLOCK_SETTINGS,o.CALLBACKS,o.CHARTS,o.DATA,o.EXTENSIONS,o.TREE;var d=[o.DATA],s=[{key:o.TREE,label:"Tree"},{buildLabel:function(n){var t=(n.pipeline||{}).widgets,e=void 0===t?[]:t;return(null===e||void 0===e?void 0:e.length)>=1?"Charts (".concat(e.length,")"):"Charts"},key:o.CHARTS},{buildLabel:function(n){var t=n.variables;return(null===t||void 0===t?void 0:t.length)>=1?"Variables (".concat(t.length,")"):"Variables"},key:o.VARIABLES},{buildLabel:function(n){var t=n.secrets;return(null===t||void 0===t?void 0:t.length)>=1?"Secrets (".concat(t.length,")"):"Secrets"},key:o.SECRETS},{buildLabel:function(n){n.pipeline;return"Add-on blocks"},key:o.ADDON_BLOCKS},{buildLabel:function(n){var t=(n.pipeline||{}).extensions,e=void 0===t?{}:t,r=0;return Object.values(e).forEach((function(n){var t=n.blocks;r+=(null===t||void 0===t?void 0:t.length)||0})),r>=1?"Power ups (".concat(r,")"):"Power ups"},key:o.EXTENSIONS},{key:o.DATA,label:"Data"},{key:o.TERMINAL,label:"Terminal"},{key:o.BLOCK_SETTINGS,label:"Block settings"}],f=(0,c.HK)(s,(function(n){return n.key})),A=(r={},(0,u.Z)(r,o.ADDON_BLOCKS,i.EJ),(0,u.Z)(r,o.BLOCK_SETTINGS,i.JG),(0,u.Z)(r,o.CALLBACKS,i.AQ),(0,u.Z)(r,o.CHARTS,i.GQ),(0,u.Z)(r,o.DATA,i.iA),(0,u.Z)(r,o.EXTENSIONS,i.Bf),(0,u.Z)(r,o.SECRETS,i.Yo),(0,u.Z)(r,o.SETTINGS,i.Zr),(0,u.Z)(r,o.TERMINAL,i.oI),(0,u.Z)(r,o.TREE,i.mp),(0,u.Z)(r,o.VARIABLES,i.LO),r)},86422:function(n,t,e){e.d(t,{$W:function(){return b},DA:function(){return E},HX:function(){return h},J8:function(){return C},L8:function(){return c},LE:function(){return A},Lq:function(){return p},M5:function(){return T},Q3:function(){return v},Qj:function(){return D},Ut:function(){return L},V4:function(){return k},VZ:function(){return S},Vd:function(){return O},dO:function(){return f},f2:function(){return N},iZ:function(){return _},t6:function(){return l},tf:function(){return s}});var r,o,u,i,c,l,a=e(82394),d=e(75968);!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(c||(c={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(l||(l={}));var s,f=(r={},(0,a.Z)(r,l.MARKDOWN,"MD"),(0,a.Z)(r,l.PYTHON,"PY"),(0,a.Z)(r,l.R,"R"),(0,a.Z)(r,l.SQL,"SQL"),(0,a.Z)(r,l.YAML,"YAML"),r),A=(o={},(0,a.Z)(o,l.MARKDOWN,"Markdown"),(0,a.Z)(o,l.PYTHON,"Python"),(0,a.Z)(o,l.R,"R"),(0,a.Z)(o,l.SQL,"SQL"),(0,a.Z)(o,l.YAML,"YAML"),o);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.GLOBAL_DATA_PRODUCT="global_data_product",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(s||(s={}));var p,T=[s.CALLBACK,s.CONDITIONAL,s.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(p||(p={}));var E,R,O=(0,d.YW)(),b=[s.CHART,s.CUSTOM,s.DATA_EXPORTER,s.DATA_LOADER,s.SCRATCHPAD,s.SENSOR,s.MARKDOWN,s.TRANSFORMER],v=[s.CUSTOM,s.DATA_EXPORTER,s.DATA_LOADER,s.SCRATCHPAD,s.SENSOR,s.MARKDOWN,s.TRANSFORMER],S=[s.DATA_EXPORTER,s.DATA_LOADER],C=[s.DATA_EXPORTER,s.DATA_LOADER,s.TRANSFORMER],h=[s.DATA_EXPORTER,s.DATA_LOADER,s.DBT,s.TRANSFORMER],D=[s.CHART,s.SCRATCHPAD,s.SENSOR,s.MARKDOWN],_=[s.CALLBACK,s.CHART,s.EXTENSION,s.SCRATCHPAD,s.MARKDOWN];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(E||(E={})),function(n){n.BLOCK_FILE="block_file",n.CUSTOM_BLOCK_TEMPLATE="custom_block_template",n.MAGE_TEMPLATE="mage_template"}(R||(R={}));var N=[s.CUSTOM,s.DATA_EXPORTER,s.DATA_LOADER,s.TRANSFORMER],k=(u={},(0,a.Z)(u,s.CALLBACK,"Callback"),(0,a.Z)(u,s.CHART,"Chart"),(0,a.Z)(u,s.CONDITIONAL,"Conditional"),(0,a.Z)(u,s.CUSTOM,"Custom"),(0,a.Z)(u,s.DATA_EXPORTER,"Data exporter"),(0,a.Z)(u,s.DATA_LOADER,"Data loader"),(0,a.Z)(u,s.DBT,"DBT"),(0,a.Z)(u,s.EXTENSION,"Extension"),(0,a.Z)(u,s.GLOBAL_DATA_PRODUCT,"Global data product"),(0,a.Z)(u,s.MARKDOWN,"Markdown"),(0,a.Z)(u,s.SCRATCHPAD,"Scratchpad"),(0,a.Z)(u,s.SENSOR,"Sensor"),(0,a.Z)(u,s.TRANSFORMER,"Transformer"),u),L=[s.DATA_LOADER,s.TRANSFORMER,s.DATA_EXPORTER,s.SENSOR];i={},(0,a.Z)(i,s.DATA_EXPORTER,"DE"),(0,a.Z)(i,s.DATA_LOADER,"DL"),(0,a.Z)(i,s.SCRATCHPAD,"SP"),(0,a.Z)(i,s.SENSOR,"SR"),(0,a.Z)(i,s.MARKDOWN,"MD"),(0,a.Z)(i,s.TRANSFORMER,"TF")},98781:function(n,t,e){e.d(t,{$1:function(){return d},G7:function(){return f},LM:function(){return A},Mj:function(){return p},QK:function(){return a},a_:function(){return T},qL:function(){return i},r0:function(){return s}});var r,o,u,i,c=e(82394),l=e(22341);!function(n){n.INTEGRATION="integration",n.PYTHON="python",n.PYSPARK="pyspark",n.STREAMING="streaming"}(i||(i={}));var a,d,s,f=(r={},(0,c.Z)(r,i.INTEGRATION,"Integration"),(0,c.Z)(r,i.PYTHON,"Standard"),(0,c.Z)(r,i.PYSPARK,"PySpark"),(0,c.Z)(r,i.STREAMING,"Streaming"),r),A="all",p=(i.PYTHON,i.INTEGRATION,i.STREAMING,o={},(0,c.Z)(o,A,l.ie),(0,c.Z)(o,i.INTEGRATION,l.YC),(0,c.Z)(o,i.PYTHON,l.El),(0,c.Z)(o,i.STREAMING,l.dB),o);!function(n){n.ACTIVE="active",n.INACTIVE="inactive",n.NO_SCHEDULES="no_schedules",n.RETRY="retry"}(a||(a={})),function(n){n.GROUP="group_by",n.STATUS="status[]",n.TAG="tag[]",n.TYPE="type[]"}(d||(d={})),function(n){n.STATUS="status",n.TAG="tag",n.TYPE="type"}(s||(s={}));var T=(u={},(0,c.Z)(u,i.PYTHON,"python3"),(0,c.Z)(u,i.PYSPARK,"pysparkkernel"),u)},90211:function(n,t,e){e.d(t,{RA:function(){return d},kC:function(){return s},vg:function(){return O},kE:function(){return h},Mp:function(){return f},Pb:function(){return l},HW:function(){return v},wX:function(){return A},x6:function(){return p},_6:function(){return T},zf:function(){return b},Y6:function(){return C},wE:function(){return D},J3:function(){return E},We:function(){return a},QV:function(){return S},C5:function(){return R}});var r=e(75582),o=e(17717),u=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],i=(e(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),c=e(24224);function l(n){if(!n)return!1;try{JSON.parse(n)}catch(t){return!1}return!0}function a(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return n.split(" ").join(t)}function d(n){return n.split(" ").join("_")}function s(n){return n?n.charAt(0).toUpperCase()+n.slice(1):""}function f(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*n)}function A(n){return n.charAt(0).toLowerCase()+n.slice(1)}function p(n){if(null===n||"undefined"===typeof n)return"";var t=n.toString().split("."),e=(0,r.Z)(t,2),o=e[0],u=e[1],i=o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return u?"".concat(i,".").concat(u):i}function T(n,t){var e,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=t,u=void 0!==o&&null!==o;if(u||(o=2),1===o)e=n;else{var i=n.length,c=n[i-1];e="y"===c&&"day"!==n?"".concat(n.slice(0,i-1),"ies"):"".concat(n,"s"===c?"es":"s")}if(u){var l=r?p(o):o;return"".concat(l," ").concat(e)}return e}function E(n){return null===n||void 0===n?void 0:n.replace(/_/g," ")}function R(n){var t=n.length;return"ies"===n.slice(t-3,t)?"".concat(n.slice(0,t-3),"y"):"es"===n.slice(t-2,t)&&"ces"!==n.slice(t-3,t)?n.slice(0,t-2):n.slice(0,t-1)}function O(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return s(E(n.toLowerCase()))}function b(n){var t,e=[["second",60],["minute",60],["hour",24],["day",7],["week",4],["month",12],["year",null]];return e.forEach((function(o,u){if(!t){var i=(0,r.Z)(o,2),c=i[0],l=i[1],a=e.slice(0,u).reduce((function(n,t){return n*Number(t[1])}),1);n<Number(l)*a&&(t=T(c,Math.round(n/a)))}})),t}function v(n){return"undefined"!==typeof n&&null!==n&&!isNaN(n)}function S(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,e=Math.pow(10,t);return Math.round((n||0)*e)/e}function C(){return"".concat((0,c.mp)(u)," ").concat((0,c.mp)(i))}function h(n){return null===n||void 0===n?void 0:n.toLowerCase().replace(/\W+/g,"_")}function D(n){var t,e=n.split(o.sep),r=e[e.length-1].split(".");return t=1===r.length?r[0]:r.slice(0,-1).join("."),e.slice(0,e.length-1).concat(t).join(o.sep)}}}]);