angular.module("hostmapapp", ["leaflet-directive"]);
function hostmapController($scope) {
    
    angular.extend($scope, {    
        hostmap: {
            lat: 38.71,
            lng: -9.1470,
            zoom: 8
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
        marker_list: [  ]
    });
    
    $scope.addhost = function() { 
                $scope.marker_list.push({
                    lng : $scope.hostmap.lng,
                    lat : $scope.hostmap.lat,
                    layer : 'hosts',
                    message: '<p>Please tell us about this place : </p><textarea> </textarea><br /><button class="btn btn-default" type="button">OK</button>',
                    //draggable: true,
                    focus:true
                });
    }
    

};