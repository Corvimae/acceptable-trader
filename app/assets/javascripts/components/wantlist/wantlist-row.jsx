var WantlistRow = React.createClass({
	handleClick: function(index) {
		this.props.toggle(this.props.index, index);
	},
	render: function() {
		var selectionRow = this.props.selectionRow;
		var handleClick = this.handleClick
		var items = this.props.items;
		var dataIndex = items.indexOf(this.props.data)
		var itemBoxes = items.map(function(x, index) {
			if(index == dataIndex) {
				return (
					<td key={index} className={x.is_group ? "wantlist-cell-group" : ""}>-</td>
				);
			} else {
				return (
					<td key={index} className={x.is_group ? "wantlist-cell-group" : ""} onClick={function() { handleClick(index) } }>
						{selectionRow[index] ? <i className="fi-check"></i> : null}
					</td>
				);
			}
		});
		var itemName;
		if(this.props.data.is_group) {
			itemName = <td className="wantlist-row-name wantlist-cell-group">{this.props.data.name}</td>
		} else {
			itemName = <td className="wantlist-row-name">
				<a href={"/trades/" + this.props.trade.id + "/items/" + this.props.data.item_id}>
					{this.props.data.alt_name ? this.props.data.alt_name : this.props.data.bgg_item_data.name}
				</a>
				<a className="button tiny alert wantlist-row-remove" onClick={this.props.removeRow}>&times;</a>
			</td>
		}
		return (
			<tr>
				{itemName}
				{itemBoxes}
			</tr>
		);
	}
});