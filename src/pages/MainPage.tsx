import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar/Sidebar';

const MainPage = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
            <Sidebar />
            <div style={{ display: 'flex', width: "100%", flexDirection: 'column', minHeight: '100vh' }}>
                <Header name={'Main Page'} icon={undefined} />
                <div style={{ display: 'flex', flex: 1, padding: '20px' }}>
                    <div style={{ flex: 1 }}>
                        <h1>Main Page</h1>
                        <p>This is the main page content.</p>
                        <p>Feel free to add more components or content here.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default MainPage;