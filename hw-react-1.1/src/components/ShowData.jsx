import BeliSymbol from '../images/BeliSymbol.jpg';

function ShowData({posterLuffy}) {
    return (
        <>
        <p>{posterLuffy.status}</p>
        <p>{posterLuffy.name}</p>
        <div className='posterPrice'>
            <img src={BeliSymbol} alt='Beli Symbol' className='beliSymbol'></img>
            <p className="price">{posterLuffy.price}</p>
        </div>
        </>
    )
}

export default ShowData;