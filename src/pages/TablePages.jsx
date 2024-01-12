// import Table from "../components/Table";

import SortableTable from "../components/SortableTable";

function TabelPages() {
    const dataTabel = [
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Apel', color: 'bg-red-300', score: 3},
        {name: 'Banana', color: 'bg-yellow-700', score: 2},
        {name: 'Lime', color: 'bg-green-200', score: 1},
    ];

    const config = [
        {
            label: 'Name',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score
        },
    ];

    const keyFn = (key) => {
        return key.name;
    };

    return (
        <div>
            <SortableTable data={dataTabel} config={config} keyFn={keyFn}/>
        </div>
    );
}

export default TabelPages