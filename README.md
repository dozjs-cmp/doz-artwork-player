# doz-artwork-player
An image with an audio player component

## Install
```
npm install doz-artwork-player
```

Live <a href="https://dozjs-cmp.github.io/doz-artwork-player/dist/index.html">here</a>

### Example
```javascript
import Doz from 'doz'
import 'doz-artwork-player'

new Doz({
    root: '#app',
    template(h) {
        return h`
            <doz-artwork-player
                image-url="https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/11/ed/13/11ed13a9-078a-b847-2508-d8dbfde4f48f/190295282363.jpg/600x600bb.jpg"
                audio-url="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/56/5e/0b/565e0b3d-5b2d-9e38-a702-4958d9ec9b6c/mzaf_8755686943666081226.plus.aac.p.m4a"
            />
        `
    }
});
```

## Props
| Name | Default | Description |
| ---- | ------- | ----------- |
| audio-url |  | audio url |
| image-url |  | image url |
| height | 100px  | component height |
| width | 100px | component width |
| border-radius | 8px | component border radius |

## WebComponent
Usage with as WebComponent
```html
<dwc-doz-artwork-player 
    audio-url="..." 
    image-url="..."
    border-radius="50%"
></dwc-doz-artwork-player>
```

#### CDN unpkg
```html
<script src="https://unpkg.com/doz-artwork-player/dist/bundle.min.js"></script>
```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/dozjs-cmp/doz-artwork-player/blob/master/CHANGELOG.md">here</a>

## License
doz-artwork-player is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>