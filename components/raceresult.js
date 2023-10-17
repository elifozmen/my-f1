import Image from "next/image";

async function getRace() {
    const res = await fetch(`http://ergast.com/api/f1/current/last/results.json`)
    console.log("RES", res.json);
    return res.json()
}

export default async function Race(){
    const constData = await getRace();
    let raceList = constData.MRData.RaceTable.Races[0].Results
    let resultList = constData.MRData.RaceTable.Races
    console.log("list", typeof raceList);

    return (
        <div className="home-item">
            <div className="raceName"> {
                resultList.map((a) => {
                    return <div> 
                        <h1> Race Results -{" " + a.raceName}</h1>
                    </div>

                }

                )
            } 

            </div> 

            <div className="raceList" id="driverComp"> 
                {
                    raceList.map((x) => {
                        const image = `/${x.Driver.driverId}.png`
                        return <div className="raceItem"> 
                        <Image
                            src={image}
                            width={60}
                            height={60}
                        
                        />

                        <div className="position">{x.Driver.givenName + " " + x.Driver.familyName} </div>
                        <div className="position" id="homePosition">{" P" + x.position} </div>
                        </div>
                    })
                }
            </div>

        </div>
    )

}