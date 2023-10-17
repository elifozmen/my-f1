import Image from "next/image";
import Navbar from 'components/navbar';

async function getConstructors() {
    const res = await fetch(`http://ergast.com/api/f1/2022/constructors.json`)
    console.log("RES", res.json);
    return res.json()
}

export default async function Elif() {
    const constData = await getConstructors();
    let constructorList = constData.MRData.ConstructorTable.Constructors 
    console.log("list", typeof constructorList)

    return(
        <main>
            <Navbar/>


            <div className="home-item">
            <h1> Constructors</h1>
            <div className="driverList" id="teamComp"> 

            { 
            
                constructorList.map( (x) => {
                    const image = `/${x.constructorId}.png`
                    return <div className="driverPageItem">

                        <Image
                            src={image}
                            width={60}
                            height={60}
                        
                        />  


                        <div className="driverInfo"> {x.name} </div>
                        <div className="driverInfo"> {x.nationality}</div>

                        

                    </div>

                } ) } 



            </div>
        </div>
        </main>

        



    )}