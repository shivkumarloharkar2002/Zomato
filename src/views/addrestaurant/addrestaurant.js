// import React from 'react';
// import { Link } from 'react-router-dom';
// import './addrestaurant.css';
// import AddRestaurantImage from './addresto.jpg';

// function AddRestaurantHeader() {
//     return (
//         <div className='AddRestaurant'>
//             <div className="AddRestaurantInner">
//                 <img src={AddRestaurantImage} alt="Add Restaurant" className="AddRestaurantImg" />
//                 <div className="AddRestaurantTxt">
//                     <div className="title">
//                         Partner with Zomato at 0% commission for the 1st month!
//                     </div>
//                     <div className="tag">
//                         And get ads worth INR 1500. Valid for new restaurant partners in select cities.
//                     </div>
//                     <div className="btns">
//                         <Link to='/' className="btn">Register your restaurant</Link>
//                         <Link to='/' className="btn">Login to view your existing</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AddRestaurantHeader;
import React from 'react';
import './addrestaurant.css';
import { Link } from 'react-router-dom';
import AddRestaurantImage from './addresto.jpg';

function AddRestaurantHeader() {
    const backgroundImageStyle = {
        backgroundImage: `url(${AddRestaurantImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '25rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginBottom: '2rem',
    };

    return (
            // <div className='AddRestaurant'>
        <div style={backgroundImageStyle}>
             <div className='AddRestaurant'>
            <div className="AddRestaurantTxt">
                <div className="title">
                    Partner with Zomato at 0% commission for the 1st month!
                </div>
                <div className="tag">
                    And get ads worth INR 1500. Valid for new restaurant partners in select cities.
                </div>
                <div className="btns">
                    <Link to='/' className="btn">Register your restaurant</Link>
                    <Link to='/' className="btn">Login to view your existing</Link>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AddRestaurantHeader;
