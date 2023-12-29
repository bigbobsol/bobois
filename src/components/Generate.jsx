import { ImageGenerationScript } from './imageGenerationScript.js'

function GenerateSection() {
    return (
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
                                href="https://media.discordapp.net/attachments/1185256400906104923/1190260080487186433/Datcat_Showcase.png" 
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
)
}

export default GenerateSection