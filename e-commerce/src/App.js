import React from 'react';
// Here we copy the menu card 3 times which is wrong because we repet the code

const menuCardsData = [
    { title: 'HATS', id: 1 },
    { title: 'SNEAKERS', id: 2 },
    { title: 'JACKETS', id: 3 },
]

class App extends React.Component {

    render() {
        return (
            <section className='menu-categoris'>
                <div className='container'>
                    <h1>E Commerce</h1>

                    {
                        menuCardsData.map(({ title, id }) => {
                            return (
                                <div key={id} className='card-menu'>
                                    <div className='card-menu__body'>
                                        <h2>{title}</h2>
                                        <h3>Shop now</h3>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
        )
    }
}

export default App;