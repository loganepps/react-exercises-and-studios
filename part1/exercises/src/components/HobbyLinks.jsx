export default function HobbyLinks () {
    let hobbyLinks = ["https://www.nps.gov/ozar/index.htm", "https://www.drumeo.com/", "https://sketch.io/sketchpad-v5.1/"];
    return (
    <div>
    <h3>My Hobbies</h3>
    <a href={hobbyLinks[0]}>Hiking and Floating</a><br></br>
    <a href={hobbyLinks[1]}>Drumming</a><br></br>
    <a href={hobbyLinks[2]}>Drawing</a><br></br>
    </div>
)
}