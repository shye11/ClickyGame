(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Angelica Pickles",image:"https://vignette.wikia.nocookie.net/rugrats/images/1/19/Angelica_Pickles.png/revision/latest?cb=20130515182442",clicked:!1},{id:2,name:"Arnold",image:"https://pbs.twimg.com/profile_images/431836494882287616/2iWUmoOk_400x400.jpeg",clicked:!1},{id:3,name:"CatDog",image:"https://i.pinimg.com/originals/83/93/7b/83937bc6e7a4bf60617b5016c64d6d89.png",clicked:!1},{id:4,name:"Chuckie Finster",image:"https://vignette.wikia.nocookie.net/cartoonica/images/b/b6/Chuckie.jpg/revision/latest?cb=20110424050627",clicked:!1},{id:5,name:"Cosmo",image:"https://vignette.wikia.nocookie.net/non-aliencreatures/images/8/82/Cosmo_by_v1ch.png/revision/latest?cb=20170714171701",clicked:!1},{id:6,name:"Danny Phantom",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq109oZ1q0wDfBYatIo8gdyX2KOMDPDXD_nqnmTvdUPQ4xjMGb",clicked:!1},{id:7,name:"DeeDee",image:"https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/31814/1507324285-31012-4510/ce50743eb3907a463bb9ca7bf917cd2f.jpg",clicked:!1},{id:8,name:"Dexter",image:"https://vignette.wikia.nocookie.net/warnerbroscartoons/images/8/8e/Dexter-dexter%27s-laboratory-main-character.png/revision/latest?cb=20160613005414",clicked:!1},{id:9,name:"Helga",image:"https://ih1.redbubble.net/image.575749852.3679/flat,800x800,075,f.u2.jpg",clicked:!1},{id:10,name:"Lil",image:"https://i.pinimg.com/736x/2a/79/a1/2a79a108dbab2f5a8dcdaac7c3d63de6.jpg",clicked:!1},{id:11,name:"Phil",image:"https://www.pngkey.com/png/detail/136-1363824_can-we-get-a-phil-from-rugrats-flair.png",clicked:!1},{id:12,name:"Reggie Rocket",image:"https://ih1.redbubble.net/image.534192324.3713/flat,550x550,075,f.u12.jpg",clicked:!1},{id:13,name:"Sam Dullard",image:"https://i.pinimg.com/736x/48/2c/a1/482ca1ac341e7fa79c88de4d27d829c1--cartoon-cartoon-cartoon-characters.jpg",clicked:!1},{id:14,name:"Stoop Kid",image:"https://vignette.wikia.nocookie.net/nickelodeon/images/9/9b/Stoop_Kid.png/revision/latest?cb=20181015145936",clicked:!1},{id:15,name:"Susie Carmichael",image:"https://pre00.deviantart.net/f217/th/pre/f/2015/309/5/a/untitled_drawing_by_mrsonic777-d9fnx70.png",clicked:!1},{id:16,name:"Timmy Turner",image:"https://vignette.wikia.nocookie.net/jimmyneutron/images/1/12/Timmy_Turner2.png/revision/latest?cb=20190515171652",clicked:!1},{id:17,name:"Tommy Pickles",image:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-Rugrats-Elizabeth-Daily-Tommy-Pickles.jpg",clicked:!1},{id:18,name:"Twister",image:"https://vignette.wikia.nocookie.net/rocketpower/images/c/cd/Twister.jpg/revision/latest/zoom-crop/width/240/height/240?cb=20150312034102",clicked:!1},{id:19,name:"Wanda",image:"https://vignette.wikia.nocookie.net/fairlyoddparents/images/d/d5/WandaFOP.png/revision/latest?cb=20190416034859&path-prefix=en",clicked:!1}]},,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(3),r=n.n(i),o=(n(15),n(4)),l=n(5),s=n(7),m=n(6),d=n(8),u=(n(16),function(e){return c.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),g=(n(17),function(e){return c.a.createElement("nav",null,c.a.createElement("h2",{id:"rw"},e.correctIncorrect),c.a.createElement("ul",null,c.a.createElement("li",null,"Current Score: ",e.score),c.a.createElement("li",null,"Top Score: ",e.topScore)))}),h=(n(18),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),p=(n(19),function(e){return c.a.createElement("article",{className:"mainBanner"},c.a.createElement("h1",null,"The Clicky Game!"),c.a.createElement("p",null,"Click on an image to earn points, but don't click on any more than once!"))}),f=function(e){return c.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},k=function(e){return c.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},b=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return c.a.createElement("div",{className:t},e.children)},v=n(1),w=(n(20),function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}),S=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={friends:v,currentScore:0,topScore:0,correctIncorrect:"",clicked:[]},n.handleClick=function(e){-1===n.state.clicked.indexOf(e)?(n.handleIncrement(),n.setState({clicked:n.state.clicked.concat(e)})):n.handleReset()},n.handleIncrement=function(){var e=n.state.currentScore+1;n.setState({currentScore:e,correctIncorrect:"You guessed correctly!"}),e>=n.state.topScore?n.setState({topScore:e}):12===e&&n.setState({correctIncorrect:"You win!"}),n.handleShuffle()},n.handleReset=function(){n.setState({currentScore:0,topScore:n.state.topScore,correctIncorrect:"You guessed incorrectly!",clicked:[]}),n.handleShuffle()},n.handleShuffle=function(){var e=w(v);n.setState({friends:e})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(h,null,c.a.createElement(p,null,"Click on an image to earn points, but don't click on any more than once!"),c.a.createElement(g,{score:this.state.currentScore,topScore:this.state.topScore,correctIncorrect:this.state.correctIncorrect}),c.a.createElement(f,null,c.a.createElement(k,null,this.state.friends.map(function(t){return c.a.createElement(b,{size:"md-3 sm-6"},c.a.createElement(u,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image}))}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.ec763566.chunk.js.map