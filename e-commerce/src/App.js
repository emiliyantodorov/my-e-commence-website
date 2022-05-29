import React from 'react';
// Here we copy the menu card 3 times which is wrong because we repet the code

class App extends React.Component {

    render() {
        return (
            <section className='menu-categoris'>
                <div className='container'>
                    <h1>E Commerce</h1>

                    <div className='card-menu'>
                        <div className='card-menu__body'>
                            <h2>HATS</h2>
                            <h3>Shop now</h3>
                        </div>
                    </div>
                    <div className='card-menu'>
                        <div className='card-menu__body'>
                            <h2>JACKETS</h2>
                            <h3>Shop now</h3>
                        </div>
                    </div>
                    <div className='card-menu'>
                        <div className='card-menu__body'>
                            <h2>SNEAKERS</h2>
                            <h3>Shop now</h3>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default App;