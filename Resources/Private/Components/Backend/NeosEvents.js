/*
Neos.PageLoaded
Whenever the page reloads by Ajax.

Neos.PreviewModeActivated
When the backend switches from edit to preview mode.

Neos.PreviewModeDeactivated
When the backend switches from preview to edit mode.

Neos.ContentModuleLoaded
When the content module is loaded (i.e. when a user is logged in).

Neos.NodeCreated
When a new node was added to the document. The event has a reference to the DOM element
in event.detail.element. Additional information can be fetched through the element’s attributes.

Neos.NodeRemoved
When a new node was removed from the document. The event has a reference to the DOM element
in event.detail.element. Additional information can be fetched through the element’s attributes.

Neos.NodeSelected
When a node existing on the page is selected. The event has a reference to the DOM element in
event.detail.element and the node model object in event.detail.node. Additional information can
be fetched through the node model.

Neos.LayoutChanged
When the content window layout changes (when panels that alter the body margin are opened/closed).

Neos.NavigatePanelOpened
When the navigate panel is opened.

Neos.NavigatePanelClosed
When the inspector panel is closed.

Neos.InspectorPanelOpened
When the navigate panel is opened.

Neos.InspectorPanelClosed
When the inspector panel is closed.

Neos.EditPreviewPanelOpened
When the edit/preview panel is opened.

Neos.EditPreviewPanelClosed
When the edit/preview panel is closed.

Neos.MenuPanelOpened
When the menu panel is opened.

Neos.MenuPanelClosed
When the menu panel is closed.

Neos.FullScreenModeActivated
When the backend switches to fullscreen mode.

Neos.FullScreenModeDeactivated
When the backend leaves the fullscreen mode.
*/
