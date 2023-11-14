import React from 'react';
import './App.css';
import Menu from './component/Menu/Menu';
import articles from './articles.js';
import SectionArticles from './component/SectionArticles/SectionArticles';
import BoutiqueContext from './BoutiqueContext.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesApp: articles,
      qteDecrement: this.qteDecrement.bind(this)
    }
  }
  // creation d'une methode pour décrementer un article
  qteDecrement = (index) => {
    console.log("click et appel qteDecrement"
    +index);
    //index
    this.state.articlesApp[index].qte--;
  }

  render() {
    return (
      <BoutiqueContext.Provider value={this.state}>
        <header>
          <Menu />
        </header>
        <main>
          <SectionArticles articlesProp={this.state.articlesApp}></SectionArticles>
        </main>
        <footer></footer>
      </BoutiqueContext.Provider>
    );
  }
}

export default App;
