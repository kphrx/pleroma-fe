(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{720:function(t,e,o){"use strict";o.r(e),o.d(e,"default",function(){return U});var n,s,a,i=o(0),u=o.n(i),r=o(6),l=o.n(r),c=o(3),d=o.n(c),h=o(7),p=o.n(h),f=o(38),g=o.n(f),m=o(1),v=o.n(m),b=o(12),M=o(2),I=o.n(M),y=o(17),j=o.n(y),w=o(86),O=o(193),L=o(60),k=o(113),C=o(200),R=o(4),_=o(18),S=Object(R.f)({heading:{id:"column.favourites",defaultMessage:"Favourites"}}),U=Object(b.connect)(function(t){return{statusIds:t.getIn(["status_lists","favourites","items"]),isLoading:t.getIn(["status_lists","favourites","isLoading"],!0),hasMore:!!t.getIn(["status_lists","favourites","next"])}})(n=Object(R.g)((a=s=function(t){function e(){var o,n,s;l()(this,e);for(var a=arguments.length,i=Array(a),u=0;u<a;u++)i[u]=arguments[u];return o=n=d()(this,t.call.apply(t,[this].concat(i))),n.handlePin=function(){var t=n.props,e=t.columnId,o=t.dispatch;o(e?Object(k.h)(e):Object(k.e)("FAVOURITES",{}))},n.handleMove=function(t){var e=n.props,o=e.columnId;(0,e.dispatch)(Object(k.g)(o,t))},n.handleHeaderClick=function(){n.column.scrollTop()},n.setRef=function(t){n.column=t},n.handleLoadMore=g()(function(){n.props.dispatch(Object(w.g)())},300,{leading:!0}),s=o,d()(n,s)}return p()(e,t),e.prototype.componentWillMount=function(){this.props.dispatch(Object(w.h)())},e.prototype.render=function(){var t=this.props,e=t.intl,o=t.shouldUpdateScroll,n=t.statusIds,s=t.columnId,a=t.multiColumn,i=t.hasMore,r=t.isLoading,l=!!s,c=u()(R.b,{id:"empty_column.favourited_statuses",defaultMessage:"You don't have any favourite toots yet. When you favourite one, it will show up here."});return v.a.createElement(O.a,{ref:this.setRef,label:e.formatMessage(S.heading)},u()(L.a,{icon:"star",title:e.formatMessage(S.heading),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:l,multiColumn:a,showBackButton:!0}),u()(C.a,{trackScroll:!l,statusIds:n,scrollKey:"favourited_statuses-"+s,hasMore:i,isLoading:r,onLoadMore:this.handleLoadMore,shouldUpdateScroll:o,emptyMessage:c}))},e}(_.a),s.propTypes={dispatch:I.a.func.isRequired,shouldUpdateScroll:I.a.func,statusIds:j.a.list.isRequired,intl:I.a.object.isRequired,columnId:I.a.string,multiColumn:I.a.bool,hasMore:I.a.bool,isLoading:I.a.bool},n=a))||n)||n}}]);
//# sourceMappingURL=favourited_statuses.js.map