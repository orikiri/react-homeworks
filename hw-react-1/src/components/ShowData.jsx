function ShowData({zoro}) {
    return (
        <>
        <p>Nickname: {zoro.nickname[0]}, also known as {zoro.nickname[1]}</p>
        <p>Affiliation: {zoro.affiliations}</p>
        <p>Birthday: {zoro.birthDate}</p>
        <p>Age before Timeskip: {zoro.ageBeforeTimeskip}</p>
        <p>Age after Timeskip: {zoro.ageAfterTimeskip}</p>
        <p>Strongest technic: {zoro.technic}</p>
        </>
    )
}

export default ShowData;
