import ReactDOM from 'react-dom';
function Portal()
{
    return ReactDOM.createPortal(<h1>Parent root</h1>,document.getElementById("portal-root"));
}
export default Portal;