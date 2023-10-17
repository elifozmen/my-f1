import Image from "next/image";

async function getConstructor() {
    const res = await fetch(`http://ergast.com/api/f1/2022/constructors.json`)
    console.log("RES", res.json);
    return res.json()
}

export default async function Constructor() {
    const constData = await getConstructor();
    let constructorList = constData.MRData.ConstructorTable.Constructors 
    console.log("list", typeof constructorList)

    return(

        <div className="home-item" id="homeComponents">
            <h1> Constructors</h1>
            <div className="constList" id="driverComp"> 

            { 
            
                constructorList.map( (x) => {
                    const image = `/${x.constructorId}.png`
                    return <div className="constItem">

                        <Image
                            src={image}
                            width={60}
                            height={60}
                        
                        />  

                        {x.name}

                    </div>

                } ) } 



            </div>
        </div>



    )}