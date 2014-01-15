<?php
/**
 * Hitchwiki Hosts extension
 *
 * For more info see ttps://github.com/Hitchwiki/hosts
 *
 * @file
 * @ingroup Extensions
 * @author Remi, Mikael Korpela
 */

$wgExtensionCredits['other'][] = array(
	'path' => __FILE__,
	'name' => 'Hosts',
	'author' => array(
		'Remi',
		'Mikael Korpela',
	),
	'version'  => '1.0.0',
	'url' => 'https://github.com/Hitchwiki/hosts',
	'descriptionmsg' => 'hosts-desc',
);


/* Setup */

$dir = dirname( __FILE__ ) . '/';

// Register files
$wgAutoloadClasses['HostsHooks'] = $dir . 'hosts.hooks.php';
$wgAutoloadClasses['SpecialHosts'] = $dir . 'specials/SpecialHosts.php';
$wgAutoloadClasses['HostsMapTemplate'] = $dir . 'hosts.template.php';
$wgExtensionMessagesFiles['Hosts'] = $dir . 'hosts.i18n.php';
$wgExtensionMessagesFiles['HostsAlias'] = $dir . 'hosts.i18n.alias.php';


// Register hooks
#$wgHooks['NameOfHook'][] = 'HostsHooks::onNameOfHook';

// Register special pages
$wgSpecialPages['Hosts'] = 'SpecialHosts';
$wgSpecialPageGroups['Hosts'] = 'other';

// Register modules

$wgResourceModules['ext.hosts'] = array(
	'scripts' => array(
		'modules/vendor/jquery/jquery.min.js',
	    'modules/vendor/angular/angular.min.js',
	    'modules/vendor/angular-leaflet/dist/angular-leaflet-directive.min.js',
	    'modules/vendor/angular-animate/angular-animate.min.js',
	    'modules/vendor/angular-route/angular-route.min.js',
	   // 'modules/vendor/angular-mocks/angular-mocks.js',
		'modules/vendor/leaflet-dist/leaflet.js',
		'modules/vendor/leaflet.markerclusterer/dist/leaflet.markercluster.js',
		'modules/vendor/typeahead.js/dist/typeahead.min.js',
		'modules/ext.hosts.js',
	),
	'styles' => array(
		'modules/vendor/leaflet-dist/leaflet.css',
		'modules/vendor/leaflet.markerclusterer/dist/MarkerCluster.css',
		'modules/vendor/leaflet.markerclusterer/dist/MarkerCluster.Default.css',
		'modules/ext.hosts.css',
	),
	'messages' => array(
	),
	'dependencies' => array(
	   // 'jquery',
	),

	'localBasePath' => $dir,
	'remoteExtPath' => 'hosts',
);

/* Configuration */

// Enable Foo
//$wgHostsEnableMap = true;
