import { Component } from 'react';
import Page from '../../shared/Page/Page';

class NotFound extends Component {
    render() {
        return (
            <Page>
                <div>
                    <p>Oops!</p>
                    <p>This page doesn't exist.</p>
                </div>
            </Page>
        );
    }
}

export default NotFound;
