import Image from "next/image";
import Navbar from '/components/navbar'

async function getDrivers() {
    const res = await fetch(`http://ergast.com/api/f1/2022/drivers.json`)
    console.log("RES", res.json)
    return res.json()
}

export default async function Enes() {
    const constData = await getDrivers();
    let driverList = constData.MRData.DriverTable.Drivers 
    console.log("list", typeof driverList);
    return(

        <main> 

            <Navbar></Navbar>

<div className="home-item"> 
            <h1>Drivers </h1>
            <div className="driverList" id="driverComp">

                {
                    driverList.map((y) => {
                        const image = `/${y.driverId}.png`
                        return <div className="driverPageItem"> 
                            <Image
                                src={image}
                                width={60}
                                height={60}
                            />


                            <div className="driverInfo"> {y.givenName + " " + y.familyName}</div>
                            <div className="driverInfo"> {y.permanentNumber}</div>
                            <div className="driverInfo"> {y.nationality}</div>
                            <div className="driverInfo"> {y.dateOfBirth}</div>

                            
                        </div>
                    }

                    )
                }

            </div>
        </div>

        </main>
        

    )
}