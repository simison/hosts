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
    <div ng-app="hostmapapp">
        <div id="HWHostmap" ng-controller="hostmapController" class="adding-marker-{{adding}}">
            
            <input type="search" placeholder="Search for an address" ng-model="address.search" ng-change="searchtimeout()">
            <br />
            <br />

            <input type="text" placeholder="user.id" ng-model="user.id">
            <br><input type="text" placeholder="user.username" ng-model="user.username">
            <br><input type="text" placeholder="wgEnableAPI" ng-model="wgEnableAPI">
            <br><input type="text" placeholder="wgEnableWriteAPI" ng-model="wgEnableWriteAPI">

            <div id="hostmap-toolbar" class="form-inline">
                <button type="button" class="btn btn-default" ng-click="addhost()" >Add myself</button>
                <a href="<?php echo $this->data['HostsMapTemplate']->getTitle()->escapeFullURL() ?>" class="btn btn-default">Reload</a>
            </div>

            <div ng-class="hostmapclass">

                <leaflet center="hostmap" markers="marker_list" layers="layers" bounds="bounds"></leaflet>

            </div>
            <div ng-class="sidebarclass" ng-show="adding">
                <h4>Add Myself</h3>
                <textarea ng-model="user.info"></textarea>
                <br />
                <br />
                <button type="button" class="btn btn-default btn-sm" ng-click="savehost()" >Save myself</button>
                <button type="button" class="btn btn-default btn-sm" ng-click="cancelhost()" >Cancel</button>
            </div>

            <script type="text/ng-template" id="addMarkerForm.html">
                <p>Hey ! Thanks for adding a place in this map. Choose wisely a location.</p>
            </script>

        </div>
    </div>
    <?php

        } // execute()
} // class