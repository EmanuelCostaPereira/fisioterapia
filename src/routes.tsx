import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/Main';
import AcupunturaPage from './pages/Main/Acupuntura';
import VentosaPage from './pages/Main/ventosa';
import AuriculoterapiaPage from './pages/Main/auriculoterapia';
import LiberacaoPage from './pages/Main/liberacao';
import ProfilePage from './pages/Main/profile';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route  path="/" element={<ProfilePage />} />
        <Route path="acupuntura" element={<AcupunturaPage />} />
        <Route path="ventosa" element={<VentosaPage />} />
        <Route path="liberacao" element={<LiberacaoPage />} />
        <Route path="auriculoterapia" element={<AuriculoterapiaPage />} />
      </Route>
    </Routes>
  );
}
