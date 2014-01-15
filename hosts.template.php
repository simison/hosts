<?php
/**
 * @file
 * @ingroup Templates
 */
if( !defined( 'MEDIAWIKI' ) ) {
        die( -1 );
}

/**
 * HTML template for Special:MySpecialPage
 * @ingroup Templates
 */
class HostsMapTemplate extends QuickTemplate {
        /**
         * Main processing is done here.
         * You can, should and want to use functions like wfMsg() here, because
         * QuickTemplate's own methods aren't that good.
         */
        public function execute() {
    ?>
    <div ng-app="hostmapapp" ng-controller="hostmapController">
        <div id="HWHostmap" class="sidebar-{{adding}}">

            <div id="hostmap-toolbar">
                <input type="search" id="hostmap-search" placeholder="Search..." ng-model="address.search" ng-change="searchtimeout()">
                <div class="hostmap-add-wrap">
                    <button type="button" ng-hide="adding" id="hostmap-add" class="btn btn-default" ng-click="addhost()" >Add yourself</button>
                </div>
            </div>

            <div ng-class="hostmapclass">

                <leaflet center="hostmap" markers="marker_list" layers="layers" bounds="bounds"></leaflet>

            </div>
            <div class="hostmap-sidebar" ng-show="adding">
                <h4>Add Myself</h3>
                <textarea ng-model="user.info"></textarea>
                <br />
                <br />
                <button type="button" class="btn btn-primary btn-sm" ng-click="savehost()" >Add</button>
                <button type="button" class="btn btn-default btn-sm" ng-click="cancelhost()">Cancel</button>
            </div>

            <script type="text/ng-template" id="addMarkerForm.html">
                <p>Hey ! Thanks for adding a place in this map. Choose wisely a location.</p>
            </script>

        </div>

        <input type="text" placeholder="user.id" ng-model="user.id"><br>
        <input type="text" placeholder="user.username" ng-model="user.username">
    </div>
    <?php

        } // execute()
} // class