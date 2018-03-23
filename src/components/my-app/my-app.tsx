import { Component } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
  shadow: true
})
export class MyApp {

  render() {
    return <div class="box">{''}</div>
  }
}
