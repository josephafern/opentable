import React from 'react';

class Splash extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className='splash'>
                <img src={window.bannerUrl} className='hero-img'/>
            </div>
        );
    }
}

export default Splash;