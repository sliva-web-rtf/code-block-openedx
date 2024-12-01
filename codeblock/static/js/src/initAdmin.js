/* Javascript for CodeBlockXBlock. */
function CodeBlockAdminXBlock(runtime, element) {
  /**
   * @type {HTMLIFrameElement | null}
   */
  var _element = null;

  /**
   * 
   * @returns {HTMLIFrameElement | null}
   */
  function getNode() {
      if (_element) {
          return _element
      }

      _element = $(element)[0].querySelector('iframe[data-codeblock-admin]')
      return _element;
  }

  function initAppData(runtime, element) {
      const node = getNode()

      if (!node) {
          throw new Error('App init error (node not found)')
      }
      const infoUrl = runtime.handlerUrl(element, 'info')

      node.contentWindow.window.xblockProxy = {
          infoUrl,
          baseUrl: window.location.origin,
      }
  }

  function initResizeObserver() {
      const node = getNode()

      const observer = new ResizeObserver((entries) => {
          for (const entry of entries) {
              for (const bbSize of entry.borderBoxSize) {
                  node.style.height = `${bbSize.blockSize}px`
              }
          }
      })

      if (!node) {
          return
      }
      observer.observe(node.contentDocument.body)
      node.addEventListener('load', () => queueMicrotask(() => observer.observe(node.contentDocument.body)))
  }

  $(function () {
      initAppData(runtime, element)
      initResizeObserver()
  });
}
