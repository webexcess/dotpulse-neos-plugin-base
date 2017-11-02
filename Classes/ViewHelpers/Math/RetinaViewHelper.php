<?php
namespace Dotpulse\Base\ViewHelpers\Math;

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

class RetinaViewHelper extends AbstractViewHelper {


	/**
	 * @see AbstractViewHelper::isOutputEscapingEnabled()
	 * @var boolean
	 */
	protected $escapeOutput = TRUE;

	/**
	 * @param integer $a
	 * @return integer
	 */
	public function render($a) {
		$retina = round($a * 2);
		return $retina ? $retina : 99999;

	}
}
