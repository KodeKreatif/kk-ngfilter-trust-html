angular.module('kk.ngfilter.trust-html', [])
.filter('trustHtml', function($sce) {
  return function(val) {
    return $sce.trustAsHtml(val);
  };
});
