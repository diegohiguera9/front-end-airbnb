import "../styles/components/comment.scss";
const Comment = () => {
  return (
    <div className="commentContainer">
      <div className="userContainerflex">
        <div className="profileImg">
          <img
            src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/73504733_10218398389924456_2861460792035770368_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fAkZyWCpTjkAX8ltdkv&_nc_ht=scontent-bog1-1.xx&oh=00_AT-CNehoY4asa7bNhJdu47MxLj0lEnf9b5YkxV0gdDIk0w&oe=636BBE8D"
            alt="cargando"
          ></img>
        </div>
        <div className="user">
          <div className="userName">
            
            <h3>jhon</h3>
          </div>
          <div className="commentDate">jul 2022</div>
        </div>
      </div>
      <div className="message">excelente ubicacion</div>
    </div>
  );
};

export default Comment;
