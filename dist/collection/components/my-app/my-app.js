export class MyApp {
    render() {
        return h("div", { class: "box" }, '');
    }
    static get is() { return "my-app"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:my-app:**/"; }
}
