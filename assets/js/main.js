// main.js — entry point
// Renders every section, then wires up UI behaviour.

import { renderSidebar }   from './renderers/sidebar.js';
import { renderNavbar }    from './renderers/navbar.js';
import { renderAbout }     from './renderers/about.js';
import { renderResume }    from './renderers/resume.js';

import { initSidebar }    from './ui/sidebar.js';
import { initNavigation } from './ui/navigation.js';


// wire up interactions
initSidebar();
//initNavigation();