(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{724:function(o,a,t){"use strict";t.r(a),t.d(a,"default",function(){return k});var n,s,r,c=t(0),e=t.n(c),p=t(6),i=t.n(p),d=t(3),u=t.n(d),l=t(7),h=t.n(l),f=t(38),m=t.n(f),w=(t(1),t(12)),I=t(18),b=t(2),y=t.n(b),v=t(17),M=t.n(v),g=t(194),j=t(13),O=t(4),S=t(693),L=t(193),R=t(694),T=t(196),U=t(195),k=Object(w.connect)(function(o,a){return{accountIds:o.getIn(["user_lists","following",a.params.accountId,"items"]),hasMore:!!o.getIn(["user_lists","following",a.params.accountId,"next"])}})((r=s=function(o){function a(){var t,n,s;i()(this,a);for(var r=arguments.length,c=Array(r),e=0;e<r;e++)c[e]=arguments[e];return t=n=u()(this,o.call.apply(o,[this].concat(c))),n.handleLoadMore=m()(function(){n.props.dispatch(Object(j.v)(n.props.params.accountId))},300,{leading:!0}),s=t,u()(n,s)}return h()(a,o),a.prototype.componentWillMount=function(){this.props.dispatch(Object(j.w)(this.props.params.accountId)),this.props.dispatch(Object(j.z)(this.props.params.accountId))},a.prototype.componentWillReceiveProps=function(o){o.params.accountId!==this.props.params.accountId&&o.params.accountId&&(this.props.dispatch(Object(j.w)(o.params.accountId)),this.props.dispatch(Object(j.z)(o.params.accountId)))},a.prototype.render=function(){var o=this.props,a=o.shouldUpdateScroll,t=o.accountIds,n=o.hasMore;if(!t)return e()(L.a,{},void 0,e()(g.a,{}));var s=e()(O.b,{id:"account.follows.empty",defaultMessage:"This user doesn't follow anyone yet."});return e()(L.a,{},void 0,e()(T.a,{}),e()(U.a,{scrollKey:"following",hasMore:n,onLoadMore:this.handleLoadMore,shouldUpdateScroll:a,prepend:e()(R.a,{accountId:this.props.params.accountId,hideTabs:!0}),alwaysPrepend:!0,alwaysShowScrollbar:!0,emptyMessage:s},void 0,t.map(function(o){return e()(S.a,{id:o,withNote:!1},o)})))},a}(I.a),s.propTypes={params:y.a.object.isRequired,dispatch:y.a.func.isRequired,shouldUpdateScroll:y.a.func,accountIds:M.a.list,hasMore:y.a.bool},n=r))||n}}]);
//# sourceMappingURL=following.js.map