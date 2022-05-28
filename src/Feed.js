import { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
// import db from "./firebase";
import UserService from "./services/user.service";

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      posts: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>
        <TweetBox />
        {this.state.posts.map((post) => (
          <Post
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </div>
    );
  }
}

{/* <div className="container">
  <header className="jumbotron">
    <h3>{this.state.content}</h3>
  </header>
</div> */}

// function Feed() {
//   const [posts, setPosts] = useState([]);

//   // useEffect(() => {
//   //   db.collection("posts").onSnapshot((snapshot) => {
//   //     setPosts(snapshot.docs.map((doc) => doc.data()));
//   //   });
//   // }, []);

//   return (
//     <div className="feed">
//       <div className="feed__header">
//         <h2>Home</h2>
//       </div>
//       <TweetBox />
//       {posts.map((post) => (
//         <Post
//           displayName={post.displayName}
//           username={post.username}
//           verified={post.verified}
//           text={post.text}
//           avatar={post.avatar}
//           image={post.image}
//         />
//       ))}
//     </div>
//   );
// }

// export default Feed;