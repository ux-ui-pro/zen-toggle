export default function rippleToggle() {
    const forFocus = document.querySelectorAll('.toggle input[type="checkbox"], .toggle input[type="radio"]')

    if (forFocus) {
        forFocus.forEach((toggles) => {

            let el = toggles.parentElement
            el.setAttribute('tabindex', '-1')

            toggles.addEventListener('click', function () {
                el.classList.add('toggle--ripple')

                setTimeout(() => {
                    el.classList.remove('toggle--ripple')
                }, 225)
            })
        })
    }
}


