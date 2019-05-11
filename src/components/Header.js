import "styles/Header.css";
import ExportButtons from "./ExportButtons";

/**
 * The page header
 */
export default class Header {
  /**
   * Creates a Header component
   */
  constructor() {
    this._container = document.createElement("div");
  }

  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    this._container.className = "header";

    const logoContainer = document.createElement("div");
    //creating an onclick event on the duck image in the page to open a google page with duck images.
      logoContainer.addEventListener("click", function() 
    {
      //the click event will open a page with images of ducks.
      window.open('https://www.google.com/search?q=ducks&rlz=1C1AVNE_enIN692IN692&source=lnms&tbm=isch&sa=X&ved=0ahUKEwivgeLcrJLiAhVDKKwKHQEvAToQ_AUIDigB&biw=1242&bih=568');
    }    
    );
    logoContainer.className = "logo-container";
    

    const title = document.createElement("h1");
    title.innerText = "Chuck's Ducks";

    const exportButtons = new ExportButtons();
    this._container.appendChild(logoContainer);
    this._container.appendChild(title);
    this._container.appendChild(exportButtons.getElement());

    return this._container;
  }
}
