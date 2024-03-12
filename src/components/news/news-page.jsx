import React from "react";
import { connect } from "react-redux";
import { setNewsActionCreate as setNews } from "../../actions/news";
import News from "./news-unit/news";



const NewsPage = (props) => {
    const newsArr = props.newsData.map((elem) => {
        return <News 
            key={elem.id}
            id={elem.id} 
            title={elem.title} 
            likes={elem.likes} 
            shortDesc={elem.shortDesc} 
            longDescription={elem.longDescription} 
            headPhoto = {elem.headPhoto} />
    });


    return (
        <div>{newsArr}</div>
    )
};



const mapStateToProps = (state) => ({
    newsData: state.newsPage.newsData,
});

const mapDispatchToProps = {
    setNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
