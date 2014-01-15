/**
 * JavaScript for Map in Hosts.
 */
( function ( mw, jQuery, angular ) {

    //var APIPath = wgServer + wgScriptPath;

    var APIPath = 'http://dev.wiki.yt/en';

    //var APIPath = 'http://mediawiki.localhost/debug.php?debug=';

    /**
     * Hitchwiki Hosts
     */
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

    HWHosts.controller('hostmapController', function($scope, $http, $log, $templateCache, $timeout) {


        $scope.user = {
            id: (mw.user.id()) ? mw.user.id() : false,
            username: (mw.user.name()) ? mw.user.name() : false
        };

        $scope.adding = false;

        $scope.wgEnableAPI = wgEnableAPI;
        $scope.wgEnableWriteAPI = wgEnableWriteAPI;


        angular.extend($scope, {
            bounds: {
                southWest: {
                    lat:-35,
                    lng: -35
                },
                northEast: {
                    lat:35,
                    lng:35
                }
            },
            hostmap: {
                autoDiscover: true,
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
            $log.log(wgServer + wgScriptPath);
            $http({
                    method: 'GET',
                    cache: true,
                    url: APIPath + '/Special:Ask/-5B-5BCategory:Hosting-5D-5D-20/-3FLocation/-3FHostingDescription/-3FCouchSurfing/-3FBeWelcome/-3FWarmShowers/format=json/searchlabel=hosts/prettyprint=yes/offset=0'
            }).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    $log.log("Markers->get()->respond:");
                    $log.log(data);
                    if(data.results) {

                        angular.forEach(data.results, function(place) {

                            var user = '<h5><a href="' + place.fullurl + '" target="_blank">' + place.fulltext.replace(/User:/g , "") + '</a></h5>';
                            var description = place.printouts.HostingDescription ? place.printouts.HostingDescription[0] + "<br/>" : "";
                            var bewelcome = place.printouts.BeWelcome[0] ? "<a href=http://bewelcome.org/members/" + place.printouts.BeWelcome[0].fulltext + ' target="_blank">BeWelcome</a><br/>' : "";
                            var couchsurfing = place.printouts.CouchSurfing[0] ? "<a href=https://couchsurfing.org/people/" + place.printouts.CouchSurfing[0].fulltext +' target="_blank">CouchSurfing</a><br/>' : "";
                            var warmshowers = place.printouts.WarmShowers[0] ? "<a href=https://warmshowers.org/users/" + place.printouts.WarmShowers[0].fulltext + ' target="_blank">WarmShowers</a><br/>' : "";

                            $log.log(description);

                            $scope.marker_list.push({
                                lat:        place.printouts.Location[0].lat,
                                lng:        place.printouts.Location[0].lon,
                                layer:      'hosts',
                                message:   user + description + bewelcome + couchsurfing + warmshowers,
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

        // Get all users from the API
        $scope.fetch();

        $scope.addNewHostsLayer = function() {
            $scope.layers.overlays.newhosts = {
                name: 'New Hosts',
                type: 'group',
                visible: true,
            }
        };

        $scope.deleteNewHostsLayer = function() {
            delete this.layers.overlays.newhosts;
        };

        $scope.addhost = function() {
            $log.log("->addhost");

            $scope.addNewHostsLayer();

            $scope.layers.overlays.hosts.visible = false;

            var newMarker = {
                        lng : $scope.hostmap.lng,
                        lat : $scope.hostmap.lat,
                        layer : 'newhosts',
                        message: $templateCache.get('addMarkerForm.html'),
                        draggable: true,
                        focus: true,
                        riseOnHover: true
            };

            $scope.marker_list.push(newMarker);

            $scope.adding = true;

        };

        $scope.savehost = function() {
            $scope.marker_list[$scope.marker_list.length-1].layer = 'hosts';
            $scope.marker_list[$scope.marker_list.length-1].draggable = 'false';
            $scope.marker_list[$scope.marker_list.length-1].message = $scope.user.info;

            $scope.posthost();

            $scope.layers.overlays.hosts.visible = true;

            $scope.adding = false;

            $scope.deleteNewHostsLayer();
        };

        $scope.cancelhost = function() {
            $scope.marker_list.pop();

            $scope.adding = false;
            $scope.layers.overlays.hosts.visible = true;

            $scope.deleteNewHostsLayer();
        }

        $scope.posthost = function () {

            $http.post(
                APIPath + '/w/index.php?title=User:' + $scope.user.username + '&action=formedit',
                {
                    'wpSave': 1,
                    'Hosting[Location]': $scope.hostmap.lng + ', ' + $scope.hostmap.lng,
                    'Hosting[HostingDescription]': $scope.user.info,

                }).success(function(data){

                    $log.log( data );

                    $log.log("->posthost->success");

                    $scope.cancelhost();

                });
        }
        
        //Timeout for search input
        $log.log($scope.hostmap);
        var timeout;
        $scope.searchtimeout = function () {
            if(timeout) $timeout.cancel();
            timeout = $timeout($scope.searchaddress, 1000);
        }
        
        $scope.searchaddress = function () {
            
            $http.get('http://nominatim.openstreetmap.org/search?q=' + $scope.address.search.replace(/ /g , '+') + '&format=json&limit=1&email=contact@hitchwiki.org') .success(function(data) {
                if(data[0] && parseFloat(data[0].importance) > 0.5 ) {
                                        
                    var lon = parseFloat(data[0].lon);
                    var lat = parseFloat(data[0].lat);                    
                   
                    $scope.bounds.southWest.lat = parseFloat(data[0].boundingbox[0]);
                    $scope.bounds.northEast.lat = parseFloat(data[0].boundingbox[1]);
                    $scope.bounds.southWest.lng = parseFloat(data[0].boundingbox[2]);
                    $scope.bounds.northEast.lng = parseFloat(data[0].boundingbox[3]); 
                }
            });
        }
                                                                                                                                         
    });

}( mediaWiki, jQuery, angular ) );
