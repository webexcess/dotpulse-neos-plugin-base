<?php
namespace Dotpulse\Base\ViewHelpers\ExtendedIf;

use TYPO3\Fluid\Core\ViewHelper\AbstractConditionViewHelper;

class AndViewHelper extends AbstractConditionViewHelper
{

    /**
     * Renders <f:then> child if $condition is true, otherwise renders <f:else> child.
     *
     * @param boolean $condition View helper condition
     * @param boolean $and View helper condition
     * @return string the rendered string
     * @api
     */
    public function render($condition, $and)
    {
        if ($condition && $and) {
            return $this->renderThenChild();
        } else {
            return $this->renderElseChild();
        }
    }
}
