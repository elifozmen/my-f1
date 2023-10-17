import Constructor from '/components/constructors'
import Driver from '/components/driver'
import Race from '/components/raceresult'

export default function HomePage() {
    return(
        <div className="homePage">
            <div className="home-list">
                <Constructor> </Constructor>
                <Driver> </Driver>
                <Race> </Race>
            </div>

        </div>
    )
}