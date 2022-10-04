import HeaderHost from "../components/HeaderHost";
import HostGradient from "../components/HostGradient";
import HomeHostFilter from "../components/HomeHostFilter";
import CardHomeContainer from "../components/CardHomeContainer";
import '../styles/pages/HomeHost.scss'

const HomeHost = () => {

    return (
        <div>
            <HeaderHost />
            <div className='gradienthome'>
                <HostGradient >Hoy</HostGradient>
            </div>
            <div className="h1_host">
                <h1 className="h1_host__h">Tus reservaciones</h1>
            </div>
            <HomeHostFilter/>
            <CardHomeContainer/>
        </div>
    )
}

export default HomeHost;