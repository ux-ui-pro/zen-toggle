export default function toggleHelper() {

    const inputs = document.querySelectorAll('.toggle input[type="checkbox"], .toggle input[type="radio"]')

    if (inputs) {

        inputs.forEach(input => {

            let e = input.parentElement

            if(input.disabled) {
                e.classList.add('toggle--disabled')
            }

            e.setAttribute('tabindex', '-1') // fix for Safari

            input.addEventListener('click', () => {
                e.classList.add('toggle--ripple')
                setTimeout(() => e.classList.remove('toggle--ripple'), 325)
            })

        })

    }
}


