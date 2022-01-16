import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from '@pages/ErrorPage';
import ErrorBoundary from '@components/ErrorBoundary';

const About = lazy(() => import('@pages/About'));
const Home = lazy(() => import('@pages/Home'));
const TestBB = lazy(() => import('@pages/TestBB'));
const TestSS = lazy(() => import('@pages/TestSS'));
const TestVS = lazy(() => import('@pages/TestVS'));
const TestSM = lazy(() => import('@pages/TestSM'));
const TestMB = lazy(() => import('@pages/TestMB'));
const LoginPage = lazy(() => import('@pages/LoginPage'));
const Timesheet = lazy(() => import('@pages/Timesheet'));
const TimesheetDetails = lazy(() => import('@components/TimesheetDetails'));
const Test = lazy(() => import('@components/PrivateRoute/Test'));
const Layout = lazy(() => import('@components/Layout'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));
const AdminOverview = lazy(() => import('@pages/AdminOverview'));
const People = lazy(() => import('@pages/People'));
const Profile = lazy(() => import('@pages/Profile'));
const Projects = lazy(() => import('@pages/Projects'));
const PrivateRoute = lazy(
    () => import('@components/PrivateRoute/PrivateRoute')
);
const ProtectedRoute = lazy(
    () => import('@components/ProtectedRoute/ProtectedRoute')
);
const Tutorials = lazy(() => import('@pages/Tutorials'));

function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<Layout />}>
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <Home />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="about"
                            element={
                                <ProtectedRoute>
                                    <About />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="about"
                            element={
                                <PrivateRoute>
                                    <About />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="test1"
                            element={
                                <PrivateRoute>
                                    <Test />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/people"
                            element={
                                <ProtectedRoute>
                                    <People />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <ProtectedRoute>
                                    <Profile />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/projects"
                            element={
                                <ProtectedRoute>
                                    <Projects />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/testsm" element={<TestSM />} />
                        <Route path="/testvs" element={<TestVS />} />
                        <Route path="/testbb" element={<TestBB />} />
                        <Route path="/testss" element={<TestSS />} />
                        <Route path="/timesheet" element={<Timesheet />} />
                        <Route
                            path="/timesheet/:day/:month/:year"
                            element={<TimesheetDetails />}
                        />
                        <Route path="/testmb" element={<TestMB />} />
                        <Route path="/error" element={<ErrorPage />} />
                        <Route
                            path="/admin-overview"
                            element={
                                <PrivateRoute>
                                    <AdminOverview />
                                </PrivateRoute>
                            }
                        />
                        <Route path="/tutorials" element={<Tutorials />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
