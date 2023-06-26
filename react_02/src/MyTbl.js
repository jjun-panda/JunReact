import staye from './css/index.css'

function MyTbl({myArray}) {
    const myList = myArray.map(function(item) {
        return (
        <tr>
            <td>{item.seq}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
        </tr>
        );
    });
    return (<table>{myList}</table>);
}
export default MyTbl;
