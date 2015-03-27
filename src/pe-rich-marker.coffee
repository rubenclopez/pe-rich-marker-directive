'use strict'

peRichMarker = angular.module 'peRichMarkerDirective', []

peRichMarker.directive 'peRichMarker', ()->
  restrict: 'E'
  require: '^map'
  link: (scope, element, attrs, mapController)->
    marker = new RichMarker
      position: new google.maps.LatLng scope.$eval(attrs.position)...
      flat: attrs.flat
      anchor: eval(attrs.anchor)
      content: attrs.content
      paneRenderLevel: attrs.paneRenderLevel
      zIndex: attrs.zIndex
      shadow: attrs.shadow

    google.maps.event.addListener marker, 'click', (evt)->
      scope.$eval(attrs.onClick)
      evt.preventDefault()

    mapController.addMarker marker

    scope.$on '$destroy', ()-> marker.setMap null
