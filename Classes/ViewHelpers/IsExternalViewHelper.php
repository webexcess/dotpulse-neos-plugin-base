<?php
namespace Dotpulse\Base\ViewHelpers;

use Neos\Flow\Annotations as Flow;

class IsExternalViewHelper extends \Neos\FluidAdaptor\Core\ViewHelper\AbstractViewHelper {


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
