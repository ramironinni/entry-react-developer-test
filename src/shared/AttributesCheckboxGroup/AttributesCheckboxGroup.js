import { Component } from 'react';
import styles from './AttributesCheckboxGroup.module.css';
import AttributeCheckboxItem from './AttributeCheckboxItem/AttributeCheckboxItem';

class AttributesCheckboxGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: null,
        };
    }

    onChangelHandler(id) {
        this.setState({ checked: id });
    }

    render() {
        return (
            <div className={styles.sizeGroup}>
                {this.props.items.map((item, i) => {
                    return (
                        <AttributeCheckboxItem
                            key={i}
                            id={item.id}
                            index={this.props.index}
                            value={item.value}
                            checked={
                                this.state.checked === item.id ? 'checked' : ''
                            }
                            inputName={this.props.inputName}
                            extraClasses={this.props.extraClasses}
                            onChangeAttribute={this.onChangelHandler.bind(this)}
                        />
                    );
                })}
            </div>
        );
    }
}

export default AttributesCheckboxGroup;
