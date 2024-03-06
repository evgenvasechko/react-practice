import React from 'react';
import styles from './news.module.scss';
import headPhoto from '../../assets/images/newsHero.jpeg';
import arrow from '../../assets/icons/arrowOpen.png';

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
        }
    }

    toggleFullShortText = () => {
        this.setState(prev => ({
            opened: !prev.opened,
        }));
    }

    render() {
        const { opened } = this.state;
        const { title = 'Lorem ipsum', photo = headPhoto, longDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eligendi iusto officiis placeat quibusdam\n' +
            '    voluptate? Culpa cumque error eum explicabo id, nihil nisi, placeat quia quibusdam, recusandae reiciendis soluta\n' +
            '    vitae?' } = this.props;

        return (
            <div className={styles.news}>
                <h1 className={styles.news__title}>{title}</h1>
                <img className={styles.news__hero} src={photo} alt="hero-photo must be here..."/>
                <div className={styles.news__text}>
                    <div className={`${styles.news__desc}${opened ? ' ' + styles.opened : ''}`}>
                        {longDescription}
                    </div>
                    <img className={`${styles.news__arrow}`} onClick={this.toggleFullShortText} src={arrow} alt=""/>
                </div>
            </div>
        );
    }
}

export default News;
