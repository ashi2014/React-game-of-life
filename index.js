
var utils = {
    initializeGrid: function (rows, cols) {
        var newGrid = [];
        var i, j;
        var newRow;
        var rand;
        for (i = 0; i < rows; i++) {
            newRow = [];
            for (j = 0; j < cols; j++) {
                rand = Math.random();
                if (rand < 0.5) {
                    newRow.push(false);
                } else {
                    newRow.push(true);
                }
            }
            newGrid.push(newRow);
        }
        return newGrid;
    }
}

var grid = utils.initializeGrid(50, 70);

var Grid = React.createClass({

    render: function() {

        var rows = grid.map(function(row, i) {
            return (
                <Row key={i} row={i}/>
            )
        });
        return (
            <div>
                <table>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }

});

var Row = React.createClass({

    render: function() {

        var cells = grid[this.props.row].map(function(value, i) {
            return (
                <Cell key={i} active={value}/>
            )
        });
        return (
            <tr>
                {cells}
            </tr>
        )
    }
});

var Cell = React.createClass({

    render: function() {
        if (this.props.active) {
            return (
                <td className="active" />
            )
        } else {
            return (
                <td />
            )
        }
    }
});

ReactDOM.render(
    <Grid />,
    document.getElementById('content')
);