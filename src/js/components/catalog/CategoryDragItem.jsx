import React from 'react'
import { DragSource } from 'react-dnd'
import { Thumbnail, Button }  from 'react-bootstrap'

const mySource = {

    beginDrag(props) {
        return {
            id : props.id
        }
    },

    endDrag(props, monitor, component) {}

}

function collect(connect, monitor) {
    return {
        connectDragSource : connect.dragSource(),
        isDragging        : monitor.isDragging()
    }
}

const CategoryDragItem = React.createClass({
    getDefaultProps() {
        return {
            item : {},
            onItemClicked : () => {}
        }
    },
    onClick(e) {
        // onClick handler for CartDragItem
        if (typeof this.props.onItemClicked === 'function') {
            let fn = this.props.onItemClicked
            fn(e, this.props.item)
        }
    },
    render() {
        const { id, isDragging, connectDragSource } = this.props
        return connectDragSource(
            <div className='card category-link scroll-to' href='#inner-menu'
                onClick={this.onClick}>
                {/* Looks like these are cached... may need to rethink my approach this should be overridden */}
                <Thumbnail src={QC_IMAGES_URI + this.props.item.image} />
                
                <span className='item-name'>
                    {this.props.item['name']}
                </span>
            </div>
        )
    }
})

module.exports = DragSource('sprite', mySource, collect)(CategoryDragItem)
