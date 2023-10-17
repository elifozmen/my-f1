import Image from 'next/image';
import Navbar from '/components/navbar'

async function getRaceResults(){
    const res = await fetch(`http://ergast.com/api/f1/current/last/results.json`)
    console.log("RES", res.json);
    return res.json()
}

export default async function Race() {
    const constData = await getRaceResults();
    let raceList = constData.MRData.RaceTable.Races[0].Results 
    let resultList = constData.MRData.RaceTable.Races
    let resultList2 = constData.MRData.RaceTable
    console.log("list", typeof raceList);

    return(
        <main>
            <Navbar></Navbar>

            <div className="home-item">

                <h1> {
                    resultList.map((a) => {
                        return <div>
                            {a.raceName + " - " + a.Circuit.circuitName}
                        </div>
                    })}

                </h1>

                <div className="driverList" id="driverComp">
                    { raceList.map((x) => {
                        const imageD = `/${x.Driver.driverId}.png`
                        const imageX = `/${x.Constructor.constructorId}.png`
                        return <div className="driverPageItem">
                            <div className="driverInfo"> {"P" + x.position}
                                 </div>

                                 <Image

                                    src={imageD}
                                    width={60}
                                    height={60}
                                 />


                                 <div className="driverInfo">{x.Driver.givenName + " " + x.Driver.familyName} </div>
                                 <div className="driverInfo">{x.Driver.permanentNumber} </div>
                                 <div className="driverInfo">{x.Constructor.name} </div>
                                 <Image
                                 src={imageX}
                                 width={60}
                                 height={60}
                                 
                                 />
                            
                            
                            
                             </div>
                    })}

                </div>

            </div>


        </main>
    )
}