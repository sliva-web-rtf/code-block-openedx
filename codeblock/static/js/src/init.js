/* Javascript for CodeBlockXBlock. */
function CodeBlockXBlock(runtime, element) {
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

        _element = (element[0] || element).querySelector('[data-codeblock]')
        return _element;
    }

    function initAppData(runtime, element) {
        const node = getNode()

        if (!node) {
            throw new Error('App init error (node not found)')
        }

        node.onload = () => {
            const infoUrl = runtime.handlerUrl(element, 'info')
            setTimeout(() => {
                node.contentWindow.postMessage({ infoUrl, baseUrl: window.location.origin }, '*')
            }, 1000)
        }
    }

    function initResizeObserver() {
        const node = getNode()

        if (!node) {
            return
        }

        setTimeout(() => {
            /** @type { HTMLDivElement | null } */
            const rootNode = node.contentDocument.querySelector('#root')

            if (!rootNode) {
                return;
            }

            const observer = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    for (const bbSize of entry.borderBoxSize) {
                        node.style.height = `${bbSize.blockSize}px`

                    }
                }
            })

            observer.observe(rootNode)
        }, 500)
    }

    $(function () {
        initAppData(runtime, element)
        initResizeObserver()
    });
}
