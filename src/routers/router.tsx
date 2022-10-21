import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '@pages/main';
import AuthUser from '@pages/auth/user';
import AuthSuccess from '@pages/auth/success';

function DefaultRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth/user" element={<AuthUser />} />
        <Route path="/auth/success" element={<AuthSuccess />} />
      </Routes>
    </Router>
  );
}

export default DefaultRouter;
