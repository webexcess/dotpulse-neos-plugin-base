<?php
namespace Dotpulse\Base\ViewHelpers\Iterator;

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
use Neos\FluidAdaptor\Core\ViewHelper\Exception as ViewHelperException;

class ImplodeViewHelper extends ExplodeViewHelper {

    /**
     * @var string
     */
    protected $method = 'implode';

    /**
     * Initialize the arguments.
     *
     * @return void
     * @api
     */
    public function initializeArguments()
    {
        $this->registerArgument('content', 'string', 'Array or array-convertible object to be imploded by glue');
        $this->registerArgument('glue', 'string', 'String used as glue in the string to be exploded.', false, ',');
    }

}
