function Menu(){
    return (
        <div>
            <ul style = {{
                display: 'flex',
                listStyleType: 'none', 
                margin: 0, padding: 0, 
                justifyContent: 'center', 
                color: 'white', 
                backgroundColor: 'black'
                
                }}>
                <li style ={{padding: 10}}>Home</li>
                <li style ={{padding: 10}}>Search</li>
                <li style ={{padding: 10}}>Contact</li>
                <li style ={{padding: 10}}>Login</li>
            </ul>
        </div>
    )
}
export default Menu;