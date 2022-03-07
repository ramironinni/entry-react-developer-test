import { Component } from 'react';
import styles from './SizeCheckboxGroup.module.css';
import SizeCheckboxItem from './SizeCheckboxItem/SizeCheckboxItem';

class SizeCheckboxGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.sizes.filter((size) => size.selected)[0].name,
        };
    }

    onChangelHandler(name) {
        this.setState({ checked: name });
    }

    render() {
        return (
            <div className={styles.sizeGroup}>
                {this.props.sizes.map((size, i) => {
                    return (
                        <SizeCheckboxItem
                            key={i}
                            name={size.name}
                            available={size.available}
                            checked={this.state.checked}
                            inputName={this.props.inputName}
                            extraClasses={this.props.extraClasses}
                            // onChange={this.onChangelHandler.bind(this)}
                            onChangeSize={this.props.onChangeSize}
                        />
                    );
                })}
            </div>
        );
    }
}

export default SizeCheckboxGroup;
