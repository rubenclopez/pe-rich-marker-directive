// Generated by CoffeeScript 1.8.0
'use strict';
var peRichMarker;

peRichMarker = angular.module('peRichMarkerDirective', []);

peRichMarker.directive('peRichMarker', function() {
  return {
    restrict: 'E',
    require: '^map',
    link: function(scope, element, attrs, mapController) {
      var marker;
      marker = new RichMarker({
        position: (function(func, args, ctor) {
          ctor.prototype = func.prototype;
          var child = new ctor, result = func.apply(child, args);
          return Object(result) === result ? result : child;
        })(google.maps.LatLng, scope.$eval(attrs.position), function(){}),
        flat: attrs.flat,
        anchor: eval(attrs.anchor),
        content: attrs.content,
        paneRenderLevel: attrs.paneRenderLevel,
        zIndex: attrs.zIndex,
        shadow: attrs.shadow
      });
      google.maps.event.addListener(marker, 'click', function(evt) {
        scope.$eval(attrs.onClick);
        return evt.preventDefault();
      });
      mapController.addMarker(marker);
      return scope.$on('$destroy', function() {
        return marker.setMap(null);
      });
    }
  };
});
