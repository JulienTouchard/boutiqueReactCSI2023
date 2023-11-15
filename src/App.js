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
      panier: [],
      total: 0,
      qteDecrement: this.qteDecrement.bind(this),
      qteIncrement: this.qteIncrement.bind(this),
    }
  }
  // creation d'une methode pour décrementer un article
  /**
   * Cette methode sert à decrementer la qte d'article acheter et inserer un nouevel objet {"idPanier":0,"qtePanier":1}
   * dans this.state.panier
   * @param {INT} id 
   */
  qteDecrement = (id) => {
    console.log("click et appel qteDecrement" + id);
    //index
    // je ne peux pas directement reatribuer une valeur à mes states
    // this.state.articlesApp[index].qte--;//!!!impossible
    // pour cela je dois utiliser un setter a partir de la methode setState
    // Etablir une condition qui verifie que qte >= 0
    if (this.state.articlesApp[id].qte > 0) {
      let tmpArticles = this.state.articlesApp.map((value, index) => {
        if (id === index) {
          value.qte--;
        }
        return value;
      })
      // au lieu d'utiliser un id(int) en guise d'achat je vais developper un objet
      // qui aura la forme suivante {"idPanier":0,"qtePanier":1}
      // Je dois verifier dans panier qu'il n'existe pas déjà d'objet avec un idPanier === id => creer cet objet
      // sinon j'incremente qtePanier de l'objet
      let tmpPanier = [];
      let stop = false;
      if (this.state.panier.length > 0) {
        tmpPanier = this.state.panier.map(element => {
          if (element.idPanier === id) {
            element.qtePanier++;
            stop = true;
          }
          return element;
        });
      }
      if (!stop) tmpPanier = [...tmpPanier, { "idPanier": id, "qtePanier": 1 }];

      this.setState({
        ...this.state,
        // mise à jour de ma qte pour i(id de l'article)
        articlesApp: tmpArticles,
        // mise à jour de mon panier avec l'ajout de i
        panier: tmpPanier,
        total: this.calculTotal()

      })
    }
  }
  // methode pour décrémenter la quentité d'article & supprimer l'id du panier
  qteIncrement = (id) => {
    const tmpPanier = this.state.panier;
    const tmpArticles = this.state.articlesApp;
    tmpPanier.map((value, index) => {
      if (id === value.idPanier) {
        tmpPanier[index].qtePanier--;
        if (tmpPanier[index].qtePanier === 0) {
          //  supprimer l'entrée correspondante dans tmpPanier avec splice et index
          tmpPanier.splice(index, 1);
        }
        // incrémenter l'article correspondant à l'id dans articlesApp
        tmpArticles[id].qte++;
        // setstate pour reajuster le panier et la qte (articlesApp)
        this.setState({
          ...this.state,
          // mise à jour de ma qte pour i(id de l'article)
          articlesApp: tmpArticles,
          // mise à jour de mon panier avec l'ajout de i
          panier: tmpPanier,
          total:this.calculTotal()
        })
      }
    })
    
  }
  calculTotal = () => {
    let tmptotal = 0;
    if (this.state.panier.length > 0) {
      this.state.panier.forEach((element) => {
        tmptotal += (this.state.articlesApp[element.idPanier].price*element.qtePanier);
      });
    }
    /* this.setState({
      ...this.state,
      total:tmptotal
    }) */
    console.log(tmptotal)
    return tmptotal;
  }
  render() {
    return (
      <BoutiqueContext.Provider value={this.state}>
        <header>
          <Menu />
        </header>

        <main>
          <Cart panier={this.state.panier} total={this.state.total}>Mon super Panier</Cart>
          <SectionArticles articlesProp={this.state.articlesApp}></SectionArticles>
        </main>
        <footer></footer>
      </BoutiqueContext.Provider>
    );
  }
}

export default App;
