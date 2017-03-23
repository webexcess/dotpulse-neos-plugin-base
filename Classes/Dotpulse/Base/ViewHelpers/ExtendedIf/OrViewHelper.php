<?php
namespace Dotpulse\Base\ViewHelpers\ExtendedIf;

use TYPO3\Fluid\Core\ViewHelper\AbstractConditionViewHelper;

class OrViewHelper extends AbstractConditionViewHelper
{

    /**
     * Renders <f:then> child if $condition is true, otherwise renders <f:else> child.
     *
     * @param boolean $condition View helper condition
     * @param boolean $or View helper condition
     * @return string the rendered string
     * @api
     */
    public function render($condition, $or)
    {
        if ($condition || $or) {
            return $this->renderThenChild();
        } else {
            return $this->renderElseChild();
        }
    }
}
