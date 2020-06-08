import {Component} from "doz";
import PlaySVG from './play-svg'
import PauseSVG from './pause-svg'

const STATE = {
    PLAY: 'PLAY',
    PAUSE: 'PAUSE'
}

export default class extends Component {

    constructor(o) {
        super(o);

        this.props = {
            title: '',
            imageUrl: '',
            audioUrl: '',
            height: '100px',
            width: '100px',
            borderRadius: '8px',
            _state: STATE.PAUSE,
            _progress: 0
        }

        this.propsListener = {
            _state(v) {
                if (v === STATE.PAUSE) {
                    this.props._progress = 0;
                }
            }
        }
    }

    template(h) {
        return h`

            <style> 
                * {
                    box-sizing: border-box;
                }
                
                :component {
                    position: relative;
                    display: block;
                    width: ${this.props.width};
                    height: ${this.props.height};
                    background: url("${this.props.imageUrl}") center;
                    background-size: cover;
                    border-radius: ${this.props.borderRadius};
                    overflow: hidden;
                }

                .dap-controls {
                    display: flex;
                    align-items: center;
                    text-align: center;
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    left: 0;
                    top: 0;
                    background: rgb(0,0,0);
                    background: radial-gradient(circle, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0) 70%);
                    cursor: pointer;
                }

                .dap-controls svg {
                    width: 40%;
                    fill: #fff;
                    transition: all 250ms;
                    opacity: .75;
                }

                .dap-controls:hover svg{
                    width: 60%;
                    opacity: 1;
                }
                
                .dap-controls-button {
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .dap-controls .dap-controls-progress {
                    width: 0; 
                    height: 100%; 
                    background: #000; 
                    position: absolute; 
                    bottom: 0; 
                    left: 0;
                    transition: all 500ms;
                    opacity: .4;
                    box-shadow: inset -1px 0 0 1px #fff;
                }
            </style>

            <div class="dap-controls" onclick="${this.toggle}">
                <${PlaySVG} d-show="${this.props._state === STATE.PAUSE}" class="dap-controls-button"/>
                <${PauseSVG} d-show="${this.props._state === STATE.PLAY}" class="dap-controls-button"/>
                <div style="width: ${this.props._progress}%" class="dap-controls-progress"></div>
            </div>
        `
    }

    toggle() {
        if (this.props._state === STATE.PLAY)
            this.stop();
        else
            this.play();
    }

    play() {
        this.createGlobalPlayer().play().then();
    }

    stop() {
        this.destroyGlobalPlayer();
    }

    createGlobalPlayer() {
        this.destroyGlobalPlayer();
        window.__dozArtworkPlayer = new Audio(this.props.audioUrl);
        window.__dozArtworkPlayer.addEventListener('playing', () => {
            this.props._state = STATE.PLAY;
        });
        window.__dozArtworkPlayer.addEventListener('pause', () => {
            this.props._state = STATE.PAUSE;
        });
        window.__dozArtworkPlayer.addEventListener('ended', () => {
            this.props._state = STATE.PAUSE;
        });
        window.__dozArtworkPlayer.addEventListener('suspend', () => {
            this.props._state = STATE.PAUSE;
        });
        window.__dozArtworkPlayer.addEventListener('timeupdate', () => {
            if (window.__dozArtworkPlayer)
                this.props._progress = window.__dozArtworkPlayer.currentTime / window.__dozArtworkPlayer.duration * 100;
        });
        return window.__dozArtworkPlayer;
    }

    destroyGlobalPlayer() {
        if (window.__dozArtworkPlayer) {
            window.__dozArtworkPlayer.src = '';
            window.__dozArtworkPlayer = null;
            this.props._state = STATE.PAUSE;
        }
    }

};