<?php
namespace Dotpulse\Base\ViewHelpers\Math;

use TYPO3\Flow\Annotations as Flow;

class RetinaViewHelper extends \TYPO3\Fluid\Core\ViewHelper\AbstractViewHelper {


	/**
	 * @see AbstractViewHelper::isOutputEscapingEnabled()
	 * @var boolean
	 */
	protected $escapeOutput = TRUE;

	/**
	 * @param integer $number
	 * @return integer
	 */
	public function render($a) {
		$retina = round($a * 2);
		return $retina ? $retina : 99999;

	}
}
