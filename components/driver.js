import Image from "next/image";

async function getDriver() {
    const res = await fetch(`http://ergast.com/api/f1/2022/drivers.json`)
    console.log("RES", res.json)
    return res.json()
}

export default async function Driver() {
    const constData = await getDriver();
    let driverList = constData.MRData.DriverTable.Drivers 
    console.log("list", typeof driverList);
    return(
        <div className="home-item"> 
            <h1>Drivers </h1>
            <div className="driverList" id="driverComp">

                {
                    driverList.map((x) => {
                        const image = `/${x.driverId}.png`
                        return <div className="driverItem"> 
                            <Image
                                src={image}
                                width={60}
                                height={60}
                            />
                            {x.givenName + " " + x.familyName}
                        </div>
                    }

                    )
                }

            </div>
        </div>

    )
}