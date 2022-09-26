import PropTypes from 'prop-types'

function Item(props){
    return(
        <>
            <li>{props.marca} - {props.ano}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano: PropTypes.number
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano: 0,
}

export default Item