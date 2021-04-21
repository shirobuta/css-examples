class ProfileCard extends HTMLElement {
    static get observedAttributes() {
        return ['liked'];
    }
    // A getter/setter for a disabled property.
    get liked() {
        return this.hasAttribute('liked');
    }

    set liked(val) {
        // Reflect the value of the disabled property as an HTML attribute.
        if (val) {
            this.setAttribute('liked', '');
        } else {
            this.removeAttribute('liked');
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log({
            name,
            oldValue,
            newValue
        })
    }

    constructor() {
        super();
        this.innerHTML = `
        <div class="row-avatar">
            <img class="avatar" src="images/avatar.png" alt="">
            <div>
                <h4>${this.getAttribute('name')}</h4>
                <p>${this.getAttribute('position')}</p>
                <button class="like">Like</button>
            </div>
        </div>
        <p>${this.getAttribute('description')}</p>`;

        this.querySelector('button.like').addEventListener('click', () => {
            if (!this.liked) {
                this.setAttribute('liked', '');
            } else {
                this.removeAttribute('liked');
            }
        })

    }
}

customElements.define('profile-card', ProfileCard);