<?php
namespace Dotpulse\Base\ViewHelpers;

use TYPO3\Fluid\Core\ViewHelper\AbstractConditionViewHelper;

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
