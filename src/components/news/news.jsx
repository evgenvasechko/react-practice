import React from "react";
import styles from './news.module.scss';
import headPhoto from '../../assets/images/newsHero.jpeg';
import arrow from '../../assets/icons/arrowOpen.png'

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'First event of the summer!',
            headPhoto: headPhoto,
            // description: 'Short text about event before the accordion rolling out...',
            longDescription: 'Short text about event before the accordion rolling out...Short text about event before the accordion rolling out...Short text about event before the accordion rolling out...Short text about event before the accordion rolling out...Short text about event before the accordion rolling out...Short text about event before the accordion rolling out...Short text about event before the accordion rolling out...Short text about event before the accordion rolling out...Short text about event before the accordion rolling out...Short text about event before the accordion rolling out...Short text about event before the accordion rolling out...Short text about event before the accordion rolling out...Short text about event before the accordion rolling out...Short text about event before the accordion rolling out...',
            opened: false,
            arrow: arrow,
            arrowClassName: styles.news__arrow,
            textClassName: styles.news__desc
        }
    }
    openFullText = () => {
        return this.state.opened ? 
        this.setState({
            opened: false,
            arrowClassName: styles.news__arrow,
            textClassName: styles.news__desc
        })
        :
        this.setState({
            opened: true,
            arrowClassName: styles.news__arrow_close,
            textClassName: styles.news__desc_close
        });
    }
    render() {
        return <div className={styles.news}>
            <h1 className={styles.news__title}>{this.state.title}</h1>
            <img className={styles.news__hero} src={this.state.headPhoto} alt="hero-photo must be here..." />
            <div className={styles.news__text}>
                <div className={this.state.textClassName}>
                    {this.state.longDescription}
                </div>
                <img className={this.state.arrowClassName} onClick={this.openFullText} src={this.state.arrow} alt="" />
            </div>
        </div>
    }
}

export default News;