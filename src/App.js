import React from 'react';
import MediaQuery from 'react-responsive'
import TextSection from './components/Text.jsx';
import GenerateSection from './components/Generate.jsx';
import ImageSection from './components/OutputImage.jsx';
import PoweredFooter from './components/Footer.jsx';

//import './App.css';
import './ScreenSizes.css';

function DefaultScreen() {
    return (
        <div className='app'>       
            <div className='hero'>
                <div className='text_left'>
                        <TextSection />
                        <GenerateSection />
                </div>
                    <ImageSection />
            </div>
            <PoweredFooter />
        </div>
    )
}

function MobileScreen() {
    return (
        <div className='app'>
            <div className='hero'>
                <TextSection />
                <ImageSection />
                <GenerateSection />
            </div>       
        </div>
    )
}

const App = () => {
    return (
        <div className='app'>

            <MediaQuery minWidth={768}>
                <DefaultScreen />
            </MediaQuery>

            <MediaQuery maxWidth={767}>
                <MobileScreen />
            </MediaQuery>

        </div>
    );
}

export default App;



/*<div className='hero'>
                
                <div className='text_left'>
                    
                    <div className='text_upper'>
                        <h1 className='headline'>QUEKZMAS GENERATOR</h1>
                        <ul className='list'>
                            <li>INPUT YOUR NFT ID</li>
                            <li>HIT THE GENERATE BUTTON</li>
                            <li>DOWNLOAD YOUR STICKER</li>
                        </ul>
                    </div>
                    <div className='text_lower'>
                            <input 
                                type='number'
                                className='input' 
                                placeholder=' EXAMPLE: #659'
                                id='input-nftId' 
                                autoComplete='off'
                            />
                            <br/>
                            <a 
                                href="https://media.discordapp.net/attachments/1185256400906104923/1185850181221105775/anon-quekz.png" 
                                id="link"
                                alt='outputImage'>
                            </a>
                            <button
                            id='submit_button' 
                            className='submit_button'
                            onClick={() => {
                                ImageGenerationScript()
                            }}
                            >GENERATE</button>
                        <p className='outputText hide' id='text-output'>TEST</p>
                    </div>
                </div>
                <div className='image_right'>
                    <img 
                    className='output-image' 
                    id='output' 
                    alt='outputImage'
                    src='https://media.discordapp.net/attachments/1185256400906104923/1185850181221105775/anon-quekz.png'
                    draggable='false'/>
                </div>
            </div>
            <div className='footer'>
                <p
                className='poweredText'
                id='bottomCreditText'
                >POWERED BY BOBOIS CLUBHOUSE</p>
            </div> */