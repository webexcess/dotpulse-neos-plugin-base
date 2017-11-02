<?php
namespace Dotpulse\Base\ViewHelpers;

/*
 * This file is part of the Dotpulse.Base package.
 *
 * (c) Contributors of the Neos Project - www.neos.io
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */

use Neos\Flow\Annotations as Flow;
use Neos\FluidAdaptor\Core\ViewHelper\AbstractViewHelper;

class IsExternalViewHelper extends AbstractViewHelper {


	/**
	 * @see AbstractViewHelper::isOutputEscapingEnabled()
	 * @var boolean
	 */
	protected $escapeOutput = TRUE;

	/**
	 * @param integer $url
	 * @return integer
	 */
	public function render($url) {
		$domain = $_SERVER['HTTP_HOST'];
		$url_host = parse_url($url, PHP_URL_HOST);

		return ( $url_host == $domain || empty($url_host) ) ? false : true;
	}
}
