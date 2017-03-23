<?php
namespace Dotpulse\Base\ViewHelpers;

use TYPO3\Flow\Annotations as Flow;

class IsExternalViewHelper extends \TYPO3\Fluid\Core\ViewHelper\AbstractViewHelper {

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
