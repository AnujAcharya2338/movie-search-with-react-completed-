
function Moviecard({movie}){

    function onFavClick(){
        alert("Clicked")
    }


    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie.overlay">
                <button className="favorite-btn" onClick={onFavClick}>
                ❤️
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3 className={movie.title}></h3>
            <p className={movie.release_date}></p>
        </div>

    </div>
}

export default Moviecard