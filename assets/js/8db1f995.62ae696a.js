"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5601],{4137:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6686:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(7462),i=a(3366),o=(a(7294),a(4137)),l=["components"],r={title:"Policies Guide",sidebar_label:"Policies Guide",slug:"/policies",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/policies.md"},s="Policies Guide",p={unversionedId:"docs/policies",id:"docs/policies",isDocsHomePage:!1,title:"Policies Guide",description:"Introduction",source:"@site/genDocs/docs/policies.md",sourceDirName:"docs",slug:"/policies",permalink:"/docs/policies",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/policies.md",tags:[],version:"current",frontMatter:{title:"Policies Guide",sidebar_label:"Policies Guide",slug:"/policies",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/policies.md"},sidebar:"overviewSidebar",previous:{title:"Getting Started",permalink:"/docs/api/openapi/openapi-usage-guide"},next:{title:"Domains Guide",permalink:"/docs/domains"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"What is a Policy?",id:"what-is-a-policy",children:[{value:"Platform Policies",id:"platform-policies",children:[],level:3},{value:"Metadata Policies",id:"metadata-policies",children:[{value:"Actors",id:"actors",children:[],level:4},{value:"Privileges",id:"privileges",children:[],level:4},{value:"Resources",id:"resources",children:[],level:4}],level:3}],level:2},{value:"Managing Policies",id:"managing-policies",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Coming Soon",id:"coming-soon",children:[],level:2},{value:"Feedback / Questions / Concerns",id:"feedback--questions--concerns",children:[],level:2}],u={toc:c};function d(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"policies-guide"},"Policies Guide"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"DataHub provides the ability to declare fine-grained access control Policies via the UI & GraphQL API.\nAccess policies in DataHub define ",(0,o.kt)("em",{parentName:"p"},"who")," can ",(0,o.kt)("em",{parentName:"p"},"do what")," to ",(0,o.kt)("em",{parentName:"p"},"which resources"),". A few policies in plain English include"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dataset Owners should be allowed to edit documentation, but not Tags. "),(0,o.kt)("li",{parentName:"ul"},"Jenny, our Data Steward, should be allowed to edit Tags for any Dashboard, but no other metadata."),(0,o.kt)("li",{parentName:"ul"},"James, a Data Analyst, should be allowed to edit the Links for a specific Data Pipeline he is a downstream consumer of."),(0,o.kt)("li",{parentName:"ul"},"The Data Platform team should be allowed to manage users & groups, view platform analytics, & manage policies themselves.")),(0,o.kt)("p",null,"In this document, we'll take a deeper look at DataHub Policies & how to use them effectively. "),(0,o.kt)("h2",{id:"what-is-a-policy"},"What is a Policy?"),(0,o.kt)("p",null,"There are 2 types of Policy within DataHub:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Platform Policies"),(0,o.kt)("li",{parentName:"ol"},"Metadata Policies")),(0,o.kt)("p",null,"We'll briefly describe each. "),(0,o.kt)("h3",{id:"platform-policies"},"Platform Policies"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Platform")," policies determine who has platform-level privileges on DataHub. These privileges include"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Managing Users & Groups"),(0,o.kt)("li",{parentName:"ul"},"Viewing the DataHub Analytics Page"),(0,o.kt)("li",{parentName:"ul"},"Managing Policies themselves")),(0,o.kt)("p",null,"Platform policies can be broken down into 2 parts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Actors"),": Who the policy applies to (Users or Groups)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Privileges"),': Which privileges should be assigned to the Actors (e.g. "View Analytics")')),(0,o.kt)("p",null,'Note that platform policies do not include a specific "target resource" against which the Policies apply. Instead,\nthey simply serve to assign specific privileges to DataHub users and groups.'),(0,o.kt)("h3",{id:"metadata-policies"},"Metadata Policies"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Metadata")," policies determine who can do what to which Metadata Entities. For example, "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Who can edit Dataset Documentation & Links?"),(0,o.kt)("li",{parentName:"ul"},"Who can add Owners to a Chart?"),(0,o.kt)("li",{parentName:"ul"},"Who can add Tags to a Dashboard?")),(0,o.kt)("p",null,"and so on. "),(0,o.kt)("p",null,"A Metadata Policy can be broken down into 3 parts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Actors"),": The 'who'. Specific users, groups that the policy applies to."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Privileges"),": The 'what'. What actions are being permitted by a policy, e.g. \"Add Tags\"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Resources"),": The 'which'. Resources that the policy applies to, e.g. \"All Datasets\".")),(0,o.kt)("h4",{id:"actors"},"Actors"),(0,o.kt)("p",null,"We currently support 3 ways to define the set of actors the policy applies to: a) list of users b) list of groups, and\nc) owners of the entity. You also have the option to apply the policy to all users."),(0,o.kt)("h4",{id:"privileges"},"Privileges"),(0,o.kt)("p",null,"Check out the list of\nprivileges ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-utils/src/main/java/com/linkedin/metadata/authorization/PoliciesConfig.java"},"here"),"\n. Note, the privileges are semantic by nature, and does not tie in 1-to-1 with the aspect model."),(0,o.kt)("p",null,"All edits on the UI are covered by a privilege, to make sure we have the ability to restrict write access."),(0,o.kt)("p",null,"We currently support the following read privileges"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Privilege"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"VIEW_ENTITY_PAGE"),(0,o.kt)("td",{parentName:"tr",align:null},"Allow actor to access the entity page for the resource in the UI. If not granted, it will redirect   them to an unauthorized page.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"VIEW_DATASET_USAGE"),(0,o.kt)("td",{parentName:"tr",align:null},"Allow actor to access usage metadata about a dataset both in the UI and in the GraphQL API. This   includes example queries, number of queries, etc.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"VIEW_DATASET_PROFILE"),(0,o.kt)("td",{parentName:"tr",align:null},"Allow actor to access a dataset's profile both in the UI and in the GraphQL API. This   includes snapshot statistics like #rows, #columns, null percentage per field, etc.")))),(0,o.kt)("h4",{id:"resources"},"Resources"),(0,o.kt)("p",null,"Resource filter defines the set of resources that the policy applies to is defined using a list of criteria. Each\ncriterion defines a field type (like resource_type, resource_urn, domain), a list of field values to compare, and a\ncondition (like EQUALS). It essentially checks whether the field of a certain resource matches any of the input values.\nNote, that if there are no criteria or resource is not set, policy is applied to ALL resources."),(0,o.kt)("p",null,"For example, the following resource filter will apply the policy to datasets, charts, and dashboards under domain 1."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "resource": {\n    "criteria": [\n      {\n        "field": "resource_type",\n        "values": [\n          "dataset",\n          "chart",\n          "dashboard"\n        ],\n        "condition": "EQUALS"\n      },\n      {\n        "field": "domain",\n        "values": [\n          "urn:li:domain:domain1"\n        ],\n        "condition": "EQUALS"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Supported fields are as follows"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"resource_type"),(0,o.kt)("td",{parentName:"tr",align:null},"Type of the resource"),(0,o.kt)("td",{parentName:"tr",align:null},"dataset, chart, dataJob")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"resource_urn"),(0,o.kt)("td",{parentName:"tr",align:null},"Urn of the resource"),(0,o.kt)("td",{parentName:"tr",align:null},"urn:li:dataset:...")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"domain"),(0,o.kt)("td",{parentName:"tr",align:null},"Domain of the resource"),(0,o.kt)("td",{parentName:"tr",align:null},"urn:li:domain:domainX")))),(0,o.kt)("h2",{id:"managing-policies"},"Managing Policies"),(0,o.kt)("p",null,"Policies can be managed under the ",(0,o.kt)("inlineCode",{parentName:"p"},"/policies")," page, or accessed via the top navigation bar. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Policies")," tab will only\nbe visible to those users having the ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage Policies")," privilege."),(0,o.kt)("p",null,"Out of the box, DataHub is deployed with a set of pre-baked Policies. The set of default policies are created at deploy\ntime and can be found inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"policies.json")," file within ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata-service/war/src/main/resources/boot"),". This set of policies serves the\nfollowing purposes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Assigns immutable super-user privileges for the root ",(0,o.kt)("inlineCode",{parentName:"li"},"datahub")," user account (Immutable)"),(0,o.kt)("li",{parentName:"ol"},"Assigns all Platform privileges for all Users by default (Editable)")),(0,o.kt)("p",null,"The reason for #1 is to prevent people from accidentally deleting all policies and getting locked out (",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," super user account can be a backup)\nThe reason for #2 is to permit administrators to log in via OIDC or another means outside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," root account\nwhen they are bootstrapping with DataHub. This way, those setting up DataHub can start managing policies without friction.\nNote that these privilege ",(0,o.kt)("em",{parentName:"p"},"can")," and likely ",(0,o.kt)("em",{parentName:"p"},"should")," be altered inside the ",(0,o.kt)("strong",{parentName:"p"},"Policies")," page of the UI."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Pro-Tip: To login using the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," account, simply navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"<your-datahub-domain>/login")," and enter ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub"),". Note that the password can be customized for your\ndeployment by changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"user.props")," file within the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," module. Notice that JaaS authentication must be enabled. ")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"By default, the Policies feature is ",(0,o.kt)("em",{parentName:"p"},"enabled"),". This means that the deployment will support creating, editing, removing, and\nmost importantly enforcing fine-grained access policies."),(0,o.kt)("p",null,"In some cases, these capabilities are not desirable. For example, if your company's users are already used to having free reign, you\nmay want to keep it that way. Or perhaps it is only your Data Platform team who actively uses DataHub, in which case Policies may be overkill."),(0,o.kt)("p",null,"For these scenarios, we've provided a back door to disable Policies in your deployment of DataHub. This will completely hide\nthe policies management UI and by default will allow all actions on the platform. It will be as though\neach user has ",(0,o.kt)("em",{parentName:"p"},"all")," privileges, both of the ",(0,o.kt)("strong",{parentName:"p"},"Platform")," & ",(0,o.kt)("strong",{parentName:"p"},"Metadata")," flavor."),(0,o.kt)("p",null,"To disable Policies, you can simply set the ",(0,o.kt)("inlineCode",{parentName:"p"},"AUTH_POLICIES_ENABLED")," environment variable for the ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub-gms")," service container\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". For example in your ",(0,o.kt)("inlineCode",{parentName:"p"},"docker/datahub-gms/docker.env"),", you'd place"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"AUTH_POLICIES_ENABLED=false\n")),(0,o.kt)("h2",{id:"coming-soon"},"Coming Soon"),(0,o.kt)("p",null,"The DataHub team is hard at work trying to improve the Policies feature. We are planning on building out the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hide edit action buttons on Entity pages to reflect user privileges")),(0,o.kt)("p",null,"Under consideration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Ability to define Metadata Policies against multiple reosurces scoped to particular "Containers" (e.g. A "schema", "database", or "collection")')),(0,o.kt)("h2",{id:"feedback--questions--concerns"},"Feedback / Questions / Concerns"),(0,o.kt)("p",null,"We want to hear from you! For any inquiries, including Feedback, Questions, or Concerns, reach out on Slack!"))}d.isMDXComponent=!0}}]);