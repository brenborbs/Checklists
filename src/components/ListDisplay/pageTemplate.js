
import React from 'react';

export default class PageTemplate extends React.Component {
    render() {
        return (
            <div style={{ position: "absolute", top: "2em", left: "2em", right: "2em", bottom: "2em" }}>
                Page {this.props.pageNum} of {this.props.totalPages}
            </div>
        );
    }
}
