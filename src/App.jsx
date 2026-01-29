import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ProfilDesa from './pages/ProfilDesa';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'profil-desa/:id',
                element: <ProfilDesa />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
