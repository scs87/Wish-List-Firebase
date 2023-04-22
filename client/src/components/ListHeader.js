const ListHeader = ({ listName }) => {

    const salir = () => {
      console.log("has salido");

    }

    return (
      <div className = "list-header">
        <h1>{listName}</h1>
        <div className="btn-container">
          <button className="añadir">ADD NEW</button>
          <button className="salir" onClick={salir}>SIGN OUT</button>
        </div>
      </div>
    );
  }
  
  export default ListHeader;
  