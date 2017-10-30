<?php
namespace Dotpulse\Base\ViewHelpers\Math;

use Neos\Flow\Annotations as Flow;

class RetinaViewHelper extends \Neos\FluidAdaptor\Core\ViewHelper\AbstractViewHelper {


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
