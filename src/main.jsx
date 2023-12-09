import React from "react";
import './styles.css';

function Main() {
    const handleClick = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div className="col-12 d-flex flex-column align-items-center md-px-5 px-1" style={{ minHeight: '100vh' }}>
            <h1 className="text-warning py-3">My Home Page</h1>

            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col" className="text-warning md-pe-5 pe-1">#</th>
                        <th scope="col" className="text-warning md-pe-5 pe-1">Album</th>
                        <th scope="col" className="text-warning md-pe-5 pe-1">Band</th>
                        <th scope="col" className="text-warning md-pe-5 pe-1">Year</th>
                        <th scope="col" className="text-warning md-pe-5 pe-1">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" className="text-warning">1</th>
                        <td className="text-warning">Ramones</td>
                        <td className="text-warning">Ramones</td>
                        <td className="text-warning">1976</td>
                        <td className="text-warning">This self-titled debut album is often considered the starting point of punk rock</td>
                    </tr>

                    <tr>
                        <th scope="row" className="text-warning">2</th>
                        <td className="text-warning">Never Mind the Bollocks, Here's the Sex Pistols</td>
                        <td className="text-warning">Sex Pistols</td>
                        <td className="text-warning">1977</td>
                        <td className="text-warning">An explosive and controversial album that epitomizes the punk ethos</td>
                    </tr>

                    <tr>
                        <th scope="row" className="text-warning">3</th>
                        <td className="text-warning">The Clash</td>
                        <td className="text-warning">The Clash</td>
                        <td className="text-warning">1977</td>
                        <td className="text-warning">Their debut album blended punk with reggae, rockabilly, and more, showcasing diversity within the genre</td>
                    </tr>

                    <tr>
                        <th scope="row" className="text-warning">4</th>
                        <td className="text-warning">Another Music in a Different Kitchen</td>
                        <td className="text-warning">Buzzcocks </td>
                        <td className="text-warning">1978</td>
                        <td className="text-warning">Known for its catchy melodies and energetic sound</td>
                    </tr>

                    <tr>
                        <th scope="row" className="text-warning">5</th>
                        <td className="text-warning">Fresh Fruit for Rotting Vegetables</td>
                        <td className="text-warning">Dead Kennedys</td>
                        <td className="text-warning">1980</td>
                        <td className="text-warning">A politically charged album with satirical and abrasive themes</td>
                    </tr>

                </tbody>
            </table>


            <button onClick={handleClick} className="btn btn-warning px-5 my-2">Logout</button>
        </div>

    )
}
export default Main;