/**
 * Hitchwiki Hosts
 */
//var APIpath = '../API/';
var APIpath = 'http://mediawiki/index.php/';

var HWHosts = angular.module('hostmapapp', [
        'leaflet-directive'
    ]);


/*
HWHosts.factory('Markers', function($http, $log) {
    var markers = [];

    return {
        get: function() {
            $log.log("Markers->get()");

            $http({method: 'GET', url: APIpath + 'hosts.json'}).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    $log.log("Markers->get()->respond:");
                    $log.log(data);
                    if(data.results) {

                        angular.forEach(data.results, function(place) {

                            markers.push({
                                lat:        place.printouts.Location[0].lat,
                                lng:        place.printouts.Location[0].lon,
                                layer:      'hosts',
                                message:    '<p><a href="' + place.fullurl + '" target="_blank">' + place.fulltext + '</a></p>',
                                focus:      true
                            });

                        });
                    }

                    return markers;

                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    markers = [];
                    return markers;
                });
        }
    };
});
*/

HWHosts.controller('hostmapController', function($scope, $http, $log, $templateCache) {

    $scope.user = {
        id: 1,
        username: 'Dev'
    };

    angular.extend($scope, {
        hostmap: {
            lat: 51,
            lng: 9,
            zoom: 4
        },
        layers: {
            baselayers: {
                quest: {
                    name: 'OpenMapQuest',
                    type: 'xyz',
                    url: 'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
                    layerOptions: {
                        subdomains: ['1', '2', '3', '4'],
                        attribution: 'contributors - &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                        continuousWorld: true
                    }
                },
                osm: {
                    name: 'OpenStreetMap',
                    type: 'xyz',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    layerOptions: {
                        subdomains: ['a', 'b', 'c'],
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                        continuousWorld: true
                    }
                }
            },

            overlays: {
                hosts: {
                    name: 'Hosts',
                    type: 'markercluster',
                    visible: true,
                    layerOptions: {
                        maxClusterRadius: 20
                    }
                }
            }
        },
        marker_list: []
    });


    /**
     * Fetch markers from the API
     */
     //
    $scope.fetch = function() {
        $log.log("->fetch");
        $http({
                method: 'GET',
                //url: APIpath + 'hosts.json'
                cache: true,
                url: APIpath + 'Special:Ask/-5B-5BCategory:Hosting-5D-5D-20/-3FLocation/format=json/searchlabel=hosts/prettyprint=yes/offset=0'
            }).
            success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                $log.log("Markers->get()->respond:");
                $log.log(data);
                if(data.results) {

                    angular.forEach(data.results, function(place) {

                        $scope.marker_list.push({
                            lat:        place.printouts.Location[0].lat,
                            lng:        place.printouts.Location[0].lon,
                            layer:      'hosts',
                            message:    '<p><a href="' + place.fullurl + '" target="_blank">' + place.fulltext + '</a></p>',
                            focus:      true
                        });

                    });
                }

                //return markers;

            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.marker_list = [];
                //$log.error("Couldn't connecto to the API...");
            });
    };

    $scope.fetch();


    $scope.addhost = function() {
        $log.log("->addhost");

        var newMarker = {
                    lng : $scope.hostmap.lng,
                    lat : $scope.hostmap.lat,
                    layer : 'hosts',
                    message: $templateCache.get('addMarkerForm.html'),
                    draggable: true,
                    focus: true,
                    riseOnHover: true
                };

        $scope.marker_list.push(newMarker);
    };


});