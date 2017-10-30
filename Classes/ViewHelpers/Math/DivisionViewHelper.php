<?php
namespace Dotpulse\Base\ViewHelpers\Math;

use Neos\Flow\Annotations as Flow;

class DivisionViewHelper extends \Neos\FluidAdaptor\Core\ViewHelper\AbstractViewHelper {


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
		return round($a / $b);
	}
}
