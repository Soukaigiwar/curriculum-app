import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Terms } from '../pages/Terms';

export function AuthRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/terms_of_service' element={<Terms />} />
        </Routes>
    );
};