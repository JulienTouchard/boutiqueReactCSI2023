import Card from "../Card/Card"
import './SectionArticles.css';
const SectionArticles = (props)=>{
    return(
        <section>
            <h1>Mes fabuleux articles : </h1>
            {/* emplacement de mes cards articles */}
            <div className="sectionArticles">
                {
                    props.articlesProp.map((value,index)=>{
                        return(
                            <Card articleProp={value} key={index}></Card>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default SectionArticles