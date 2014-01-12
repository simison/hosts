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
    <div id="hostmap-wrapper" ng-controller="hostmapController">

    <input type="text" placeholder="user.id" ng-model="user.id">
<br><input type="text" placeholder="user.username" ng-model="user.username">
<br><input type="text" placeholder="wgEnableAPI" ng-model="wgEnableAPI">
<br><input type="text" placeholder="wgEnableWriteAPI" ng-model="wgEnableWriteAPI">

        <div id="hostmap-toolbar" class="form-inline">
            <button type="button" class="btn btn-default" ng-click="addhost()" >Add myself</button>
            <a href="<?php echo $this->data['HostsMapTemplate']->getTitle()->escapeFullURL() ?>" class="btn btn-default">Reload</a>
        </div>

        <leaflet center="hostmap" markers="marker_list" layers="layers"></leaflet>

        <script type="text/ng-template" id="addMarkerForm.html">
            <form class="form-horizontal" role="form" style="width: 500px;">
                <div class="form-group">
                    <label for="web_bw" class="sr-only">BeWelcome</label>
                    <input type="text" class="form-control" id="web_bw" placeholder="BeWelcome username">
                </div>
                <div class="form-group">
                    <label for="web_cs" class="sr-only">CouchSurfing</label>
                    <input type="text" class="form-control" id="web_cs" placeholder="CouchSurfing username">
                </div>
                <div class="form-group">
                    <label for="web_ws" class="sr-only">WarmShowers</label>
                    <input type="text" class="form-control" id="web_ws" placeholder="WarmShowers username">
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-default">Add</button>
                </div>
            </form>
        </script>

    </div>
    </div>
    <?php

        } // execute()
} // class