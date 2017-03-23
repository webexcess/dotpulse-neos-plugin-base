<?php
namespace Dotpulse\Base\ViewHelpers\Math;

use TYPO3\Flow\Annotations as Flow;

class RetinaViewHelper extends \TYPO3\Fluid\Core\ViewHelper\AbstractViewHelper {

	/**
	 * @param integer $number
	 * @return integer
	 */
	public function render($a) {
		$retina = round($a * 2);
		return $retina ? $retina : 99999;

	}
}
