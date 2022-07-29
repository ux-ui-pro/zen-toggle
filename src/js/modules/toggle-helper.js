export function ToggleHelper() {

    const inputs = document.querySelectorAll('.toggle input[type="checkbox"], .toggle input[type="radio"]')

    for (const input of inputs) {

        const e = input.parentElement,
              UA = navigator.userAgent

        if (/iPad|iPhone|iPod/.test(UA) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
            e.setAttribute('tabindex', '-1')
        }

        if (inputs) {

            input.addEventListener('click', () => {
                e.classList.remove('toggle--ripple')
                e.classList.add('toggle--ripple')
            })

        }

    }

}


