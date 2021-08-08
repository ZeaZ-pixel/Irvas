import modals from './modules/modals';
import tabs from './modules/tabs';
import form from './modules/form';
import timer from './modules/timer';
import changeModalState from './modules/changeModalState';
import images from './modules/images';
import './slider';

let modalState = {};

changeModalState(modalState);
modals();
tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
tabs('.balcon_icons', '.balcon_icons_img', '.big_img>img', 'do_image_more', 'inline-block');
timer('#timer', '2021-08-30');
form(modalState);
images();