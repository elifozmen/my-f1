"use client";
import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react'


export default function Navbar() {
    var username = localStorage.getItem("username");
    const [searchText, setSearch] = useState('');
    const searchChange = event => {
        setSearch(event.target.value);
    };

    const credentialChange = () => {
        console.log(`searchText ${searchText}`);
    }


    return (
        <div className="navbar">
            <div className="logo">
                <Link href="/"> <Image
                    src="/f1icon.png"
                    width={70}
                    height={60}
                /></Link>

            </div>

            <div className="nav-list">
                <div className="nav-item"> <a href="/Constructors"> Constructors </a>
                </div>

               {username && 
                 <div className="nav-item"> <Link href="/Drivers"> Drivers </Link> 
                 </div>
                 }

                <div className="nav-item"> <Link href="/Race"> Race Results </Link> 
                </div>

                <div className="nav-item"> <Link href="/Login"> Login </Link> 
                </div>

                <div className="nav-item"> <div>
                    <form className="form-search">
                        <input type="text" onChange={searchChange} value={searchText} placeholder="Search.." name="search"/> 
                        <button type="submit" className="searchButton" onClick={credentialChange}> <i className="fa fa-search"> </i>
                            <Image 
                                src="/searchicon.png"
                                width={12}
                                height={13}
                            />
                        </button>
                    </form>
                
                </div>
                
                
                
                </div>



            </div>







        </div>
    )

}