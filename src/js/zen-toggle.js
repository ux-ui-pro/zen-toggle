const ZenToggle = () => {
    let inputs = document.querySelectorAll('.toggle input[type="checkbox"], .toggle input[type="radio"]')

    for (let input of inputs) {
        let e = input.parentElement,
            UA = navigator.userAgent

        if (/iPad|iPhone|iPod/.test(UA) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
            e.setAttribute('tabindex', '-1')
        }

        if (input) {
            input.addEventListener('click', () => {
                e.classList.remove('toggle--ripple')
                e.classList.add('toggle--ripple')
            })
        }
    }
}

export {
    ZenToggle
}
