import React from 'react';
import './App.css';
import Menu from './component/Menu/Menu';
import articles from './articles.js';
import SectionArticles from './component/SectionArticles/SectionArticles';
import BoutiqueContext from './BoutiqueContext.js';
import Cart from './component/Cart/Cart.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesApp: articles,
      qteDecrement: this.qteDecrement.bind(this),
      panier:[],
    }
  }
  // creation d'une methode pour décrementer un article
  qteDecrement = (i) => {
    console.log("click et appel qteDecrement" + i);
    //index
    // je ne peux pas directement reatribuer une valeur à mes states
    // this.state.articlesApp[index].qte--;//!!!impossible
    // pour cela je dois utiliser un setter a partir de la methode setState
    // Etablir une condition qui verifie que qte >= 0
    if (this.state.articlesApp[i].qte > 0) {
      let tmpArticles = this.state.articlesApp.map((value, index) => {
        if (i === index) {
          value.qte--;
        }
        return value;
      })
      this.setState({
        ...this.state,
        // mise à jour de ma qte pour i(id de l'article)
        articlesApp: tmpArticles,
        // mise à jour de mon panier avec l'ajout de i
        panier:[...this.state.panier,i]
      })
    }
  }

  render() {
    return (
      <BoutiqueContext.Provider value={this.state}>
        <header>
          <Menu />
        </header>
        
        <main>
          <Cart panier={this.state.panier}>Mon super Panier</Cart>
          <SectionArticles articlesProp={this.state.articlesApp}></SectionArticles>
        </main>
        <footer></footer>
      </BoutiqueContext.Provider>
    );
  }
}

export default App;
