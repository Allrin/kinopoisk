import { useState } from 'react';

const mobileSize = 560;

const useIsMibile = () => {
    const [mobile, setMobile] = useState(null);
    let isMobile;
    window.addEventListener('resize', () => {
        isMobile = window.innerWidth < mobileSize ? true : false;
        setMobile(isMobile);
    });

    return mobile;
};

export default useIsMibile;
