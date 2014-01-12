1. Copy/clone hosts folder under /extensions/ in your MediaWiki installation.
2. Run bower install inside /hosts/
3. Add require_once( "$IP/extensions/Hosts/hosts.php" ); to your LocatSettings.php

To get API working:

4. Install SemanticWikiBundle extension http://www.mediawiki.org/wiki/Semantic_Bundle
5.

That's it. Happy hitching! :-)