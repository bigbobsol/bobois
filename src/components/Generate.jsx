import { ImageGenerationScript } from './imageGenerationScript.js'

function GenerateSection() {
    return (
        <div className='text_lower'>
            <form 
            className='form'
            onSubmit={ImageGenerationScript}>
                <input 
                    type='number'
                    className='input' 
                    placeholder=' EXAMPLE: #659'
                    id='input-nftId' 
                    autoComplete='off'
                    />
                <br/>
                <select
                className='input'
                defaultValue=""
                id='chooseStyle'>
                    <option value="">CHOOSE STYLE</option>
                    <option value="transparent">TRANSPARENT</option>
                    <option value="background">BACKGROUND</option>
                </select>
                <a 
                    href="https://media.discordapp.net/attachments/1185256400906104923/1190263461817634856/Datcat_Showcase.png" 
                    id="link"
                    alt='outputImage'>
                </a>
                <button
                    type='submit'
                    id='submit_button' 
                    className='submit_button'
                    >GENERATE</button>
                    <p className='outputText hide' id='text-output'>TEST</p>
            </form>
                    </div>
)
}

export default GenerateSection