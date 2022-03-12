import React from 'react';
import './styles/code.css';
import './styles/team.css';
import './styles/index.css';
import './styles/projects.css';
import './styles/workshops.css';
import Team from './pages/Team';
import Home from './pages/Home';
import Error from './pages/Error'; 
import Projects from './pages/Projects';
import Workshop from './pages/Workshop';
import { Route, Routes } from 'react-router-dom';
import CodeOfConduct from './pages/CodeOfConduct';

const App = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/codeofconduct" element={<CodeOfConduct />} />
                <Route exact path="/team" element={<Team />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/workshops" element={<Workshop />} />
                <Route exact path="/*" element={<Error />} />
            </Routes>
        </>
    );
}

export default App;