<?php
namespace Dotpulse\Base\Eel\Helper;

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
use Neos\Neos\Domain\Service\ConfigurationContentDimensionPresetSource;
use Neos\Eel\ProtectedContextAwareInterface;

class AssetTranslationHelper implements ProtectedContextAwareInterface {


    /**
     * @Flow\Inject
     * @var ConfigurationContentDimensionPresetSource
     */
    protected $configurationContentDimensionPresetSource;

    /**
     * @Flow\InjectConfiguration("AssetTranslation.BySeparator")
     * @var string
     */
    protected $translateBySeparator;

    /**
     * Wrap the incoming string in curly brackets
     *
     * @param $text string
     * @param $node \Neos\ContentRepository\Domain\Model\Node
     * @return string
     */
    public function translate($text, $node) {
        $allDimensionPresets = $this->configurationContentDimensionPresetSource->getAllPresets();
        $targetDimensionsToMatch = $node->getContext()->getTargetDimensions();

        if (isset($this->translateBySeparator) && strpos($text, $this->translateBySeparator)!==false && is_array($allDimensionPresets) && array_key_exists('language', $allDimensionPresets)) {
            $dimensions = array();
            $dimensionIndex = 0;
            foreach ($allDimensionPresets['language']['presets'] as $dimension => $preset) {
                $dimensions[$dimension] = $dimensionIndex;
                $dimensionIndex++;
            }

            $textArr = explode($this->translateBySeparator, $text);
            array_walk($textArr, function (&$item) use ($textArr) {
                $item = trim($item);
                if (empty($item)) {
                    $item = $textArr[0];
                }
            });

            if (array_key_exists($dimensions[$targetDimensionsToMatch['language']], $textArr)) {
                return $textArr[$dimensions[$targetDimensionsToMatch['language']]];
            }
            return $textArr[0];
        }

        return $text;
    }

    /**
     * All methods are considered safe, i.e. can be executed from within Eel
     *
     * @param string $methodName
     * @return boolean
     */
    public function allowsCallOfMethod($methodName) {
        return TRUE;
    }

}
