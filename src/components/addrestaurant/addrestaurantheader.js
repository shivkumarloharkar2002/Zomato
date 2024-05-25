import './addrestauranthheader.css';
export function AddRestaurantHeader() {
    return (
        <div className='backgroundImage'>   
       
            <div className="backgroundImageInner"> 
                <div className="backgroundImageTxt" />

                <div className="title">
                    <p>Partner with Zomato at 0% commission for the 1st month!</p>
                </div>

                <div className="tag">
                    And get ads worth INR 1500. Valid for new restaurant partners in select cities.
                </div>

                <div className="btns">
                    <a href='#'>Register your restaurant</a>
                    <a href='#'>Login to view your existing</a>
                </div>
            </div>
        </div>
    
    );
}

export default AddRestaurantHeader;

