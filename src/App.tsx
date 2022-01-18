import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from '@pages/About';
import TestBB from '@pages/TestBB';
import TestSS from '@pages/TestSS';
import TestVS from '@pages/TestVS';
import TestSM from '@pages/TestSM';
import TestMB from '@pages/TestMB';
import LoginPage from '@pages/LoginPage';
import Timesheet from '@pages/Timesheet';
import TimesheetDetails from '@components/TimesheetDetails';
import PrivateRoute from '@components/PrivateRoute/PrivateRoute';
import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute';
import Layout from '@components/Layout';
import NotFoundPage from '@pages/NotFoundPage';
import AdminOverview from '@pages/AdminOverview';
import UserOverview from '@pages/UsersOverview/idex';
import People from '@pages/People';
import Profile from '@pages/Profile';
import Projects from '@pages/Projects';
import ErrorPage from '@pages/ErrorPage';
import ErrorBoundary from '@components/ErrorBoundary';
import ClientPage from '@components/ClientPage';

function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route element={<Layout />}>
                        <Route element={<ProtectedRoute />}>
                            <Route
                                path="user-overview"
                                element={<UserOverview />}
                            />
                            <Route path="about" element={<About />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/timesheet" element={<Timesheet />} />
                            <Route
                                path="/timesheet/:day/:month/:year"
                                element={<TimesheetDetails />}
                            />
                        </Route>
                        <Route element={<PrivateRoute />}>
                            <Route
                                path="/admin-overview"
                                element={<AdminOverview />}
                            />
                            <Route path="about" element={<About />} />
                            <Route path="/people" element={<People />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/clients" element={<ClientPage />} />
                        </Route>
                        <Route path="/testsm" element={<TestSM />} />
                        <Route path="/testvs" element={<TestVS />} />
                        <Route path="/testbb" element={<TestBB />} />
                        <Route path="/testss" element={<TestSS />} />
                        <Route path="/testmb" element={<TestMB />} />
                        <Route path="/error" element={<ErrorPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
