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

use Neos\FluidAdaptor\Core\ViewHelper\AbstractConditionViewHelper;

class IfViewHelper extends AbstractConditionViewHelper
{

    /**
     * Renders <f:then> child if $condition is true, otherwise renders <f:else> child.
     *
     * @param mixed $condition View helper condition
     * @return string the rendered string
     * @api
     */
    public function render($condition)
    {
        eval('$result = '.$condition.';');
        if ($result) {
            return $this->renderThenChild();
        } else {
            return $this->renderElseChild();
        }
    }
}
