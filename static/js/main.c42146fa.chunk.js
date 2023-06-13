(this["webpackJsonpspotify-api-react-app"]=this["webpackJsonpspotify-api-react-app"]||[]).push([[0],{194:function(t,e,n){},195:function(t,e,n){},223:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(35),s=n.n(i),o=(n(194),n(195),n(9)),r=n(16),l=n(61),d=n(273),u=n(272),h=n(2),j=function(t){var e=t.data,n=t.trackAttribute,c=t.setSongIdOrder,i=Object(a.useState)(null),s=Object(o.a)(i,2),j=s[0],p=s[1],f=Object(a.useState)(null),b=Object(o.a)(f,2),v=b[0],O=b[1],x=Object(a.useState)("None"),m=Object(o.a)(x,2),y=m[0],g=m[1],F=Object(a.useState)({max:0,min:0,avg:0}),k=Object(o.a)(F,2),S=k[0],w=k[1],N=40,A=e?35*(null===e||void 0===e?void 0:e.length)+N:0;Object(a.useEffect)((function(){null!==e&&w({max:Math.max.apply(Math,null===e||void 0===e?void 0:e.map((function(t){return t[n]}))),min:Math.min.apply(Math,null===e||void 0===e?void 0:e.map((function(t){return t[n]}))),avg:(null===e||void 0===e?void 0:e.reduce((function(t,e){return t+e[n]}),0))/(null===e||void 0===e?void 0:e.length)})}),[e,n]),Object(a.useEffect)((function(){if(e)switch(console.log(e,typeof e),y){case"Descending":p(Object(r.a)(e).sort((function(t,e){return e[n]-t[n]})));break;case"Ascending":p(Object(r.a)(e).sort((function(t,e){return t[n]-e[n]})));break;case"Peak":var t=Object(r.a)(e).sort((function(t,e){return e[n]-t[n]})),a=t.filter((function(t,e){return e%2===0})),c=t.filter((function(t,e){return e%2!==0})),i=a.sort((function(t,e){return t[n]-e[n]})),s=c.sort((function(t,e){return e[n]-t[n]}));p(i.concat(s));break;case"None":default:p(e)}else O(null)}),[y,n,e]),Object(a.useEffect)((function(){if("undefined"!==typeof j){console.log(j);var t=l.b().domain(l.a(null===e||void 0===e?void 0:e.length)).range([0,A-N]).padding(.05),a=l.c().domain([0,S.max]).range([0,100]);c(null===j||void 0===j?void 0:j.map((function(t){return"spotify:track:".concat(null===t||void 0===t?void 0:t.id)})));var i=null===j||void 0===j?void 0:j.map((function(e){var c;return{trackName:null===e||void 0===e||null===(c=e.track)||void 0===c?void 0:c.name,x:50,y:t(null===j||void 0===j?void 0:j.indexOf(e)),width:a(e[n]),height:30}}));O(i)}}),[e,A,n,S,y,j,c]);return Object(h.jsxs)(h.Fragment,{children:[" ",Object(h.jsxs)("div",{className:"sort-controls",children:[Object(h.jsx)("h3",{children:"Sort Method  "}),Object(h.jsxs)(u.a,{color:"primary",value:y,exclusive:!0,onChange:function(t,e){g(e)},children:[Object(h.jsx)(d.a,{value:"None",children:"None"}),Object(h.jsx)(d.a,{value:"Ascending",children:"Ascending"}),Object(h.jsx)(d.a,{value:"Descending",children:"Descending"}),Object(h.jsx)(d.a,{value:"Peak",children:"Peak"})]})]}),Object(h.jsx)("div",{className:"playlist-stats card",children:e&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h3",{children:["Min ",n,": ",S.min.toFixed(2)]}),Object(h.jsxs)("h3",{children:["Max ",n,": ",S.max.toFixed(2)]}),Object(h.jsxs)("h3",{children:["Average ",n,": ",S.avg.toFixed(2)]})]})}),Object(h.jsx)("div",{id:"chart",children:Object(h.jsxs)("svg",{id:"songChart",height:A,width:800,children:[Object(h.jsx)("text",{x:50,y:15,style:{fill:"#FFFFFF"},children:n}),Object(h.jsx)("text",{x:v?Math.max.apply(Math,v.map((function(t){return t.width+50})))+8:20,y:15,style:{fill:"#FFFFFF"},children:"Songs"}),Object(h.jsx)("line",{x1:0,x2:800,y1:25,y2:25,stroke:"white",strokeWidth:".1"}),e&&v&&(null===v||void 0===v?void 0:v.map((function(t){return Object(h.jsxs)("g",{children:[Object(h.jsxs)("text",{x:t.x+110,y:t.y+20+N,style:{fill:"#FFFFFF"},children:[null===t||void 0===t?void 0:t.trackName," "]}),Object(h.jsx)("rect",{x:t.x,y:t.y+N,width:t.width,height:t.height,style:{fill:"#1DB954",rx:"4px"}})]},t.y)}))),e&&v&&Object(h.jsxs)("g",{children:[Object(h.jsx)("line",{x1:Math.max.apply(Math,v.map((function(t){return t.width+50}))),y1:N,x2:Math.max.apply(Math,v.map((function(t){return t.width+50}))),y2:A,stroke:"white",strokeWidth:".3"}),Object(h.jsx)("line",{x1:50,y1:N,x2:50,y2:A,stroke:"white",strokeWidth:".3"})]})]})})]})},p=n(73),f=n(25),b=n.n(f),v=n(268),O=n(269),x=function(t){var e=t.access_token,n=t.setSongsDetails,c=t.setTrackAttribute,i=t.trackAttribute,s=t.setSelectedPlaylist,r=t.selectedPlaylist,l=Object(a.useState)(["No Playlists Found"]),j=Object(o.a)(l,2),f=j[0],x=j[1],m=Object(a.useState)(null),y=Object(o.a)(m,2),g=y[0],F=y[1];Object(a.useEffect)((function(){var t={Authorization:"Bearer "+e};b.a.get("https://api.spotify.com/v1/me/playlists?limit=50",{headers:t}).then((function(t){var e,n;x(null===t||void 0===t||null===(e=t.data)||void 0===e||null===(n=e.items)||void 0===n?void 0:n.map((function(t){return{label:t.name,data:t}})))}),(function(t){console.log(t)}))}),[e]),Object(a.useEffect)((function(){if("undefined"!==typeof r){var t={Authorization:"Bearer "+e};b.a.get("https://api.spotify.com/v1/playlists/".concat(null===r||void 0===r?void 0:r.id,"/tracks"),{headers:t}).then((function(t){var e;F(t),null===g||void 0===g||null===(e=g.items)||void 0===e||e.map((function(t){return t}))}),(function(t){console.log("this error",r,t)}))}else console.log("no playlist selected"),n(null),F(null)}),[r,e,null===g||void 0===g?void 0:g.items,n]),Object(a.useEffect)((function(){n(g&&"undefined"!==typeof r?function(t){var a,c,i={Authorization:"Bearer "+e},s=null===t||void 0===t||null===(a=t.data)||void 0===a||null===(c=a.items)||void 0===c?void 0:c.map((function(t){return t.track.id})),o=b()({method:"GET",url:"https://api.spotify.com/v1/audio-features/?ids=".concat(String(s)),headers:i}).then((function(e){return t.data.items.map((function(t){return Object.assign(t,e.data.audio_features.find((function(e){var n;return(null===e||void 0===e?void 0:e.id)===(null===t||void 0===t||null===(n=t.track)||void 0===n?void 0:n.id)})))}))}),(function(t){return console.log(t),alert(t),t}));Promise.resolve(o).then((function(t){n(t)}))}(g):null)}),[r,e,g,n]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"inputs-flex",children:[Object(h.jsx)("div",{className:"autocomplete-container",children:Object(h.jsx)(v.a,{disablePortal:!0,id:"combo-box",options:f,sx:{width:300},onChange:function(t,e){return s(null===e||void 0===e?void 0:e.data)},isOptionEqualToValue:function(t,e){return t.id===e.id},renderInput:function(t){return Object(h.jsx)(O.a,Object(p.a)(Object(p.a)({},t),{},{label:"Playlist"}))}})}),Object(h.jsxs)("div",{className:"mini-box",children:[Object(h.jsx)("h3",{children:" Sort Metric"}),Object(h.jsxs)(u.a,{color:"primary",value:i,exclusive:!0,onChange:function(t,e){c(e)},children:[Object(h.jsx)(d.a,{value:"danceability",children:"danceability"}),Object(h.jsx)(d.a,{value:"energy",children:"energy"}),Object(h.jsx)(d.a,{value:"key",children:"key"}),Object(h.jsx)(d.a,{value:"speechiness",children:"speechiness"}),Object(h.jsx)(d.a,{value:"tempo",children:"tempo"})]})]})]})})},m=function(t){var e=t.playlist,n=t.access_token,c=t.songIdOrder,i=Object(a.useState)(null),s=Object(o.a)(i,2),r=s[0],l=s[1],d=Object(a.useState)(""),u=Object(o.a)(d,2),j=u[0],p=u[1];Object(a.useEffect)((function(){var t={Authorization:"Bearer "+n};b.a.get("https://api.spotify.com/v1/me/",{headers:t}).then((function(t){l(t)}),(function(t){console.log(t)}))}),[n]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{id:"playlistInterface",children:[Object(h.jsx)(O.a,{id:"outlined-basic",label:"Playlist Name",variant:"outlined",onChange:function(t){return e=t.target.value,void p(e);var e},value:j}),Object(h.jsx)("div",{className:"sp-button sp-flat sp-light",onClick:function(){return function(t,e,n,a){var c={Authorization:"Bearer "+t},i={name:n,description:"Playlist Sorted with Jamsort",public:!0};b()({method:"post",url:"https://api.spotify.com/v1/users/".concat(e.data.id,"/playlists"),headers:c,data:i}).then((function(e){var n={Authorization:"Bearer "+t};b()({method:"post",url:"https://api.spotify.com/v1/playlists/".concat(e.data.id,"/tracks"),headers:n,data:{uris:a}}).then((function(t){201===t.status?alert("Playlist Saved as: ".concat(i.name)):alert("error: ".concat(t.status,", ").concat(t.statusText)),console.log(t)}))}),(function(t){console.log(t)}))}(n,r,j,c)},children:"Save as new Playlist"}),Object(h.jsxs)("div",{className:"sp-button sp-flat sp-light",onClick:function(){return function(t,e,n,a){var c={Authorization:"Bearer "+t};b()({method:"put",url:"https://api.spotify.com/v1/playlists/".concat(n,"/tracks"),headers:c,data:{uris:a}}).then((function(t){201===t.status?alert("Playlist Overwritten!"):alert("error: ".concat(t.status,", ").concat(t.statusText)),console.log(t)}))}(n,0,e.id,c)},children:["Overwrite ",e?e.name:" "," Playlist"]})]})})},y=function(t){var e=Object(a.useState)(null),n=Object(o.a)(e,2),c=n[0],i=n[1],s=t.access_token;return Object(a.useEffect)((function(){console.log("running useEffect",s);var t={Authorization:"Bearer "+s};s&&b.a.get("https://api.spotify.com/v1/me/player/currently-playing",{headers:t}).then((function(e){204===e.status&&b.a.get("https://api.spotify.com/v1/me/player/recently-played?market=US",{headers:t}).then((function(t){console.log("RESPONSE",t.data),i(t.data)}),(function(t){console.log(t)}))}),(function(t){console.log(t)}))}),[s]),Object(h.jsx)("div",{children:s?Object(h.jsx)("div",{children:c}):null})},g=n(41),F=function(t){var e=window.location.hash,n=e.substring(14,e.indexOf("&token_type"));console.log("access token",n);console.log("clientid","cbb4da0e74d849cf94ec037fdf03ff26");var i=Object(a.useState)(null),s=Object(o.a)(i,2),r=s[0],l=s[1],d=c.a.useState("tempo"),u=Object(o.a)(d,2),p=u[0],f=u[1],b=Object(a.useState)(null),v=Object(o.a)(b,2),O=v[0],F=v[1],k=Object(a.useState)(null),S=Object(o.a)(k,2),w=S[0],N=S[1];return 0===n.length?Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"subtitle",children:"Spotify API React App"}),Object(h.jsx)("p",{className:"informational-text",children:"This app lets you sort your playlists by energy, dancability and more. Authenticate with Spotify to get started!"}),Object(h.jsx)("div",{className:"auth-block",children:Object(h.jsx)("div",{className:"sp-button sp-flat sp-light",children:Object(h.jsx)(g.b,{className:"auth-text",to:"/spotify-api-react-app/",children:"Authenticate with Spotify"})})})]}):Object(h.jsxs)("div",{children:[Object(h.jsx)(y,{access_token:n}),Object(h.jsx)(x,{className:"card",access_token:n,setSongsDetails:l,trackAttribute:p,setTrackAttribute:f,setSelectedPlaylist:F,selectedPlaylist:O}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"song-chart-frame",children:[Object(h.jsx)(m,{playlist:O,access_token:n,songIdOrder:w}),Object(h.jsx)(j,{data:r,trackAttribute:p,setSongIdOrder:N})]})]})},k=function(t){var e=window.location.hash,n=e.substring(14,e.indexOf("&token_type"));return Object(a.useEffect)((function(){}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(y,{access_token:n})})},S=function(t){var e="cbb4da0e74d849cf94ec037fdf03ff26";console.log("clientid",e);var n="";n="/"===String(window.location.href)[String(window.location.href).length-1]?"".concat(window.location.href,"index"):"http://localhost:3000/spotify-api-react-app/jamsort",console.log(n);return Object(a.useEffect)((function(){window.location.href="https://accounts.spotify.com/authorize?client_id=".concat(e,"&scope=").concat(encodeURIComponent("playlist-modify-private playlist-read-private playlist-modify-public user-read-currently-playing user-read-recently-played"),"&redirect_uri=").concat(n,"&response_type=token&state=123")}),[e,n]),Object(h.jsx)("div",{})},w=n(15),N=function(t){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)("h2",{children:"JamSort"})}),Object(h.jsx)("div",{className:"body",children:Object(h.jsxs)(g.a,{children:[Object(h.jsxs)(w.c,{children:[Object(h.jsx)(w.a,{path:"/spotify-api-react-app/",exact:!0,component:S}),Object(h.jsx)(w.a,{path:"/spotify-api-react-app/index",exact:!0,component:F}),Object(h.jsx)(w.a,{path:"/spotify-api-react-app/jamsort",exact:!0,component:F}),Object(h.jsx)(w.a,{path:"/spotify-api-react-app/genrecheck",exact:!0,component:k})]}),Object(h.jsx)(g.b,{to:"/spotify-api-react-app/jamsort",children:"Jamsort"})," |"," ",Object(h.jsx)(g.b,{to:"/spotify-api-react-app/genrecheck",children:"Genrecheck"})," |"," "]})})]})},A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,275)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),i(t),s(t)}))},P=n(101),E=n(271),M=Object(P.a)({palette:{mode:"dark",primary:{main:"#FFFFFF",light:"#FFFFF",dark:"#FF0000",backgroundColor:"#FFFFFF",contrastText:"#FFFFFF"},secondary:{light:"#b3b3b3",main:"#b3b3b3",dark:"#181818",contrastText:"#FFFFFF"},contrastThreshold:3,tonalOffset:.2}});s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(E.a,{theme:M,children:Object(h.jsx)(N,{})})}),document.getElementById("root")),A()}},[[223,1,2]]]);
//# sourceMappingURL=main.c42146fa.chunk.js.map