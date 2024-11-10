import './cube.styles.css'

const Cube = () => {
    return (
        <div className='cube-container'>
            <div className='cube '>
                <div className='face front shadow-custom'>
                    <span>Bonjour</span>
                </div>
                <div className='face back shadow-custom'>Rêve</div>
                <div className='face right shadow-custom'>Exquis</div>
                <div className='face left shadow-custom'>Étincelle</div>
                <div className='face top shadow-custom'>Plaisir</div>
                <div className='face bottom'>Époustouflant</div>
            </div>
        </div>
    )
}
export default Cube
