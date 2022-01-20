import React from 'react';
import FragmentCoulmn from './FragmentCoulmn';
class FragmentTable extends React.Component{
    render()
    {
        return(
            <table>
                <tbody>
                    <tr>
                        <FragmentCoulmn/>
                    </tr>
                </tbody>
            </table>
        )
    }
}
export default FragmentTable;