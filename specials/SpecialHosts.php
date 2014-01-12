<?php
/**
 * Map SpecialPage for Hosts extension
 *
 * @file
 * @ingroup Extensions
 */

class SpecialHosts extends SpecialPage {
	public function __construct() {
        global $wgUser;
        $this->userName = $wgUser->getName(); // Define the private variable
		parent::__construct( 'Hosts' );
	}

	/**
	 * Shows the page to the user.
	 * @param string $sub: The subpage string argument (if any).
	 *  [[Special:HostsMap/subpage]].
	 */
	public function execute( $sub ) {
		$out = $this->getOutput();

        //$out->setRobotpolicy( 'noindex,nofollow' );

        $out->setArticleRelated( false );

		$out->setPageTitle( $this->msg( 'hosts-title' ) );

        // CSS/JS
        //$out->addInlineScript();
        $out->addModules( 'ext.hosts' );

        // Begin actual template stuff
        $template = new HostsMapTemplate();

        // $this is SpecialMySpecialPage object
        $template->setRef( 'HostsMapTemplate', $this );

        // In the template class, all the variables we define here can be
        // accessed by using $this->data['variable_name']
        // $template->set( 'keyname', 'value' );

        // et voilà!
        $out->addTemplate( $template );

	}

}
