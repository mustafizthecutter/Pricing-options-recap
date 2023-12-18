import React from 'react';
import PriceOption from './PriceOption';

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "duration": "1 month",
            "facilities": ["Access to cardio area", "Basic weightlifting equipment"]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "duration": "3 months",
            "facilities": ["Full gym access", "Unlimited fitness classes", "Advanced weightlifting equipment"]
        },
        {
            "id": 3,
            "name": "VIP Membership",
            "price": 99.99,
            "duration": "6 months",
            "facilities": ["All premium facilities", "Exclusive access to VIP area", "Personal locker", "Nutritional consultation"]
        }
    ];

    return (

        <div>
            <h2 className='text-5xl'>Best Price in the town</h2>
            <div className='grid grid-cols-3 gap-6 mt-6 '>
                {
                    priceOptions?.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;