/**
 * @copyright RCAcademy 2024
 * @author RCA <razymusic4@gmail.com>
 */

"use strict";


/**
 * import
 */
import { addEventOnElements } from "./utils/event.js";


/**
 * add menu functionality
 * @param {Node} $menuWrapper Menu parent node 
 * @param {Function} callback callback function 
 */
export const menu = function ($menuWrapper, callback) {
  const /** {NodeElement} */ $menu = $menuWrapper.querySelector('[data-menu]');
  const /** {NodeList} */ $menuTogglers = $menuWrapper.querySelectorAll('[data-menu-toggler]');
  const /** {NodeList} */ $menuItems = $menuWrapper.querySelectorAll('[data-menu-item]');

  addEventOnElements($menuTogglers, 'click', () => {
    $menu.classList.toggle('expanded');
  });

  addEventOnElements($menuItems, 'click', function() {
    $menu.classList.remove('expanded');
    if (callback) callback(this.dataset.menuItem);
  });
}