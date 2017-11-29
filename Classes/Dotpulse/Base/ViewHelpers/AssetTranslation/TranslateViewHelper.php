<?php
namespace Dotpulse\Base\ViewHelpers\AssetTranslation;

use TYPO3\Flow\Annotations as Flow;
use TYPO3\Fluid\Core\ViewHelper\AbstractViewHelper;
use Dotpulse\Base\Eel\Helper\AssetTranslationHelper;
use TYPO3\TypoScript\ViewHelpers\TypoScriptContextTrait;

class TranslateViewHelper extends AbstractViewHelper
{
    use TypoScriptContextTrait;

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
