import "./Component.css";
function Profil(props) {
  return (
    <div
      className="Container"
      style={{
        border: "1px solid",
        height: "80vh",
        width: "50%",
        marginLeft: "350px",
        marginTop: "50px",
        backgroundColor: "hsl(180, 46%, 46%)",
      }}
    >
      <div className="Identity">
        <div className="Image">
          <img
            style={{
              height: "80px",
              width: "15%",
              borderRadius: "80%",
            }}
            src={props.data.Image}
          />
        </div>
        <div className="info">
          <div> {props.data.FullName} </div>
          <div> {props.data.Profession}</div>
        </div>
      </div>
      <div className="Bio"></div>
      {props.data.bio}
    </div>
  );
}

export default Profil;
