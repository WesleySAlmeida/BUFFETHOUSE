import './Banner.css'
import bannerImage from '../../assets/Banner.png'

function Banner() {
    return (
        <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="container">
                <div className="title-painel">
                    <h1>Buffet House</h1>
                </div>
            </div>
        </div>
    )
}

export default Banner