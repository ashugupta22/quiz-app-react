import './footer.css';
function Footer(props) {
    return (
        <>
            <footer className="footer">
                <button className='btn' onClick={props.onClick} disabled={props.disabled}>{props.name}</button>
            </footer>
        </>
    )
};
export default Footer;