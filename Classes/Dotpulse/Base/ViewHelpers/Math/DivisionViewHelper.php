<?php
namespace Dotpulse\Base\ViewHelpers\Math;

use TYPO3\Flow\Annotations as Flow;

class DivisionViewHelper extends \TYPO3\Fluid\Core\ViewHelper\AbstractViewHelper {

	/**
	 * @param integer $numbers
	 * @return integer
	 */
	public function render($a,$b) {
		return round($a / $b);
	}
}
