import { Routes, Route } from 'react-router-dom';

import { Curriculums } from '../pages/Curriculums';
import { Details } from '../pages/Details';
import { NewCurriculum } from '../pages/NewCurriculum';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Curriculums />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/new' element={<NewCurriculum />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    );
};