<?php
namespace Dotpulse\Base\ViewHelpers\Math;

use TYPO3\Flow\Annotations as Flow;

class MultiplicationViewHelper extends \TYPO3\Fluid\Core\ViewHelper\AbstractViewHelper {


	/**
	 * @see AbstractViewHelper::isOutputEscapingEnabled()
	 * @var boolean
	 */
	protected $escapeOutput = TRUE;

	/**
	 * @param integer $numbers
	 * @return integer
	 */
	public function render($a,$b) {
		return round($a * $b);
	}
}
