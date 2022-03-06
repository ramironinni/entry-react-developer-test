import { Component } from 'react';
import styles from './ImageSlider.module.css';
import arrow from '../../../../assets/arrow.svg';

class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = { currentImg: 0 };
    }

    length = this.props.images.length;

    prevSlideHandler() {
        this.setState((curr) => {
            return {
                currentImg:
                    curr.currentImg === 0
                        ? this.length - 1
                        : curr.currentImg - 1,
            };
        });
    }

    nextSlideHandler() {
        this.setState((curr) => {
            return {
                currentImg:
                    curr.currentImg === this.length - 1
                        ? 0
                        : curr.currentImg + 1,
            };
        });
    }

    render() {
        return (
            <div className={styles.slider}>
                <div className={styles.arrowLeftContainer}>
                    <img
                        className={styles.arrowLeft}
                        src={arrow}
                        alt="arrow left"
                        onClick={this.prevSlideHandler.bind(this)}
                    />
                </div>
                <div className={styles.arrowRightContainer}>
                    <img
                        className={styles.arrowRight}
                        src={arrow}
                        alt="arrow right"
                        onClick={this.nextSlideHandler.bind(this)}
                    />
                </div>
                {this.props.images.map((img, i) => {
                    return (
                        <div
                            className={
                                i === this.state.currentImg
                                    ? `${styles.slide} ${styles.current}`
                                    : styles.slide
                            }
                            key={i}
                        >
                            {i === this.state.currentImg && (
                                <img src={img} alt="product" />
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ImageSlider;
