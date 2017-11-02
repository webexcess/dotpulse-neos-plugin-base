<?php
namespace Dotpulse\Base\ViewHelpers\AssetTranslation;

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
use Dotpulse\Base\Eel\Helper\AssetTranslationHelper;
use Neos\Fusion\ViewHelpers\FusionContextTrait;

class TranslateViewHelper extends AbstractViewHelper
{
    use FusionContextTrait;

    /**
     * @Flow\Inject()
     * @var AssetTranslationHelper
     */
    protected $assetTranslation;

    /**
     * @param string $text
     * @return string
     * @api
     */
    public function render($text)
    {
        $baseNode = $this->getContextVariable('documentNode');
        return $this->assetTranslation->translate($text, $baseNode);
    }
}
