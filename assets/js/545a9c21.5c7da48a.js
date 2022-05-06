"use strict";(self.webpackChunkremedy=self.webpackChunkremedy||[]).push([[347],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return p}});var l=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(e,t){if(null==e)return{};var i,l,a=function(e,t){if(null==e)return{};var i,l,a={},s=Object.keys(e);for(l=0;l<s.length;l++)i=s[l],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)i=s[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=l.createContext({}),d=function(e){var t=l.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=d(e.components);return l.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),h=d(i),p=a,k=h["".concat(o,".").concat(p)]||h[p]||u[p]||s;return i?l.createElement(k,r(r({ref:t},c),{},{components:i})):l.createElement(k,r({ref:t},c))}));function p(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,r=new Array(s);r[0]=h;var n={};for(var o in t)hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.originalType=e,n.mdxType="string"==typeof e?e:a,r[1]=n;for(var d=2;d<s;d++)r[d]=i[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,i)}h.displayName="MDXCreateElement"},6416:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return n},metadata:function(){return d},toc:function(){return u}});var l=i(7462),a=i(3366),s=(i(7294),i(3905)),r=["components"],n={id:"ability-scores-and-skills",title:"Ability Scores & Skills",sidebar_label:"Ability Scores & Skills"},o=void 0,d={unversionedId:"rules/ability-scores-and-skills",id:"rules/ability-scores-and-skills",title:"Ability Scores & Skills",description:"Ability Scores",source:"@site/docs/rules/ability-scores-and-skills.md",sourceDirName:"rules",slug:"/rules/ability-scores-and-skills",permalink:"/rules/ability-scores-and-skills",draft:!1,editUrl:"https://github.com/rubiefawn/remedy/edit/main/docs/rules/ability-scores-and-skills.md",tags:[],version:"current",frontMatter:{id:"ability-scores-and-skills",title:"Ability Scores & Skills",sidebar_label:"Ability Scores & Skills"},sidebar:"rulebook",previous:{title:"Success & Failure",permalink:"/rules/success-and-failure"},next:{title:"Playing the Game",permalink:"/rules/playing-the-game"}},c={},u=[{value:"Ability Scores",id:"ability-scores",level:2},{value:"Skills &amp; Tools",id:"skills--tools",level:2},{value:"Proficiency",id:"proficiency",level:3},{value:"List of Skills",id:"list-of-skills",level:3},{value:"\ud83e\udd38\u200d\u2640\ufe0f Athletics",id:"\ufe0f-athletics",level:4},{value:"\ud83c\udfad Charisma",id:"-charisma",level:4},{value:"\ud83d\udc93 Fortitude",id:"-fortitude",level:4},{value:"\ud83d\udc8a Immunity",id:"-immunity",level:4},{value:"\ud83d\udc9e Instinct",id:"-instinct",level:4},{value:"\ud83d\udd0d Observation",id:"-observation",level:4},{value:"\ud83d\udcad Reasoning",id:"-reasoning",level:4},{value:"\ud83d\udca8 Reflex",id:"-reflex",level:4},{value:"\ud83d\ude24 Sanity",id:"-sanity",level:4},{value:"\ud83d\ude2a Stamina",id:"-stamina",level:4},{value:"\ud83e\udd2b Stealth",id:"-stealth",level:4},{value:"\ud83d\ude23 Willpower",id:"-willpower",level:4},{value:"List of Tools",id:"list-of-tools",level:3},{value:"Air Vehicles",id:"air-vehicles",level:4},{value:"Alchemist&#39;s Supplies",id:"alchemists-supplies",level:4},{value:"Artisan&#39;s Tools",id:"artisans-tools",level:4},{value:"Cook&#39;s Utensils",id:"cooks-utensils",level:4},{value:"Calligrapher&#39;s Tools",id:"calligraphers-tools",level:4},{value:"Carpenter&#39;s Tools",id:"carpenters-tools",level:4},{value:"Cartographer&#39;s Tools",id:"cartographers-tools",level:4},{value:"Disguise Kit",id:"disguise-kit",level:4},{value:"First Aid Kit",id:"first-aid-kit",level:4},{value:"Gaming Set",id:"gaming-set",level:4},{value:"Land Vehicles",id:"land-vehicles",level:4},{value:"Mason&#39;s Tools",id:"masons-tools",level:4},{value:"Musical Instrument",id:"musical-instrument",level:4},{value:"Painter&#39;s Supplies",id:"painters-supplies",level:4},{value:"Poisoner&#39;s Kit",id:"poisoners-kit",level:4},{value:"Sea Vehicles",id:"sea-vehicles",level:4},{value:"Smith&#39;s Tools",id:"smiths-tools",level:4},{value:"Thieves&#39; Tools",id:"thieves-tools",level:4},{value:"Tinker&#39;s Tools",id:"tinkers-tools",level:4},{value:"Weaver&#39;s Tools",id:"weavers-tools",level:4},{value:"Expertise",id:"expertise",level:2},{value:"List of Expertises",id:"list-of-expertises",level:3},{value:"Alchemy",id:"alchemy",level:4},{value:"Animals",id:"animals",level:4},{value:"Arcana",id:"arcana",level:4},{value:"Astronomy",id:"astronomy",level:4},{value:"Clockwork",id:"clockwork",level:4},{value:"Handwriting",id:"handwriting",level:4},{value:"History",id:"history",level:4},{value:"Mechanics",id:"mechanics",level:4},{value:"Medicine",id:"medicine",level:4},{value:"Plants",id:"plants",level:4},{value:"Religion",id:"religion",level:4},{value:"Streetwise",id:"streetwise",level:4},{value:"Survival",id:"survival",level:4}],h={toc:u};function p(e){var t=e.components,i=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,l.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"ability-scores"},"Ability Scores"),(0,s.kt)("p",null,"Ability scores are four numerical values that quantify the inborn ability and talent of a character or creature. Ability scores can be positive or negative, with the average being 0. Each ability score has a symbol, by which it can be referred to for short."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Ability Score"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Symbol"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Vitality"),(0,s.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udc95"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Physical toughness, endurance")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Strength"),(0,s.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udcaa"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Physical dexterity, brawn, nimbleness")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Resolve"),(0,s.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udc64"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Mental toughness, personality, spirit")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Wisdom"),(0,s.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udf93"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Mental dexterity, intelligence, intuition")))),(0,s.kt)("h2",{id:"skills--tools"},"Skills & Tools"),(0,s.kt)("p",null,"While ability scores represent the raw ability of a character or creature, skills represent specialization, focus, and experience a creature may or may not have in any certain area. All skills fall under one of the four ability scores, representing a specialization under that general ability."),(0,s.kt)("p",null,"Sometimes, proper tools are required in order to even attempt a certain task. Tools have their own proficiency associated with them, just like skills. However, unlike skills, checks with tools are not bound to a single ability score by default. When you make a check with tools, the storyteller determines the appropriate ability score based on the task you are attempting with those tools ","(","picking a lock with thieves' tools might be Strength, but building a trap with thieves' tools might be Wisdom",")","."),(0,s.kt)("h3",{id:"proficiency"},"Proficiency"),(0,s.kt)("p",null,"Proficiency is a measurement of a character's experience with a certain skill or item, and changes how checks with that item or skill are made. Three levels of proficiency exist: novice, standard, and expert; novice being the default. When a character gains proficiency with a skill or item, their proficiency increases from novice to standard, or standard to expert."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Proficiency"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Checks"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Novice"),(0,s.kt)("td",{parentName:"tr",align:"left"},"2d20, keep lowest result")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Standard"),(0,s.kt)("td",{parentName:"tr",align:"left"},"1d20")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Expert"),(0,s.kt)("td",{parentName:"tr",align:"left"},"2d20, keep highest result")))),(0,s.kt)("h3",{id:"list-of-skills"},"List of Skills"),(0,s.kt)("p",null,"Each skill has a symbol, by which it can be referred to for short."),(0,s.kt)("h4",{id:"\ufe0f-athletics"},"\ud83e\udd38\u200d\u2640\ufe0f Athletics"),(0,s.kt)("p",null,"This Strength-based skill represents the physical awareness and technique required to perform difficult athletic feats beyond your normal ability. Athletics can be used to scale a wall, leap over a chasm, or balance on a tightrope."),(0,s.kt)("h4",{id:"-charisma"},"\ud83c\udfad Charisma"),(0,s.kt)("p",null,"This Resolve-based skill represents social skills. Charisma can be used to orate, persuade, intimidate, or lie."),(0,s.kt)("h4",{id:"-fortitude"},"\ud83d\udc93 Fortitude"),(0,s.kt)("p",null,"This Vitality-based skill represents the grit and willpower required to hold on to life when death is near. Fortitude can be used to prevent bleeding out or to remain conscious while petrified."),(0,s.kt)("h4",{id:"-immunity"},"\ud83d\udc8a Immunity"),(0,s.kt)("p",null,"This Vitality-based skill represents constitution and the ability to ignore or resist poisonous substances. Immunity can be used to overcome intoxication or to reduce harmful effects of poison or disease."),(0,s.kt)("h4",{id:"-instinct"},"\ud83d\udc9e Instinct"),(0,s.kt)("p",null,"This Wisdom-based skill represents social awareness and judgement. Instinct can be used to detect a lie or bluff, or to resist bribes and persuasion."),(0,s.kt)("h4",{id:"-observation"},"\ud83d\udd0d Observation"),(0,s.kt)("p",null,"This Wisdom-based skill represents the understanding of knowing what to look for and where. Observation can be used to find a hidden compartment, gather information about the area from locals, or estimate the authenticity of a precious stone."),(0,s.kt)("h4",{id:"-reasoning"},"\ud83d\udcad Reasoning"),(0,s.kt)("p",null,"This Wisdom-based skill represents the mental acuity that allows one to understand logic and identify fallacies. Reasoning can be used to identify false information or remember critical information in a time of need."),(0,s.kt)("h4",{id:"-reflex"},"\ud83d\udca8 Reflex"),(0,s.kt)("p",null,"This Strength-based skill represents the ability to dodge and avoid incoming physical harm. Reflex can be used to dodge an attack or sidestep a trap."),(0,s.kt)("h4",{id:"-sanity"},"\ud83d\ude24 Sanity"),(0,s.kt)("p",null,"This Resolve-based skill represents courage and grit. Sanity can be used to resist coercion and intimidation, or to stay true in the face of certain death."),(0,s.kt)("h4",{id:"-stamina"},"\ud83d\ude2a Stamina"),(0,s.kt)("p",null,"This Vitality-based skill represents endurance and determination required to push on through physically taxing circumstances. Stamina can be used to ignore harsh weather, survive without food, or to resist life-draining magic."),(0,s.kt)("h4",{id:"-stealth"},"\ud83e\udd2b Stealth"),(0,s.kt)("p",null,"This Strength-based skill represents the artistry and cunning of remaining undetected. Stealth is used to disguise oneself, move silently, and go unnoticed."),(0,s.kt)("h4",{id:"-willpower"},"\ud83d\ude23 Willpower"),(0,s.kt)("p",null,"This Resolve-based skill represents the strength and will of individuality. Willpower can be used to resist magical influence or domination."),(0,s.kt)("h3",{id:"list-of-tools"},"List of Tools"),(0,s.kt)("h4",{id:"air-vehicles"},"Air Vehicles"),(0,s.kt)("h4",{id:"alchemists-supplies"},"Alchemist's Supplies"),(0,s.kt)("p",null,"A set of Alchemist's Supplies allows you to prepare chemicals and potions."),(0,s.kt)("h4",{id:"artisans-tools"},"Artisan's Tools"),(0,s.kt)("h4",{id:"cooks-utensils"},"Cook's Utensils"),(0,s.kt)("p",null,"A set of Cook's Utensils allows you to prepare food and drink from raw ingredients."),(0,s.kt)("h4",{id:"calligraphers-tools"},"Calligrapher's Tools"),(0,s.kt)("h4",{id:"carpenters-tools"},"Carpenter's Tools"),(0,s.kt)("p",null,"A set of Carpenter's Tools allows you to craft or repair objects made of wood."),(0,s.kt)("h4",{id:"cartographers-tools"},"Cartographer's Tools"),(0,s.kt)("p",null,"A set of Cartographer's Tools allows you to draw maps and navigate."),(0,s.kt)("h4",{id:"disguise-kit"},"Disguise Kit"),(0,s.kt)("p",null,"A Disguise Kit allows you to change minor features of your appearance, such as eye or hair color, as well as small modifications to facial shape."),(0,s.kt)("h4",{id:"first-aid-kit"},"First Aid Kit"),(0,s.kt)("p",null,"A First Aid Kit allows you to apply medicine and protect wounds to prevent infection and expedite healing."),(0,s.kt)("p",null,"A First Aid Kit can be used once per long rest on a creature who has wounds. Make a First Aid Kit ","(","Wisdom",")"," check with a difficulty equal to the total amount of wounds the creature has ","(","or 10, whichever number is greater",")",". During the next long rest, the creature can ignore an amount of new infections equal to the margin of success."),(0,s.kt)("h4",{id:"gaming-set"},"Gaming Set"),(0,s.kt)("h4",{id:"land-vehicles"},"Land Vehicles"),(0,s.kt)("h4",{id:"masons-tools"},"Mason's Tools"),(0,s.kt)("p",null,"A set of Mason's Tools allows you to craft or repair objects made of stone."),(0,s.kt)("h4",{id:"musical-instrument"},"Musical Instrument"),(0,s.kt)("h4",{id:"painters-supplies"},"Painter's Supplies"),(0,s.kt)("h4",{id:"poisoners-kit"},"Poisoner's Kit"),(0,s.kt)("p",null,"A Poisoner's Kit allows you to prepare poisons properly."),(0,s.kt)("h4",{id:"sea-vehicles"},"Sea Vehicles"),(0,s.kt)("h4",{id:"smiths-tools"},"Smith's Tools"),(0,s.kt)("p",null,"A set of Smith's Tools allows you to craft or repair objects made of metal."),(0,s.kt)("h4",{id:"thieves-tools"},"Thieves' Tools"),(0,s.kt)("p",null,"A set of Thieves' Tools allows you to pick locks and craft or disarm traps."),(0,s.kt)("h4",{id:"tinkers-tools"},"Tinker's Tools"),(0,s.kt)("h4",{id:"weavers-tools"},"Weaver's Tools"),(0,s.kt)("p",null,"A set of Weaver's Tools allows you to craft or repair objects made of cloth."),(0,s.kt)("h2",{id:"expertise"},"Expertise"),(0,s.kt)("p",null,"Sometimes, a character has special knowledge that helps in a situation where a check is required. This special knowledge is called an expertise. When making a check where an expertise could help, you may briefly debate with the Storyteller how the expertise helps your character in that situation. If the Storyteller agrees, you may make the check with advantage."),(0,s.kt)("p",null,"Expertise is specific knowledge, but it can be applicable to many kinds of checks. An expertise in Medicine, for example, might grant advantage when attempting to bind a wound, but it could also be used when crafting poisons. Expertise only applies when you ask for it to, so make sure and speak up!"),(0,s.kt)("p",null,"Below is a non-comprehensive list of expertises. Depending on your character's background, you and the Storyteller might work together to add an expertise not found on the list."),(0,s.kt)("h3",{id:"list-of-expertises"},"List of Expertises"),(0,s.kt)("h4",{id:"alchemy"},"Alchemy"),(0,s.kt)("p",null,"potions"),(0,s.kt)("h4",{id:"animals"},"Animals"),(0,s.kt)("h4",{id:"arcana"},"Arcana"),(0,s.kt)("p",null,"spells only"),(0,s.kt)("h4",{id:"astronomy"},"Astronomy"),(0,s.kt)("h4",{id:"clockwork"},"Clockwork"),(0,s.kt)("h4",{id:"handwriting"},"Handwriting"),(0,s.kt)("h4",{id:"history"},"History"),(0,s.kt)("h4",{id:"mechanics"},"Mechanics"),(0,s.kt)("h4",{id:"medicine"},"Medicine"),(0,s.kt)("h4",{id:"plants"},"Plants"),(0,s.kt)("h4",{id:"religion"},"Religion"),(0,s.kt)("h4",{id:"streetwise"},"Streetwise"),(0,s.kt)("h4",{id:"survival"},"Survival"),(0,s.kt)("p",null,"wilderness survival"))}p.isMDXComponent=!0}}]);